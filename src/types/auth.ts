export type UserRole = 'distributor' | 'admin' | 'executive';

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  company?: string;
  avatar?: string;
}

export interface AuthSession {
  user: User | null;
  token?: string;
}