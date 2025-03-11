/*-------------------------------- Constants --------------------------------*/

const rooms = {
    "receptionist": {
        title: "Receptionist",
        description: "You walk into the office floor and you're seen by the receptionist who clocks you in. She scans your character for the day. How should you act? ",
        choices: {
            "1": "Stand tall and proud as you walk through to start your working day",
            "2": "Furiously fake cough into your hand to assert your weak work dominance for the day",
            "3": "Say good morning and continue your day"
        },
        nextRooms: {
            "1":"cubicle"
        },
    },
    "cubicle": {
        title: "Cubicle",
        description: "",
        nextRooms: {
            "1":"mailRoom",
            "2":"breakRoom",
            "3":"copyRoom",
        }
    },
    "mailRoom": {
        description: "",
        nextRooms: {
            "1":"serverRoom",
            "2":"cubicle",
        }
    },

    "breakRoom": {
        description: "",
        nextRooms: {
            "1":"restRoom",
            "2":"cubicle",
        }
    },
    "restRoom": {
        description: "",
        nextRooms: {
            "1":"copyRoom",
            "2":"breakRoom",
        }
    },
    "copyRoom": {
        description: "",
        nextRooms: {
            "1":"serverRoom",
            "2":"cubicle",
            "3":"restRoom",
        }
    },
    "serverRoom": {
        description: "",
        nextRooms: {
            "1":"copyRoom",
            "2":"mailRoom",
        }
    }
}


/*-------------------------------- Variables --------------------------------*/
let hasVisited = false;
let roomName = "";
let health = 5;
let suspicion = 0;
let timeLeft = 8
let img = document.createElement("img");
let title = document.createElement("h1");


/*------------------------ Cached Element References ------------------------*/
const text = document.querySelector("#text");
const screen = document.querySelector('#game');


/*----------------------------- Event Listeners -----------------------------*/
screen.addEventListener('click',(event) =>{
    const message = event.target;
    if (event.target.classList.contains('btn')) {
        img.src = "./Ascii%20images/Office Floor.png"
        let src = document.querySelector("#img");
        src.appendChild(img)
        title.textContent = rooms.cubicle.title
        let name = document.querySelector("#text");
        name.prepend(title)
        console.log(title)
    }


})


/*----------------------------------Functions --------------------------------*/
// Title: Room logic

// if room already visited, hasVisited = true
// if new room, timeLeft -= 1



const raiseSuspicion = () => {
    suspicion += 1;
    console.log("current sus" + suspicion);
}

const updateTime = () => {
    timeLeft -= 1;
}

