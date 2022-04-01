import { Injectable } from '@nestjs/common';
import { IGame, caseEnum } from '@monorepo/common';
import { UpdateGameDto } from '../game/dto/update-game.dto';

@Injectable()
export class WoprService {
  get(game: IGame): UpdateGameDto {
    let res;
    game.forEach((row, x) => {
      row.forEach((el, y) => {
        if (el === caseEnum.EMPTY) {
          res = { x, y, case: caseEnum.ROUND };
        }
      });
    });
    return res;
  }
}
