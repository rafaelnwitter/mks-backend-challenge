import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
} from '@nestjs/common';
import { MovieService } from './movie.service';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import JwtAuthenticationGuard from '../authentication/guards/jwt-authentication.guard';
import Movie from './entities/movie.entity';
import {
  ApiNotFoundResponse,
  ApiOkResponse,
  ApiParam,
  ApiTags,
} from '@nestjs/swagger';

@Controller('movie')
@ApiTags('movies')
export class MovieController {
  constructor(private readonly movieService: MovieService) {}

  @Post()
  @UseGuards(JwtAuthenticationGuard)
  create(@Body() createMovieDto: CreateMovieDto) {
    return this.movieService.createMovie(createMovieDto);
  }

  @Get()
  @UseGuards(JwtAuthenticationGuard)
  findAll() {
    return this.movieService.getAllMovies();
  }

  @Get(':id')
  @ApiParam({
    name: 'id',
    required: true,
    description: 'Should be an id of a post that exists in the database',
    type: Number,
  })
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(JwtAuthenticationGuard)
  findOne(@Param('id') id: string): Promise<Movie> {
    return this.movieService.getMovieById(+id);
  }

  @Patch(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(JwtAuthenticationGuard)
  update(@Param('id') id: string, @Body() updateMovieDto: UpdateMovieDto) {
    return this.movieService.update(+id, updateMovieDto);
  }

  @Delete(':id')
  @ApiOkResponse()
  @ApiNotFoundResponse()
  @UseGuards(JwtAuthenticationGuard)
  remove(@Param('id') id: string) {
    return this.movieService.remove(+id);
  }
}
