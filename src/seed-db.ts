import { connect, disconnect } from 'mongoose';
import { User } from './models/User';

async function seed() {
  await connect('mongodb://localhost:27017/test');

  const user = new User({
    name: 'Seeded',
    email: 'seeded@initech.com',
    avatar: 'https://i.imgur.com/dM7Thhn.png',
  });
  await user.save();

  await disconnect();
}

seed();
