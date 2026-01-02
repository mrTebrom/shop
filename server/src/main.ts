import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  // Глобальная валидация DTO
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // CORS для фронтенда
  app.enableCors({
    origin: ['http://localhost:3000', 'http://localhost:3001'],
    credentials: true,
  });

  // Глобальный префикс для API
  app.setGlobalPrefix('api');

  const port = configService.get('PORT') || 3001;
  await app.listen(port);
  console.log(`🚀 Server running on: http://localhost:${port}/api`);
  console.log(`📊 Environment: ${configService.get('NODE_ENV')}`);
}
bootstrap();
