import {default as Game} from './Game.js';

import {GameSavingData, readGameSaving as loadGame, writeGameSaving as saveGame} from './Game.js';

const game = new Game();
game.start();
