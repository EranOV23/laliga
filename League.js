class League{
	constructor(){
		this._teams = [];
		this._games = [];
	}

	get teams(){
		return this._teams;
	}

	play(Game){
		Game.updateTeam()
		return this._games.push(Game.toString());
	}

	addTeam(name){
		this._teams.push(name);
	}

	toString(){
		console.log(`League games: \n ${this._games} \n League teams:\n ${this._teams}`)
	}
}

module.exports = League;