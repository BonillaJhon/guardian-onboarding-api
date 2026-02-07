import { Request } from 'express';

export type AuthUser = {
  userId: number;
  email: string;
};

export interface AuthRequest extends Request {
  user: AuthUser;
}