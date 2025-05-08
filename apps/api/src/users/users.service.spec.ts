import { Test, TestingModule } from '@nestjs/testing';
import { UsersService } from './users.service';
import { getModelToken } from '@nestjs/sequelize';
import { User } from './entities/user.entity';

const mockUser = {
  id: 'uuid-123',
  name: 'John Doe',
  ssn: '123-45-6789',
  email: 'john@example.com',
  phone: '555-1234',
  address: '123 Main St',
};

const mockUserWithoutId = {
  name: 'John Doe',
  ssn: '123-45-6789',
  email: 'john@example.com',
  phone: '555-1234',
  address: '123 Main St',
};

const mockUserModel = {
  create: jest.fn().mockResolvedValue(mockUser),
  findAll: jest.fn().mockResolvedValue([mockUser]),
  findOne: jest.fn().mockResolvedValue(mockUser),
  update: jest.fn().mockResolvedValue([1, [mockUser]]),
  destroy: jest.fn().mockResolvedValue(1),
};

describe('UsersService', () => {
  let service: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: getModelToken(User, 'registryConnection'),
          useValue: mockUserModel,
        },
      ],
    }).compile();

    service = module.get<UsersService>(UsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should create a user', async () => {
    const input = { ...mockUserWithoutId };
    const result = await service.create(input);
    expect(mockUserModel.create).toHaveBeenCalledWith(input);
    expect(result).toEqual(mockUser);
  });

  it('should find all users', async () => {
    const result = await service.findAll();
    expect(mockUserModel.findAll).toHaveBeenCalled();
    expect(result).toEqual([mockUser]);
  });

  it('should find one user by id', async () => {
    const result = await service.findOne('uuid-123');
    expect(mockUserModel.findOne).toHaveBeenCalledWith({ where: { id: 'uuid-123' } });
    expect(result).toEqual(mockUser);
  });

  it('should update a user', async () => {
    const updateInput = { ...mockUser, name: 'Jane Doe' };
    const result = await service.update('uuid-123', updateInput);
    expect(mockUserModel.update).toHaveBeenCalledWith(updateInput, { where: { id: 'uuid-123' } });
    expect(result).toEqual([1, [mockUser]]);
  });

  it('should remove a user', async () => {
    const result = await service.remove('uuid-123');
    expect(mockUserModel.destroy).toHaveBeenCalledWith({ where: { id: 'uuid-123' } });
    expect(result).toBe(1);
  });

  it('should find one user by phone', async () => {
    const result = await service.findOneByPhone('555-1234');
    expect(mockUserModel.findOne).toHaveBeenCalledWith({ where: { phone: '555-1234' } });
    expect(result).toEqual(mockUser);
  });
});
