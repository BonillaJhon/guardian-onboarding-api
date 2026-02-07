import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HealthModule } from './health/health.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { ConfigModule } from '@nestjs/config';
import { OnboardingModule } from './onboarding/onboarding.module';
import { ProductsModule } from './products/products.module';

@Module({
  imports: [HealthModule, AuthModule, UsersModule, ConfigModule.forRoot({ isGlobal: true }), OnboardingModule, ProductsModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
