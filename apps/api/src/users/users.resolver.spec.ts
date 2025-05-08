import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from './users.resolver';
import { UsersService } from './users.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';

const mockUser: User = {
  id: '1',
  name: 'Test User',
  ssn: '123-456-7890',
  email: 'test@example.com',
  phone: '1234567890',
  address: '123 Test St',
  createdAt: new Date(),
  updatedAt: new Date(),
} as User; 

const mockUser2: User = {
  id: '2',
  name: 'Test User 2',
  ssn: '987-654-3210',
  email: 'test2@example.com',
  phone: '0987654321',
  address: '456 Test Ave',
  createdAt: new Date(),
  updatedAt: new Date(),
} as User;

const mockCreateUserInput: CreateUserInput = {
  name: 'New User',
  ssn: '111-222-3333',
  email: 'new@example.com',
  phone: '1112223333',
  address: '1 New St',
};


describe('UsersResolver', () => {
  let resolver: UsersResolver;
  let service: UsersService;

  // Mock UsersService methods
  const mockUsersService = {
    create: jest.fn(),
    findAll: jest.fn(),
    findOne: jest.fn(),
    update: jest.fn(),
    remove: jest.fn(),
    findOneByPhone: jest.fn(),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    resolver = module.get<UsersResolver>(UsersResolver);
    service = module.get<UsersService>(UsersService);
  });

  afterEach(() => {
    jest.clearAllMocks(); // Clear mocks after each test
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      (service.create as jest.Mock).mockResolvedValue(mockUser);

      const result = await resolver.createUser(mockCreateUserInput);

      expect(service.create).toHaveBeenCalledWith(mockCreateUserInput);
      expect(result).toEqual(mockUser);
      expect(result.name).toBe(mockUser.name); // Example of specific field check
    });
  });

  describe('findAll', () => {
    it('should return an array of users', async () => {
      const usersArray = [mockUser, mockUser2];
      (service.findAll as jest.Mock).mockResolvedValue(usersArray);

      const result = await resolver.findAll();

      expect(service.findAll).toHaveBeenCalled();
      expect(result).toEqual(usersArray);
      expect(result.length).toBe(2);
    });
  });

  describe('findOne', () => {
    it('should return a single user by id', async () => {
      (service.findOne as jest.Mock).mockResolvedValue(mockUser);

      const result = await resolver.findOne('1');

      expect(service.findOne).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockUser);
    });

    it('should return null if user not found by id', async () => {
      (service.findOne as jest.Mock).mockResolvedValue(null);
      const result = await resolver.findOne('non-existent-id');
      expect(service.findOne).toHaveBeenCalledWith('non-existent-id');
      expect(result).toBeNull();
    });
  });



  describe('removeUser', () => {
    it('should remove an existing user and return it', async () => {
      // Assuming service.remove is modified/intended to return the removed User
      (service.remove as jest.Mock).mockResolvedValue(mockUser);

      const result = await resolver.removeUser('1');

      expect(service.remove).toHaveBeenCalledWith('1');
      expect(result).toEqual(mockUser);
    });
  });

  describe('getUserByPhone', () => {
    it('should return a single user by phone number', async () => {
      (service.findOneByPhone as jest.Mock).mockResolvedValue(mockUser);

      const result = await resolver.getUserByPhone('1234567890');

      expect(service.findOneByPhone).toHaveBeenCalledWith('1234567890');
      expect(result).toEqual(mockUser);
    });

    it('should return null if user not found by phone', async () => {
      (service.findOneByPhone as jest.Mock).mockResolvedValue(null);
      const result = await resolver.getUserByPhone('non-existent-phone');
      expect(service.findOneByPhone).toHaveBeenCalledWith(
        'non-existent-phone',
      );
      expect(result).toBeNull();
    });
  });
});
