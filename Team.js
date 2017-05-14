class Team{
	constructor(name){
		this._name = name;
		this._goals = 0; 
		this._games = 0;
	}

	get name(){
		return this._name;
	}

	get goals(){
		return this._goals
	}

	addGame(game){
		this._games += game;
	}
	
	addGoals(goals){
		this._goals += goals;
	}

	aveGoals(){
		return this._goals/this._games;
	}

	toString(){
		return `${this._name}: ${this._goals} (${this.aveGoals()} per game) \n`
	}
}

module.exports = Team