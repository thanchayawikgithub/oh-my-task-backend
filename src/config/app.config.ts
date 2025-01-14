import { registerAs } from '@nestjs/config';

export default registerAs('app', () => ({
  stage: process.env.APP_STAGE,
  port: parseInt(process.env.APP_PORT, 10) || 3000,
}));
