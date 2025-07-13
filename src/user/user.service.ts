import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User) private readonly UserRepository: Repository<User>,
  ) {}
  async add(user: Partial<User>) {
    return await this.UserRepository.insert(user);
  }
  // get(id: string) {
  //   return this.UserRepository.findOne({ where: { id } });
  // }
  getAll(user: Partial<User>) {
    return this.UserRepository.find({ where: user });
  }
  update(id: string, user: Partial<User>) {
    return this.UserRepository.update(id, user);
  }
  delete(id: string) {
    return this.UserRepository.delete(id);
  }
}
