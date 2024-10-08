import { Controller, Post, Body,Headers,UnauthorizedException } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('login')
  async login(@Body('username') username: string, @Body('password') password: string) {
    return this.authService.login(username, password);
  }

  @Post('check-token')
  async checkToken(@Headers('authorization') authorization: string) {
    // Asegúrate de que el token esté en el formato "Bearer <token>"
    const token = authorization?.split(' ')[1]; // Extrae el token desde el header

    if (!token) {
      throw new UnauthorizedException('Token no proporcionado');
    }
    
    return this.authService.checkToken(token); // Valida el token en el servicio
  }

  @Post('refresh-token')
  async refreshToken(@Body('refreshToken') refreshToken: string) {
    return this.authService.refreshToken(refreshToken);
  }
}
