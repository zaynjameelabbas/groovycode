// Welcome to the GroovyCode showcase! 🕺
const FUNK_LEVEL = 100
const MOOD = "far out"

class DiscoMachine {
    constructor() {
        this.groove = "maximum"
        this.lights = ["purple", "orange", "green"]
    }

    startTheParty(intensity = "super") {
        let danceFloor = "lit"
        let message = `The party is ${danceFloor}!`

        return {
            status: message,
            vibe: MOOD,
            level: FUNK_LEVEL
        }
    }

    static getGroovyMessage() {
        return "Keep on truckin'!"
    }
}

let boogieMachine = new DiscoMachine()
let party = boogieMachine.startTheParty()
console.log(DiscoMachine.getGroovyMessage())