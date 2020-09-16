import { sign } from 'jsonwebtoken';

import authConfig from '../config/auth';

interface IRequestDTO {
  email: string;
  password: string;
}

class AuthService {
  public execute({ email, password }: IRequestDTO): string {
    if (!email || !password) return 'Invalid to access token';

    const { secret, expiresIn } = authConfig.jwt;

    const token = sign(
      {
        email,
      },
      secret,
      {
        subject: 'login_service',
        expiresIn,
      },
    );

    return token;
  }
}

export default AuthService;
