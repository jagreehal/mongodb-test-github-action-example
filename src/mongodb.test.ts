import { connect, disconnect } from 'mongoose';
import { User } from './models/User';

describe('User Model Test', () => {
  beforeAll(async () => {
    await connect('mongodb://localhost:27017/test');
  });
  afterAll(async () => {
    await User.deleteMany();
    await disconnect();
  });
  it('create & save user successfully', async () => {
    const user = new User({
      name: 'Bill',
      email: 'bill@initech.com',
      avatar: 'https://i.imgur.com/dM7Thhn.png',
    });

    await user.save();

    const savedUser = await User.findOne({ name: 'Bill' });
    expect(savedUser.name).toBe('Bill');
  });
});
