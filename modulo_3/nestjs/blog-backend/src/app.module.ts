import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule, ConfigService } from '@nestjs/config'; // <-- ¡Importante incluir ConfigService!

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { CategoriesModule } from './categories/categories.module';
import { PostsModule } from './posts/posts.module';
import { BasicsModule } from './basics/basics.module';

@Module({
  imports: [
    // 1. Cargar el ConfigModule primero y hacerlo global
    ConfigModule.forRoot({ isGlobal: true }),

    // 2. Usar forRootAsync para esperar a que las variables de entorno se carguen
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule], // <--- CLAVE: Esto resuelve el error de dependencia
      inject: [ConfigService], // Necesario para acceder a las variables en useFactory
      useFactory: (config: ConfigService) => ({
        type: 'postgres',
        host: config.get<string>('DB_HOST'), // Acceso seguro a variables de entorno
        port: config.get<number>('DB_PORT'),
        username: config.get<string>('DB_USER'),
        password: config.get<string>('DB_PASS'),
        database: config.get<string>('DB_NAME'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: true, // Mantener en 'true' solo para desarrollo
        // ssl: { rejectUnauthorized: false }, // Descomentar solo si es necesario para conexión SSL
      }),
    }),
    
    // Tus módulos de aplicación
    BasicsModule,
    AuthModule,
    UsersModule,
    CategoriesModule,
    PostsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}