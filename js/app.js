// //A light switch that can be either on or off.
// // Boolean
// A user's email address.
// String
// A spaceship with a hull, laser blasters, tractor beam, and warp drive.
// Object
// A list of student names from our class.
// Array
// A list of student names from our class, each with a location.
// Object
// A list of student names from our class, each with a location and each with a list of favorite tv shows.
// object

const rainbow = ['red', 'orange', 'yellow', 'green', 'blue', 'purple'];
console.log(rainbow[4]);
const nick = {
    favoriteFood: 'ramen',
    hobby: 'playing guitar',
    location: 'Boulder',
    favoriteDataType: 'string'
}
console.log(nick.hobby);

const crazyObject = {
    taco: [
        {
            meat: 'steak',
            cheese: ['panela', 'queso', 'chihuahua']
        },
        {
            meat: 'chicken',
            salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
        },
    ],
    larry: {
        nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
        quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
        characters: [
            {
                name: "Jeff",
                occupation: "manager"
            },
            {
                name: "funkhauser",
                occupation: "tv dude"
            },
            {
                name: "susie",
                occupation: "jeffs wife",
                favourtieHobby: "Swearing at Larry and Jeff"
            },
        ]
    }
}
console.log(crazyObject['taco'][1]['salsa'][5]);
console.log(crazyObject['larry']['quotes'][0]);
console.log(crazyObject.larry.characters[2].favourtieHobby);
console.log(crazyObject.larry.nicknames[1]);
console.log(crazyObject['larry']['characters'][1]);
