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
        description: "You find yourself in a dense labyrinth of cubicles," +
            " each one identical to the last. Stacks of unread memos pile up on desks, " +
            "and the dull hum of fluorescent lights buzzes overhead." +
            " You can hear the faint clacking of keyboards, the occasional sigh of a tired coworker," +
            " and the dreaded sound of footsteps—could it be the boss on patrol? There's a half-eaten donut on a nearby desk." +
            " Do you take a bite for energy or move forward before someone notices you lurking?",
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
let paragraph = document.createElement("p");


/*------------------------ Cached Element References ------------------------*/
const text = document.querySelector("#text");
const screen = document.querySelector('#game');


/*----------------------------- Event Listeners -----------------------------*/
screen.addEventListener('click',(event) =>{
    const message = event.target;
    // Set up as function
    if (event.target.classList.contains('btn')) {
        img.src = "./Ascii%20images/Office Floor.png"
        let src = document.querySelector("#img");
        src.appendChild(img)

        title.textContent = rooms.cubicle.title
        let name = document.querySelector("#text");
        name.prepend(title)

        paragraph.textContent = rooms.cubicle.description;
        let para = document.querySelector("#paragraph");
        para.appendChild(paragraph)

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

