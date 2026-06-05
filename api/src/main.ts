import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // ✅ Enable CORS (biar bisa diakses dari frontend)
  app.enableCors();

  // ✅ Global Validation (DTO jalan)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // hapus field yg tidak ada di DTO
      forbidNonWhitelisted: true, // error kalau ada field aneh
      transform: true, // auto convert tipe data (string ke number)
    }),
  );

  // ✅ Global Prefix (optional)
  app.setGlobalPrefix('api');

  await app.listen(3000);
  console.log(`🚀 Server running on http://localhost:3000/api`);
}

bootstrap();