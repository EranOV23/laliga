class Game{
	constructor(homeTeam, awayTeam, homeGoals, awayGoals){
		this._homeTeam = homeTeam;
		this._awayTeam = awayTeam;
		this._homeGoals = homeGoals;
		this._awayGoals = awayGoals;
	}

	updateTeam(){
		this._homeTeam.addGoals(this._homeGoals);
		this._homeTeam.addGame(1);
		this._awayTeam.addGoals(this._awayGoals);
		this._awayTeam.addGame(1);
	}

	toString(){
		return `${this._homeTeam.name} - ${this._awayTeam.name} : ${this._homeGoals} - ${this._awayGoals} \n`
	}

}


module.exports = Game;