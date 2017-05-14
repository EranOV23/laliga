var League = require('./League')
var Game = require('./Game')
var Team = require('./Team')

let league = new League()

let Barca = new Team("Barca")
let RealMadrid = new Team("RealMadrid")
let Atletico = new Team("Atletico")

league.addTeam(Barca)
league.addTeam(RealMadrid)
league.addTeam(Atletico)

league.play(new Game(Barca, RealMadrid, 4,0))
league.play(new Game(RealMadrid, Atletico, 2,0))
league.play(new Game(Barca, Atletico, 1,3))

console.log(league.toString())
// prints
// Games:
// Barca - Real Madrid: 4 - 0
// Real Madrid - Atletico: 2 - 0
// Barca - Atletico: 1 - 3
// Team Stats:
// Barca: 5 (2.5 per game)
// Real Madrid: 2 (1 per game)
// Atletico: 3 (1.5 per game)