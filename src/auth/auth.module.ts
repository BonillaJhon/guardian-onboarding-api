import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { UsersModule } from 'src/users/users.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports: [
    ConfigModule,
    UsersModule,
    PassportModule,
    JwtModule.registerAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (config: ConfigService) => {
        const expiresRaw = config.get<string>('JWT_EXPIRES_IN') ?? '300';
        const expiresIn = Number(expiresRaw); // 300

        return {
          secret: config.get<string>('JWT_SECRET') ?? 'dev_secret_change_me',
          signOptions: {
            expiresIn: Number.isFinite(expiresIn) ? expiresIn : 300,
          },
        };
      },
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule { }
