import { Controller, Get, Req, Res, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { GoogleAuthGuard } from './guards/google-auth.guard';
import { User } from 'src/user/entities/user.entity';
import { Response } from 'express';
import { setCookie } from 'src/utils/cookie';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('google/login')
  @UseGuards(GoogleAuthGuard)
  async googleLogin() {}

  @Get('google/callback')
  @UseGuards(GoogleAuthGuard)
  async googleCallback(
    @Req() req: Request & { user: User },
    @Res() res: Response,
  ) {
    const { accessToken } = await this.authService.signToken(req.user.id);
    setCookie(res, 'access_token', accessToken, {
      httpOnly: true,
      sameSite: 'lax',
    });
    res.redirect('http://localhost:3001/');
  }
}
