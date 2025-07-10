import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['error'] });
  // 设置全局前缀
  app.setGlobalPrefix('api');
  // 允许跨域
  app.enableCors();
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
  await app.listen(process.env.PORT ?? 3000);
}
void bootstrap();
