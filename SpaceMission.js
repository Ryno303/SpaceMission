
/*the destination uses a switch function with a random number generator to pick a planet in our solar system, and return a specific message for each planet*/
const destination = () => {

    let numGenerator = Math.floor(Math.random() * 9);

    switch (numGenerator) {
        case 0:
            return 'You\'re going to Mercury. Bring sunscreen!';
        case 1:
            return 'You\'re going to Venus. Bring a gas mask!';

        case 2:
            return 'You\'re going to Earth. You\'re already here, what a short trip!';

        case 3:
            return 'You\'re going to Mars. You might make a new friend!';

        case 4:
            return 'You\'re going to Jupiter. Pack extra-light!';
        
        case 5:
            return 'You\'re going to Saturn. It\'s full of hydrogen, no sparks or flames allowed!';
            
        case 6:
            return 'You\'re going to Uranus. We\'ve heard all the jokes so save it.';
                
        case 7:
            return 'You\'re going to Neptune. The forecast is a chilly -200 degrees, bring a jacket!';
        
        case 8:
            return 'You\'re going to Pluto. Some say it isn\'t a planet, but you\'re going to find out for sure!';
        
        default:
            return 'No destination Selected';
            //This should always choose a destination, but this is here to prevent bugs from crashing the program.

        


    }
}

let availableShips = []; //this array will hold the ship objects created by the shipFactory function.


//Shipbuilder is the prototype used for creating new ship objects.
const shipBuilder = (shipName, shipType, crewSize) => {
    return {
        name: shipName,
        type: shipType,
        crew: crewSize,

        
        

    }

}

//This is just an easter egg.
let scootyPuff = shipBuilder('Scooty Puff Jr.', 'Wind-up', 1);


//shipFactory takes a number as a parameter and uses a for loop to generate the selected number of ships with random properties.
const shipFactory = (shipCount) => {
    let shipNames = ['Enterprise', 'Frontier', 'Orville', 'Planet Express', 'Voyager', 'Nimbus', 'Apollo', 'Winnebago', 'Ford Galaxy', 'Orville'];
    let shipTypes = ['Battle', 'Explorer', 'Mining', 'Science', 'Recreation', 'Cargo'];
    
    /*I used the array lengths as the multiplier in the random math functions so the array sizes can change but the selector can still access the new elements.*/
    for (let i = 0; i < shipCount; i++) {
        const namePicker = shipNames[Math.floor(Math.random() * shipNames.length)];
        const typePicker = shipTypes[Math.floor(Math.random() * shipTypes.length)];
        let crewCount = Math.ceil(Math.random() * 500);
        availableShips.push(shipBuilder(namePicker, typePicker, crewCount));


    }
}

shipFactory(30);//This calls the shipFactory function to produce 30 ships with random properties

availableShips.push(scootyPuff);


const chooseShip = availableShips[Math.floor(Math.random() * availableShips.length)];
/*This uses math random to select a shop from the array and store it in the variable so that the values are consistent later. If this were called each time the code needed to pick a ship, it might select a different ship and cause weird behaviors.*/



let availableMissions = ['Diplomatic', 'Scientific', 'Invasion', 'Resource-Gathering', 'Exploration', 'Delivery'];
const missionPicker = availableMissions[Math.floor(Math.random() * availableMissions.length)];
    



/*I used an array of strings to hold the various message parts as elements. I used the array.join function to put the pieces together for the output message. There are also a few conditional messages that should appear based on the mission type, crew size, and ship type. I also used concatenation to create the main string of the message.*/
const putItAllTogether = () => {
    let mainReturnMessage = [destination(), `You\'ll be on board the U.S.S. ${chooseShip.name}, a ${chooseShip.type}-class ship.\n You will have a crew of ${chooseShip.crew}. You've been assigned a ${missionPicker} mission.`];
    if ((missionPicker === 'Invasion') && (chooseShip.crew <= 100)) {
        mainReturnMessage.push('You have a small crew. This will be a challenge!');
    }
    if ((missionPicker === 'Invasion') && (chooseShip.type !== 'Battle')) {
        mainReturnMessage.push('You don\'t have a Battle-class ship. Good luck...');
    }
    if ((missionPicker === 'Diplomatic') && (chooseShip.type === 'Battle')) {
        mainReturnMessage.push('Bringing a Battle-class ship on a diplomatic mission might send the wrong message.');
    }
    if (chooseShip.type === 'Wind-up') {
        mainReturnMessage.push('The Scooty Puff Jr. SUCKS! Almost any mission aboard this vessel is doomed to fail.');
    }

    return mainReturnMessage.join('\n');
}

console.log(putItAllTogether());

