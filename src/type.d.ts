interface UserPayload {
  id: string;
  name: string;
  email: string;
  role: string;
}

declare namespace Express {
  export interface Request {
    currentUser: UserPayload;
  }
  export interface Response {
    currentUser: UserPayload;
  }
}

interface IUser {
  id: number;
  name: string | null;
  email: string;
  password: string;
  role: string;
  status: boolean;
}
