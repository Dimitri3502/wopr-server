import { Body, Controller, Get, Post, Req, Session } from '@nestjs/common';
import { GameService } from './game.service';
import { UpdateGameDto } from './dto/update-game.dto';
import { ISession } from '../types/session.interface';
import { Request } from 'express';

@Controller('game')
export class GameController {
  constructor(private readonly gameService: GameService) {}

  @Get()
  getAGame(@Req() request: Request) {
    const id = request?.headers?.clientid as string;

    if (!id) {
      throw Error('cliendId undefined');
    }
    return this.gameService.get(id);
  }

  @Post()
  playerTurn(@Req() request: Request, @Body() updateGameDto: UpdateGameDto) {
    const id = request?.headers?.clientid as string;
    return this.gameService.playerTurn(id, updateGameDto);
  }
}
