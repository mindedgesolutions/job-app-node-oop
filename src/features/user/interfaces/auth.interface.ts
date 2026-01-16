export interface SignupDTO {
  name: string | null;
  email: string;
  password: string;
}

export interface SigninDTO {
  email: string;
  password: string;
}
