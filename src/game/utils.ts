import { caseEnum, IGame } from '@monorepo/common';

export const getNewGame = (): IGame => [
  [caseEnum.EMPTY, caseEnum.EMPTY, caseEnum.EMPTY],
  [caseEnum.EMPTY, caseEnum.EMPTY, caseEnum.EMPTY],
  [caseEnum.EMPTY, caseEnum.EMPTY, caseEnum.EMPTY],
];
const isRowFinished = (game: IGame) =>
  game.some((row) =>
    row.every((val) => val !== caseEnum.EMPTY && val === row[0]),
  );

function transposeArray(array, arrayLength) {
  let i;
  const newArray = [];
  for (i = 0; i < array.length; i++) {
    newArray.push([]);
  }

  for (i = 0; i < array.length; i++) {
    for (let j = 0; j < arrayLength; j++) {
      newArray[j].push(array[i][j]);
    }
  }

  return newArray;
}

export const checkIfGameFinished = (game: IGame) => {
  const tgame = transposeArray(game, 3);

  return isRowFinished(game) || isRowFinished(tgame);
};
