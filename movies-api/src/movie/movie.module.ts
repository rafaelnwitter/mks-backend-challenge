import { Module } from '@nestjs/common';
import { MovieService } from './services/movie.service';
import { MovieController } from './movie.controller';
import { Movie } from './movie.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie]), UsersModule],
  controllers: [MovieController],
  providers: [MovieService],
})
export class MovieModule {}
