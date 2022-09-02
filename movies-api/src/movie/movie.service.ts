import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import Movie from './entities/movie.entity';

@Injectable()
export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private movieRepository: Repository<Movie>,
  ) {}

  async createMovie(movie: CreateMovieDto) {
    const newMovie = await this.movieRepository.create(movie);
    await this.movieRepository.save(newMovie);
    return newMovie;
  }

  getAllMovies() {
    return this.movieRepository.find();
  }

  async getMovieById(id: number) {
    const movie = await this.movieRepository.findOneBy({ id });
    if (movie) {
      return movie;
    }
    throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
  }

  async update(id: number, movie: UpdateMovieDto) {
    await this.movieRepository.update(id, movie);
    const updatedMovie = await this.movieRepository.findOneByOrFail({ id });
    if (updatedMovie) {
      return updatedMovie;
    }
  }

  async remove(id: number) {
    const deleteResponse = await this.movieRepository.delete(id);
    if (!deleteResponse.affected) {
      throw new HttpException('Movie not found', HttpStatus.NOT_FOUND);
    }
  }
}
