import mongoose from '../db';
import bcrypt from 'bcryptjs';

const UserSchema = new mongoose.Schema({
  userName: {
    type: String,
    required: true
  },
  email: {
    type: String,
    unique: true,
    required: true,
    lowercase: true,
  },
  password: {
    type: String,
    select: false,
  },
  isAdmin: {
    type: Boolean,
    //required: true,
    default: false,
  }
});

const User = mongoose.model('Users', UserSchema);
export default User;

User.findOne({ email: 'admin@aiqtrote.com' })
  .then(async (res) => {
    if (!res) {
      User.create({
        userName: 'Admin',
        email: 'admin@aiqtrote.com',
        password: await bcrypt.hash('123456789', 10),
        isAdmin: true,
      }).catch(console.error);
    }
  })
  .catch(console.error);
User.findOne({ email: 'usuario@aiqtrote.com' })
  .then(async (res) => {
    if (!res) {
      User.create({
        userName: 'Funcionario',
        email: 'usuario@aiqtrote.com',
        password: await bcrypt.hash('123456789', 10),
        isAdmin: false,
      }).catch(console.error);
    }
  })
  .catch(console.error);
