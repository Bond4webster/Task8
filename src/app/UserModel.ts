export class UserModel {
  name: string;
  surname: string;
  id?: string;
  login: string;
  password: string;
  cityID: string;
}
export class UserAuth {
  email: string;
  password: string;
  returnSecureToken?: boolean;
}
export interface FbAuthResponse {
  idToken: string;
  expiresIn: string;
}
