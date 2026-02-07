import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';


export type User = {
  id: number;
  email: string;
  passwordHash: string;
};

@Injectable()
export class UsersService {
    private users: User[] = [
    // Usuario “de prueba”
    {
      id: 1,
      email: 'admin@test.com',
      // password: Admin123*
      passwordHash: bcrypt.hashSync('Admin123*', 10),
    },
  ];

  async findByEmail(email: string): Promise<User | undefined> {
    return this.users.find((u) => u.email.toLowerCase() === email.toLowerCase());
  }
}
