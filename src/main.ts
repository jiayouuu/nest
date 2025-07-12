import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });
  // 获取配置服务
  const configService = app.get(ConfigService);

  // 设置全局前缀
  app.setGlobalPrefix(configService.get('server.prefix')!);
  // 允许跨域
  app.enableCors();
  // 设置全局管道
  app.useGlobalPipes(
    new ValidationPipe({
      // 自动去除没有在 DTO 中声明的字段
      whitelist: true,
      // 禁止非白名单的字段
      forbidNonWhitelisted: true,
      // 自动类型转换
      transform: true,
    }),
  );

  await app.listen(configService.get('server.port')!);
}
void bootstrap();
