/*-------------------------------- Constants --------------------------------*/

const rooms = {
    "receptionist": {
        title: "Receptionist",
        description: "You walk into the office floor and you're seen by the receptionist who clocks you in. She scans your character for the day. How should you act? ",
        choices: {
            choice1: "Stand tall and proud as you walk through to start your working day",
            choice2: "Furiously fake cough into your hand to assert your weak work dominance for the day",
            choice3: "Say good morning and continue your day"
        },
        afterChoice: {
            choice1:" You stride confidently through the office entrance, shoulders squared and head held high. A few coworkers glance your way, momentarily convinced you might be someone important. The receptionist gives you a hesitant nod, unsure whether to greet you or let you pass like a high-level executive. As you reach your desk, you feel an inexplicable sense of authority—until you realize you still have an entire workday ahead. ",
            choice2: "You clear your throat loudly, then let out an exaggerated cough into your hand. A few coworkers instinctively take a step back, and someone near the water cooler subtly reaches for hand sanitizer. The office intern gives you a nervous look, unsure whether to ask if you’re okay or avoid being roped into a conversation. You’ve successfully created a small bubble of personal space, but at what cost?",
            choice3: "You offer a polite \"Good morning\" as you walk in. At first, it seems harmless—just another routine interaction. But then it happens. A coworker stops you. “Did you catch that email about the new workflow updates?” another chimes in, “Hey, can you cover for me in the meeting later?” Before you realize it, you're being absorbed into the office hive mind, nodding along to discussions you don’t care about, agreeing to things you don’t understand. The weight of forced camaraderie and unexpected responsibilities slowly drains your energy.",
        },
        nextRooms: {
            right:"Cubicles"
        },
        currentScene: 1
    },




    "cubicles": {
        title: "Cubicle",
        description: "You find yourself in a dense labyrinth of cubicles," +
            " each one identical to the last. Stacks of unread memos pile up on desks, " +
            "and the dull hum of fluorescent lights buzzes overhead." +
            " You can hear the faint clacking of keyboards, the occasional sigh of a tired coworker," +
            " and the dreaded sound of footsteps—could it be the boss on patrol? There's a half-eaten donut on a nearby desk." +
            " Do you take a bite for energy or move forward before someone notices you lurking?",
        nextRooms: {
            right:"Mail Room",
            left:"Break Room",
            "3":"Copy Room",
        },
        choices:{
            choice1: "Stretch theatrically",
            choice2: "Go over emails",
            choice3: "Water break"
        },
        afterChoices:{
            choice1: "You lean back, stretching theatrically, letting out an exaggerated sigh as if you’ve been toiling away for hours. A nearby coworker nods in sympathy, believing you’re just another overworked corporate warrior. Your act earns you a moment of relief, and the stress seems to ease—but management is now aware of you",
            choice2: "You sit motionless, staring at your inbox. You click refresh. Nothing changes. You click refresh again. The emails remain the same. Time passes in an eternal loop of corporate stagnation. You feel your soul slowly leaving your body, but at least no one notices you.",
            choice3: "You stand up, stretch slightly, and walk over to the water cooler—not too fast, not too slow. You pour a glass, take a sip, nod at a coworker, and return to your desk. No one pays you any mind. No consequences. No changes. Just another day in the machine."
        },
    },




    "mailRoom": {
        title: "Mail Room",
        description: "You step into the mailroom, a dimly lit space tucked away in the farthest reaches of the office. Rows of metal shelves overflow with forgotten packages, dusty memos, and mysterious envelopes addressed to employees who no longer work here. A faint smell of ink, cardboard, and corporate neglect lingers in the air. The hum of an old printer echoes through the room, spitting out paperwork no one will ever read.\n" +
            "\n" +
            "This place is quiet—too quiet. It feels like the one spot in the office where you could hide, but also the kind of place where someone might suddenly appear and assign you work.\n" +
            "\n" +
            "You need to make a decision.",
        nextRooms: {
            "1":"serverRoom",
            "2":"cubicle",
        },
        choices: {
            choice1: "Take 5",
            choice2: "Engage in Tactical Mailroom Browsing",
            choice3: "Engage in Mailroom Lore Creation",
        },
        afterChoices: {
            choice1: "You step into the shadowy corner of the mailroom and lean against a dusty shelf. For a brief moment, you’re invisible—away from emails, meetings, and the ever-watchful eyes of management. The steady hum of the printer is oddly soothing, and you feel your stress ease just a little.\n" +
                "\n" +
                "But as you enjoy the moment, a mailroom clerk walks in and gives you a long, suspicious look. Why are you here? Do you even have mail?",
            choice2: "You shuffle through a stack of envelopes, flipping through them as if searching for something important. Your body language screams “busy”, and if anyone walks by, they’ll just assume you’re retrieving an important document. No one questions you, but the dust-covered envelopes remind you how little you belong here.",
            choice3: "You spot a dusty package labeled ‘Derek F. Montgomery’ and immediately decide he was a former employee who vanished under mysterious circumstances. Another package, addressed to \"Susan T. Lively,\" surely belongs to an ex-CEO who faked her own disappearance after uncovering corporate corruption.\n" +
                "\n" +
                "Before you know it, you’re deep in an imaginary conspiracy thriller starring employees you’ve never met. Are these just unclaimed packages… or clues to something bigger?\n" +
                "\n" +
                "After a few minutes of suspenseful daydreaming, you put the packages back and stroll out, feeling absolutely no closer to productivity—but a little more entertained.",
        }
    },




    "breakRoom": {
        title: "Break Room",
        description: "The breakroom is a colorful yet sad little oasis in the middle of corporate monotony. A fridge hums quietly in the corner, and the coffee machine sits on the counter like a sentient being, ready to serve caffeine to those who need it most. A faint smell of microwaved leftovers lingers in the air, and the sound of faint gossip fills the room. This is your chance to escape the grind—for a few minutes at least.",
        nextRooms: {
            "1":"restRoom",
            "2":"cubicle",
        },
        choices: {
            choice1: "The Great Lunch Debate\n",
            choice2: "Stir the Gossip Pot",
            choice3: "Browse the Workplace Chronicles\n",
        },
        afterChoices: {
            choice1: "You stare at your lunch, pondering the world’s most difficult question. After what feels like a lifetime of indecision, you finally eat… but you’re unsure if it was the right choice. You feel temporarily nourished, but the lingering feeling of doubt hangs over you.",
            choice2: "You engage in the latest water cooler gossip and find yourself surprisingly energized by the drama. The exchange is filled with half-truths and bold assumptions, but it offers a much-needed distraction from the grind. For a moment, you feel more connected to your coworkers. However, you can’t shake the feeling that this gossip might come back to bite you later.",
            choice3: "You scan the bulletin board like you’re uncovering secret office lore. Little snippets of information reveal coworkers’ hobbies, upcoming events, and even the awkwardly cryptic memo about the broken coffee machine. It feels like a safe, low-risk activity, though you can’t help but feel like you’re wasting time.r",
        },
    },



    "restRoom": {
        description: "You walk into the restroom and are instantly greeted by the familiar smell of cleaning supplies and faint echoes of distant water running. It’s one of the few places where you can truly be alone for a few moments. The restroom is stark—no distractions, just the hum of fluorescent lights overhead and the quiet sound of someone else washing their hands. You’ve got some time to kill—how will you spend it?",
        nextRooms: {
            "1":"Find Zen in the Bathroom Silence",
            "2":"breakRoom",
        },
        choices: {
            choice1: "The Great Lunch Debate\n",
            choice2: "Perfect Your Corporate Persona",
            choice3: "Drown in the Email Abyss"
        },
        afterChoices: {
            choice1: "You enter a stall and sit down, taking a moment to relax in the silence. No emails, no phone calls, no managers looming over you. For once, it feels like you can just be yourself, away from the chaos of the office. You let the stillness wash over you.",
            choice2: "You look at yourself in the mirror, practicing your corporate smile. You try to look approachable, friendly, and like you’re totally killing it at work—but the longer you stare, the more it feels like you’re slowly losing your grip on reality. Your smile feels more and more forced, and you wonder if anyone even notices you",
            choice3: "You pull out your phone and quickly glance through your emails, just to stay \"on top of things.\" It feels like an excuse to kill time, but you answer a couple of questions, send out a “quick” reply to a coworker, and maybe scroll through Slack for an urgent message. Of course, the longer you stay, the more you find yourself getting lost in the inbox abyss",
        }
    },



    "copyRoom": {
        description: "You enter the copy room, where the loud hum of the copier fills the air. It’s one of the few rooms that gets used constantly—documents to copy, forms to print, and reports to distribute. A few piles of paper are scattered around, and the smell of fresh ink is thick in the air. This space feels like it should be productive, but you can't help but wonder—what would happen if you just wasted some time here?",
        nextRooms: {
            "1":"serverRoom",
            "2":"cubicle",
            "3":"restRoom",
        },
        choices: {
            choice1: "Master the Art of Waiting",
            choice2: "Make Copies for No Reason",
            choice3: "Pretend to Be Productive"
        },
        afterChoices: {
            choice1: "You casually walk over to the copier, stand there for a moment, and look around as if you’re just waiting for the machine to become available. You glance at the paper jammed in the corner and think to yourself, \"Should I fix it? Nah.\" After a few moments of this, you leave—without actually touching the machine.",
            choice2: "You step up to the copier and begin copying random office memos, papers from last month's meeting, and even the instruction manual for the copier itself. You don't actually need any of these copies, but it’s a fun and mindless way to kill time. The copier whirs, and you press the button again and again, like you're working on something important.",
            choice3:"You approach the piles of paper scattered on the counter and start moving them around a little, acting like you're tidying up. But really, you're just shifting things around for the sake of looking busy. The copier hums behind you, and every so often, you glance at the clock to make sure no one is watching."
        }
    },





    "serverRoom": {
        description: "",
        nextRooms: {
            "1":"copyRoom",
            "2":"mailRoom",
        },
        choices: {
            choice1: "The Great Lunch Debate\n",
        },
        afterChoices: {

        }
    },
}


/*-------------------------------- Variables --------------------------------*/
let hasVisited = false;
let health = 5;
let suspicion = 0;
let timeLeft = 8
let img = document.createElement("img");
let title = document.createElement("h1");
let paragraph = document.createElement("p");



/*------------------------ Cached Element References ------------------------*/

let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");
let choice4 = document.querySelector("#choice4");
let left = document.querySelector("#leftBtn");


const text = document.querySelector("#text");
const screen = document.querySelectorAll('#game');
const removeButton = document.querySelector("#startBtn");
const choices = document.querySelectorAll(".choices");
choices.forEach(choice => {
    choice.disabled = true;
})




/*----------------------------------Functions --------------------------------*/
// Title: Room logic



// if room already visited, hasVisited = true
// if new room, timeLeft -= 1
const enableButtons = () => {
    choices.forEach(choice => {
        choice.disabled = false;
    })
}

const receptionist = (event) => {
    if (event.target.classList.contains('startBtn')) {
        img.src = "./Ascii%20images/Receptionist.png"
        let src = document.querySelector("#img");
        src.appendChild(img)

        title.textContent = rooms.receptionist.title
        let name = document.querySelector("#text");
        name.prepend(title)

        paragraph.textContent = rooms.receptionist.description;
        let para = document.querySelector("#paragraph");
        para.appendChild(paragraph)
        removeButton.remove()

        choice1.textContent = rooms.receptionist.choices.choice1
        choice2.textContent = rooms.receptionist.choices.choice2
        choice3.textContent = rooms.receptionist.choices.choice3
        let right = document.querySelector("#rightBtn");
        right.textContent = rooms.receptionist.nextRooms.right

        right.addEventListener('click', cubicleRoom)

        enableButtons()
    }
}

const cubicleRoom = (event) => {
    if (event.target.classList.contains('btn')) {
        img.src = "./Ascii%20images/Office Floor.png"
        let src = document.querySelector("#img");
        src.appendChild(img)


        title.textContent = rooms.cubicles.title
        let name = document.querySelector("#text");
        name.prepend(title)

        paragraph.textContent = rooms.cubicles.description;
        let para = document.querySelector("#paragraph");
        para.appendChild(paragraph)
        removeButton.remove()
        choice1.textContent = rooms.cubicles.choices.choice1
        choice2.textContent = rooms.cubicles.choices.choice2
        choice3.textContent = rooms.cubicles.choices.choice3

        let right = document.querySelector("#rightBtn");
        let left = document.querySelector("#leftBtn");

        // Need to assign a room function still
        right.textContent = rooms.cubicles.nextRooms.right
        left.textContent = rooms.cubicles.nextRooms.left


        left.addEventListener('click', breakRoom)

    }
}


const breakRoom = (event) => {
    if (event.target.classList.contains('btn')) {
        img.src = "./Ascii%20images/Coffee Room.png"
        let src = document.querySelector("#img");
        src.appendChild(img)


        title.textContent = rooms.breakRoom.title
        let name = document.querySelector("#text");
        name.prepend(title)

        paragraph.textContent = rooms.breakRoom.description;
        let para = document.querySelector("#paragraph");
        para.appendChild(paragraph)
        removeButton.remove()
        choice1.textContent = rooms.breakRoom.choices.choice1
        choice2.textContent = rooms.breakRoom.choices.choice2
        choice3.textContent = rooms.breakRoom.choices.choice3

        let right = document.querySelector("#rightBtn");
        let left = document.querySelector("#leftBtn");
        left.textContent = rooms.breakRoom.nextRooms.left
        right.textContent = rooms.breakRoom.nextRooms.right
    }
}

const pressStart = (event) => {
    receptionist(event);
}

const raiseSuspicion = () => {
    suspicion += 1;
    console.log("current sus" + suspicion);
}

const updateTime = () => {
    timeLeft -= 1;
}


//Event listeners

screen.forEach(element => {
    element.addEventListener("click", pressStart)
});


//Title: Tasklist

// Add what if statements that check if health or suspicion is at a certain level to prompt game over or not

