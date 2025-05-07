import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User, 'registryConnection')
    private userModel: typeof User,
  ) {}

  create(createUserInput: CreateUserInput) {
    return this.userModel.create({
      ...createUserInput,
    });
  }

  findAll() {
    return this.userModel.findAll();
  }

  findOne(id: string) {
    return this.userModel.findOne({ where: { id } });
  }

  update(id: string, updateUserInput: UpdateUserInput) {
    return this.userModel.update(updateUserInput, { where: { id } });
  }

  remove(id: string) {
    return this.userModel.destroy({ where: { id } });
  }

  findOneByPhone(phone: string) {
    return this.userModel.findOne({ where: { phone } });
  }
}
