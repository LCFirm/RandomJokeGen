//generates a number
const generateRandomNumber = (num) => {
 
    return Math.floor(Math.random() * num);
}

const collectiveJokes = {
    robotJokes: ['ah human you have returned!', 'INITIATING PROTOCOL 666:KILLING YOUR FILES! hehe','Do not pour coffee inside me... again', 'I am loving this wattage right now!'],
    badJokes: ["What's so good about Soviet Ubers? They're always Russian", "What's a candle's favorite Keanu Reeves movie? John Wick", "No-one in the Government has played Hospital Tycoon and it shows", "Why did the bicycle fall over? Because it was two tired."],
    dadJokes: ["There's a snow storm warning for NY, including Wall Street. What a terrible time for shorts.","My wife gave me an ultimatum. It was either her or my addiction to sweets. The decision was a piece of cake.",]
}


//stores the personalized jokes array
let personalJokes = []

for(let prop in collectiveJokes) {
    // pulls index and turns it into a number for our generateRandomNumber Func
    let optIdx = generateRandomNumber(collectiveJokes[prop].length)

    //use the object prop to customize 
    switch(prop) {
        case 'robotJokes':
            personalJokes.push(`OSJoker.AI: ${collectiveJokes[prop][optIdx]}`)
            break
        case 'badJokes':
            personalJokes.push(`OSJoker.AI: ${collectiveJokes[prop][optIdx]}`)
            break
        case 'dadJokes':
            personalJokes.push(`DadOSBot: ${collectiveJokes[prop][optIdx]}`)
            break   
        default:
            personalJokes.push('Error Fatal AI crash')

    }


}

const formatJokes = (jokes) => {
    const formatted = personalJokes.join('\n')
    console.log(formatted)
}

formatJokes(personalJokes);