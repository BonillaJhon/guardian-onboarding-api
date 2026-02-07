import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { OnboardingService } from './onboarding.service';
import { JwtAuthGuard } from 'src/auth/jwt-auth/jwt-auth.guard';
import { CreateOnboardingDto } from './dto/create-onboarding.dto';
import * as authRequest from 'src/auth/types/auth-request';

@Controller('onboarding')
export class OnboardingController {
    constructor(private readonly onboardingService: OnboardingService) { }

    @UseGuards(JwtAuthGuard)
    @Post()
    create(@Body() dto: CreateOnboardingDto, @Req() req: authRequest.AuthRequest) {
        return this.onboardingService.create(dto, req.user);
    }

}
