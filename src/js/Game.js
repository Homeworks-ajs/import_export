import { default as Character} from './Domain.js';

export default class Game {
	start() {
		console.log('Game started');
	}
}

class GameSavingData {
}

function readGameSaving() {
}
function writeGameSaving() {
}
export {GameSavingData, readGameSaving, writeGameSaving};
