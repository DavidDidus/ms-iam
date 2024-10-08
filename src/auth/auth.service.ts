import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcryptjs';
import { UserService } from '../user/user.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  async login(username: string, password: string) {
    const user = await this.userService.findByUsername(username);
    if (!user) {
      throw new UnauthorizedException('Usuario no encontrado');
    }

    if (!user.password) {
      throw new UnauthorizedException('El usuario no tiene una contraseña válida');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Credenciales inválidas');
    }

    const payload = { username: user.username, sub: user._id };
    const accessToken = this.jwtService.sign(payload, {
      secret: process.env.JWT_SECRET || 'defaultSecret',
      expiresIn: '15m',
    });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return { accessToken, refreshToken };
  }

  // Verificación del token usando la clave secreta
  async checkToken(accessToken: string) {
    try {
      return this.jwtService.verify(accessToken, {
        secret: process.env.JWT_SECRET || 'defaultSecret',
      });
    } catch (error) {
      throw new UnauthorizedException('Token inválido desde el microservicio de validación');
    }
  }

  async refreshToken(refreshToken: string) {
    try {
      const payload = this.jwtService.verify(refreshToken, {
        secret: process.env.JWT_SECRET || 'defaultSecret',
      });
      const newAccessToken = this.jwtService.sign({ username: payload.username, sub: payload.sub }, { expiresIn: '15m' });
      const newRefreshToken = this.jwtService.sign({ username: payload.username, sub: payload.sub }, { expiresIn: '7d' });

      return { accessToken: newAccessToken, refreshToken: newRefreshToken };
    } catch (e) {
      throw new UnauthorizedException('Token de refresco inválido');
    }
  }
}
