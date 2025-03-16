/*-------------------------------- Constants --------------------------------*/

const rooms = {

    "win": {
        title: "You Win!",
        description: "As you step out of the final office door, a rush of relief washes over you. The harsh fluorescent lights flicker behind you, and the endless stacks of paperwork are now a distant memory. You made it. You survived the treacherous maze of deadlines, nosy coworkers, and the ever-watchful boss."
    },
    "lose1": {
        title: "Game Over – Caught by the Boss!",
        description: "As you try to make your next move, a shadow looms over you. A cold shiver runs down your spine as you slowly turn around—it's the boss, arms crossed, eyes narrowing with suspicion.\n" +
            "\n" +
            "\"You’ve been acting… different lately,\" they say, tapping a finger against their desk. \"Care to explain why you’re sneaking around instead of working?\"\n" +
            "\n" +
            "Your mind races for an excuse, but it’s too late. The office falls silent as your coworkers glance over, sensing the inevitable. With a disappointed sigh, the boss gestures toward a towering stack of paperwork."
    },
    "lose2": {
        title: "Game Over – Burnt Out and Defeated\n" +
            "\n",
        description: "Your body feels heavy as you trudge through the office, each step slower than the last. The endless meetings, the looming deadlines, the relentless emails—it’s all too much. Your vision blurs, your legs wobble, and with one final exhausted sigh, you collapse into the nearest chair.\n" +
            "\n" +
            "A coworker glances over, concerned. “Hey… you good?”\n" +
            "\n" +
            "You try to answer, but all that comes out is a tired groan. The weight of overwork has finally crushed you. Before you can react, the boss walks by, barely sparing you a glance."
    },
    "receptionist": {
        title: "Receptionist",
        description: "You walk into the office floor and you're seen by the receptionist who clocks you in. She scans your character for the day. How should you act? ",
        choices: {
            choice1: "Stand tall",
            choice2: "Fake cough",
            choice3: "Say good morning "
        },
        afterChoice: {
            choice1:" You stride confidently through the office entrance, shoulders squared and head held high. A few coworkers glance your way, momentarily convinced you might be someone important. The receptionist gives you a hesitant nod, unsure whether to greet you or let you pass like a high-level executive. As you reach your desk, you feel an inexplicable sense of authority—until you realize you still have an entire workday ahead.(Unchanged) ",
            choice2: "You clear your throat loudly, asserting your week work dominance for the day, then let out an exaggerated cough into your hand. A few coworkers instinctively take a step back, and someone near the water cooler subtly reaches for hand sanitizer. The office intern gives you a nervous look, unsure whether to ask if you’re okay or avoid being roped into a conversation. You’ve successfully created a small bubble of personal space, but at what cost? (Suspicion + 1)",
            choice3: "You offer a polite \"Good morning\" as you walk in. At first, it seems harmless—just another routine interaction. But then it happens. A coworker stops you. “Did you catch that email about the new workflow updates?” another chimes in, “Hey, can you cover for me in the meeting later?” Before you realize it, you're being absorbed into the office hive mind, nodding along to discussions you don’t care about, agreeing to things you don’t understand. The weight of forced camaraderie and unexpected responsibilities slowly drains your energy. (Health - 1)",
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
        afterChoice:{
            choice1: "You lean back, stretching theatrically, letting out an exaggerated sigh as if you’ve been toiling away for hours. A nearby coworker nods in sympathy, believing you’re just another overworked corporate warrior. Your act earns you a moment of relief, and the stress seems to ease—but management is now aware of you (Suspicion + 1)",
            choice2: "You sit motionless, staring at your inbox. You click refresh. Nothing changes. You click refresh again. The emails remain the same. Time passes in an eternal loop of corporate stagnation. You feel your soul slowly leaving your body, but at least no one notices you. (Health - 1)",
            choice3: "You stand up, stretch slightly, and walk over to the water cooler—not too fast, not too slow. You pour a glass, take a sip, nod at a coworker, and return to your desk. No one pays you any mind. No consequences. No changes. Just another day in the machine. (Unchanged)"
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
            right:"Server Room",
            left:"Cubicles",
        },
        choices: {
            choice1: "Take 5",
            choice2: "Engage in Tactical Mailroom Browsing",
            choice3: "Engage in Mailroom Lore Creation",
        },
        afterChoice: {
            choice1: "You step into the shadowy corner of the mailroom and lean against a dusty shelf. For a brief moment, you’re invisible—away from emails, meetings, and the ever-watchful eyes of management. The steady hum of the printer is oddly soothing, and you feel your stress ease just a little.\n" +
                "\n" +
                "But as you enjoy the moment, a mailroom clerk walks in and gives you a long, suspicious look. Why are you here? Do you even have mail? (Suspicion + 1)",
            choice2: "You shuffle through a stack of envelopes, flipping through them as if searching for something important. Your body language screams “busy”, and if anyone walks by, they’ll just assume you’re retrieving an important document. No one questions you, but the dust-covered envelopes remind you how little you belong here. (Health - 1)",
            choice3: "You spot a dusty package labeled ‘Derek F. Montgomery’ and immediately decide he was a former employee who vanished under mysterious circumstances. Another package, addressed to \"Susan T. Lively,\" surely belongs to an ex-CEO who faked her own disappearance after uncovering corporate corruption.\n" +
                "\n" +
                "Before you know it, you’re deep in an imaginary conspiracy thriller starring employees you’ve never met. Are these just unclaimed packages… or clues to something bigger?\n" +
                "\n" +
                "After a few minutes of suspenseful daydreaming, you put the packages back and stroll out, feeling absolutely no closer to productivity—but a little more entertained. (Unchanged)",
        }
    },




    "breakRoom": {
        title: "Break Room",
        description: "The breakroom is a colorful yet sad little oasis in the middle of corporate monotony. A fridge hums quietly in the corner, and the coffee machine sits on the counter like a sentient being, ready to serve caffeine to those who need it most. A faint smell of microwaved leftovers lingers in the air, and the sound of faint gossip fills the room. This is your chance to escape the grind—for a few minutes at least.",
        nextRooms: {
            left:"Rest Room",
            right:"Cubicles",
        },
        choices: {
            choice1: "The Great Lunch Debate\n",
            choice2: "Stir the Gossip Pot",
            choice3: "Browse the Workplace Chronicles\n",
        },
        afterChoice: {
            choice1: "You stare at your lunch, pondering the world’s most difficult question. After what feels like a lifetime of indecision, you finally eat… but you’re unsure if it was the right choice. You feel temporarily nourished, but the lingering feeling of doubt hangs over you. (Unchanged)",
            choice2: "You engage in the latest water cooler gossip and find yourself surprisingly energized by the drama. The exchange is filled with half-truths and bold assumptions, but it offers a much-needed distraction from the grind. For a moment, you feel more connected to your coworkers. However, you can’t shake the feeling that this gossip might come back to bite you later. (Suspicion + 1)",
            choice3: "You scan the bulletin board like you’re uncovering secret office lore. Little snippets of information reveal coworkers’ hobbies, upcoming events, and even the awkwardly cryptic memo about the broken coffee machine. It feels like a safe, low-risk activity, though you can’t help but feel like you’re wasting time. (Health - 1)",
        },
    },



    "restRoom": {
        title: "Restroom",
        description: "You walk into the restroom and are instantly greeted by the familiar smell of cleaning supplies and faint echoes of distant water running. It’s one of the few places where you can truly be alone for a few moments. The restroom is stark—no distractions, just the hum of fluorescent lights overhead and the quiet sound of someone else washing their hands. You’ve got some time to kill—how will you spend it?",
        nextRooms: {
            right:"Copy Room",
            left:"Break Room",
        },
        choices: {
            choice1: "Find Zen in the Bathroom Silence",
            choice2: "Perfect Your Corporate Persona",
            choice3: "Drown in the Email Abyss"
        },
        afterChoice: {
            choice1: "You enter a stall and sit down, taking a moment to relax in the silence. No emails, no phone calls, no managers looming over you. For once, it feels like you can just be yourself, away from the chaos of the office. You let the stillness wash over you. (Unchanged)",
            choice2: "You look at yourself in the mirror, practicing your corporate smile. You try to look approachable, friendly, and like you’re totally killing it at work—but the longer you stare, the more it feels like you’re slowly losing your grip on reality. Your smile feels more and more forced, and you wonder if anyone even notices you (Suspicion + 1)",
            choice3: "You pull out your phone and quickly glance through your emails, just to stay \"on top of things.\" It feels like an excuse to kill time, but you answer a couple of questions, send out a “quick” reply to a coworker, and maybe scroll through Slack for an urgent message. Of course, the longer you stay, the more you find yourself getting lost in the inbox abyss (Health - 1)",
        }
    },



    "copyRoom": {
        title: "Copy Room",
        description: "You enter the copy room, where the loud hum of the copier fills the air. It’s one of the few rooms that gets used constantly—documents to copy, forms to print, and reports to distribute. A few piles of paper are scattered around, and the smell of fresh ink is thick in the air. This space feels like it should be productive, but you can't help but wonder—what would happen if you just wasted some time here?",
        nextRooms: {
            left:"Restroom",
            right:"Server Room",
        },
        choices: {
            choice1: "Master the Art of Waiting",
            choice2: "Make Copies for No Reason",
            choice3: "Pretend to Be Productive"
        },
        afterChoice: {
            choice1: "You casually walk over to the copier, stand there for a moment, and stare at the blinking error message like it holds the secrets of the universe. The hum of fluorescent lights and the smell of toner lull you into a mild existential crisis. You sigh, realizing you've wasted energy just standing there, and leave—feeling inexplicably drained. (Health - 1)",
            choice2: "You step up to the copier and start making excessive copies—random office memos, last month’s meeting notes, even the copier’s own troubleshooting guide. Page after page spews out as you nod seriously, like you're on an important mission. A coworker walks by and squints. Why do you need 50 copies of the dress code policy? they ask. You press the button again, avoiding eye contact. (Suspicion + 1)",
            choice3:"You shuffle the stacks of paper on the counter, rearranging them into slightly different but equally meaningless piles. Every now and then, you straighten a few sheets and glance at the clock, giving off the perfect ‘I’m busy’ aura. The copier hums in approval. You accomplish absolutely nothing—but hey, at least no one questions it. (Unchanged)"
        }
    },





    "serverRoom": {
        title: "Server Room",
        description: "You confidently rearrange some cables, totally sure you’re optimizing performance. A server fan suddenly sounds like a jet engine preparing for takeoff. Huh. Probably nothing. You stretch your back, feeling oddly refreshed—meanwhile, IT is going to have a meltdown.",
        nextRooms: {
            left:"Copy Room",
            right:"Mail Room",
        },
        choices: {
            choice1: "Rewire for Efficiency",
            choice2: "Loiter Near the Machines",
            choice3: "Read Error Logs",
        },
        afterChoice: {
            choice1: "You confidently rearrange some cables, totally sure you’re optimizing performance. A server fan suddenly sounds like a jet engine preparing for takeoff. Huh. Probably nothing. You stretch your back, feeling oddly refreshed—meanwhile, IT is going to have a meltdown. (Suspicion + 1)",
            choice2: "You stare at a blinking server light like it’s the meaning of life, hands on hips, nodding thoughtfully. The cold air starts sucking the warmth from your soul, and before long, your fingers feel like frozen fish sticks. Worth it? Probably not. (Health - 1)",
            choice3:"Ooooh, red error messages! You squint at the screen, nodding like a seasoned hacker in a movie, but you understand absolutely nothing. After 10 minutes of intense fake analysis, you leave feeling no wiser, but at least no one suspects a thing. (Unchanged)"

        }
    },
}


/*-------------------------------- Variables --------------------------------*/
let health = 5;
let roomCount = 0;
let suspicion = 0;
let timeLeft = 8
let img = document.createElement("img");
let title = document.createElement("h1");
let paragraph = document.createElement("p");
let stat1 = document.createElement("p");
let stat2 = document.createElement("p");



/*------------------------ Cached Element References ------------------------*/

let choice1 = document.querySelector("#choice1");
let choice2 = document.querySelector("#choice2");
let choice3 = document.querySelector("#choice3");
let left = document.querySelector("#leftBtn");
let right = document.querySelector("#rightBtn");


const text = document.querySelector("#text");
const screen = document.querySelectorAll('#game');
const removeButton = document.querySelector("#startBtn");
const removeTitleImg = document.querySelector("#imgTitle");
const removeTitle = document.querySelector("#title");
const removeTutorial = document.querySelector("#tutorial");
//TODO THis might me the issue

const choices = document.querySelectorAll(".choices");

// choices.forEach(choice => {
//     choice.disabled = true;
// })




/*----------------------------------Functions --------------------------------*/
// Title: Room logic

const disableButtons = () => {
    choice1.style.display = "none";
    choice2.style.display = "none";
    choice3.style.display = "none";
    left.style.display = "none";
    right.style.display = "none";
}




const enableButtons = () => {
    choices.forEach(choice => {
        choice.disabled = false;
    })
}







const health_suspicion = (event) => {
    stat1.textContent = "Health: " + health
    stat2.textContent = "Suspicion: " + suspicion

    let stats = document.querySelector("#stats");
    stats.appendChild(stat1)
    stats.appendChild(stat2)
}






const receptionist = (event) => {
    if (event.target.classList.contains('startBtn')) {
        img.src = "./Ascii%20images/Receptionist.png";
        let src = document.querySelector("#img");
        src.appendChild(img);

        title.textContent = rooms.receptionist.title;
        let name = document.querySelector("#text");
        name.prepend(title);

        paragraph.textContent = rooms.receptionist.description;
        let para = document.querySelector("#paragraph");
        para.appendChild(paragraph);

        removeButton.remove();
        removeTitleImg.remove();
        removeTutorial.remove();
        removeTitle.remove();

        health_suspicion();

        choice1.textContent = rooms.receptionist.choices.choice1;
        choice2.textContent = rooms.receptionist.choices.choice2;
        choice3.textContent = rooms.receptionist.choices.choice3;

        let right = document.querySelector("#rightBtn");
        let left = document.querySelector("#leftBtn");

        right.textContent = rooms.receptionist.nextRooms.right;
        right.style.display = "none";
        left.style.display = "none";

        // Function to handle choice click for the receptionist room
        const handleChoiceClickReceptionist = (choice) => {
            let para = document.querySelector("#paragraph");

            if (choice === choice1) {
                console.log(`Choice ${choice.innerHTML}`);
                paragraph.textContent = rooms.receptionist.afterChoice.choice1;
                para.appendChild(paragraph);
                roomCount += 1;
            } else if (choice === choice2) {
                console.log(`Choice ${choice.innerHTML}`);
                paragraph.textContent = rooms.receptionist.afterChoice.choice2;
                para.appendChild(paragraph);
                suspicion += 1;
                roomCount += 1;
                health_suspicion();
            } else if (choice === choice3) {
                console.log(`Choice ${choice.innerHTML}`);
                paragraph.textContent = rooms.receptionist.afterChoice.choice3;
                para.appendChild(paragraph);
                health -= 1;
                roomCount += 1;
                health_suspicion();
            }

            // Clean up event listeners after a choice is made
            choice1.removeEventListener("click", choice1Click);
            choice2.removeEventListener("click", choice2Click);
            choice3.removeEventListener("click", choice3Click);

            // Hide choices and show the next button
            choice1.style.display = "none";
            choice2.style.display = "none";
            choice3.style.display = "none";
            right.style.display = "block";
            left.style.display = "none";
        };

        const choice1Click = () => handleChoiceClickReceptionist(choice1);
        const choice2Click = () => handleChoiceClickReceptionist(choice2);
        const choice3Click = () => handleChoiceClickReceptionist(choice3);

        choice1.addEventListener("click", choice1Click);
        choice2.addEventListener("click", choice2Click);
        choice3.addEventListener("click", choice3Click);

        right.addEventListener('click', cubicleRoom);

        enableButtons();
    }
};

const cubicleRoom = () => {
    if (suspicion >= 5) {
        badEnd1();
        return;
    }
    if (health <= 0) {
        badEnd2();
        return;
    }

    if (roomCount >= 7 ) {
        goodEnd()
    }

    img.src = "./Ascii%20images/Office Floor.png";
    let src = document.querySelector("#img");
    src.appendChild(img);

    title.textContent = rooms.cubicles.title;
    let name = document.querySelector("#text");
    name.prepend(title);

    paragraph.textContent = rooms.cubicles.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph);
    removeButton.remove();

    choice1.textContent = rooms.cubicles.choices.choice1;
    choice2.textContent = rooms.cubicles.choices.choice2;
    choice3.textContent = rooms.cubicles.choices.choice3;

    let right = document.querySelector("#rightBtn");
    let left = document.querySelector("#leftBtn");

    right.textContent = rooms.cubicles.nextRooms.right;
    left.textContent = rooms.cubicles.nextRooms.left;

    right.style.display = "none";
    left.style.display = "none";

    const handleChoiceClickCubicle = (choice) => {
        let para = document.querySelector("#paragraph");

        if (choice === choice1) {
            console.log(`Choice ${choice.innerHTML}`);
            paragraph.textContent = rooms.cubicles.afterChoice.choice1;
            para.appendChild(paragraph);
            suspicion += 1;
            roomCount += 1;
            health_suspicion();
        } else if (choice === choice2) {
            console.log(`Choice ${choice.innerHTML}`);
            paragraph.textContent = rooms.cubicles.afterChoice.choice2;
            para.appendChild(paragraph);
            health -= 1;
            roomCount += 1;
            health_suspicion();
        } else if (choice === choice3) {
            console.log(`Choice ${choice.innerHTML}`);
            paragraph.textContent = rooms.cubicles.afterChoice.choice3;
            para.appendChild(paragraph);
        }


        choice1.removeEventListener("click", choice1Click);
        choice2.removeEventListener("click", choice2Click);
        choice3.removeEventListener("click", choice3Click);

        right.style.display = "block";
        left.style.display = "block";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    };

    const choice1Click = () => handleChoiceClickCubicle(choice1);
    const choice2Click = () => handleChoiceClickCubicle(choice2);
    const choice3Click = () => handleChoiceClickCubicle(choice3);

    choice1.addEventListener("click", choice1Click);
    choice2.addEventListener("click", choice2Click);
    choice3.addEventListener("click", choice3Click);

    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";

    right.removeEventListener('click', cubicleRoom);
    left.removeEventListener('click', restRoom);
    right.removeEventListener('click', serverRoom);
    left.removeEventListener('click', cubicleRoom);
    right.addEventListener('click', mailRoom);
    left.addEventListener('click', breakRoom);
};






const mailRoom = () => {

    if (suspicion >= 5) {
        badEnd1();
        return;
    }
    if (health <= 0) {
        badEnd2();
        return;
    }

    if (roomCount >= 7 ) {
        goodEnd()
    }
    img.src = "./Ascii%20images/Mail Room.png"
    let src = document.querySelector("#img");
    src.appendChild(img)


    title.textContent = rooms.mailRoom.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.mailRoom.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
    removeButton.remove()
    choice1.textContent = rooms.mailRoom.choices.choice1
    choice2.textContent = rooms.mailRoom.choices.choice2
    choice3.textContent = rooms.mailRoom.choices.choice3

    let right = document.querySelector("#rightBtn");
    let left = document.querySelector("#leftBtn");

    left.textContent = rooms.mailRoom.nextRooms.left
    right.textContent = rooms.mailRoom.nextRooms.right

    right.style.display = "none";
    left.style.display = "none";

    const handleChoiceClickMail = (choice) => {
        let para = document.querySelector("#paragraph");

        if (choice === choice1) {
            paragraph.textContent = rooms.mailRoom.afterChoice.choice1;
            para.appendChild(paragraph)
            suspicion += 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice2) {
            paragraph.textContent = rooms.mailRoom.afterChoice.choice2;
            para.appendChild(paragraph)
            health -= 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice3) {
            paragraph.textContent = rooms.mailRoom.afterChoice.choice3;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            roomCount += 1
        }



        choice1.removeEventListener("click", choice1Click);
        choice2.removeEventListener("click", choice2Click);
        choice3.removeEventListener("click", choice3Click);

        right.style.display = "block";
        left.style.display = "block";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";

    }

    const choice1Click = () => handleChoiceClickMail(choice1);
    const choice2Click = () => handleChoiceClickMail(choice2);
    const choice3Click = () => handleChoiceClickMail(choice3);

    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";

    choice1.addEventListener("click", choice1Click);
    choice2.addEventListener("click", choice2Click);
    choice3.addEventListener("click", choice3Click);

    right.removeEventListener('click', mailRoom)
    left.removeEventListener('click', copyRoom)
    right.removeEventListener('click', mailRoom)
    left.removeEventListener('click', breakRoom)
    left.addEventListener('click', cubicleRoom)
    right.addEventListener('click', serverRoom)
}




const breakRoom = () => {
    if (suspicion >= 5) {
        badEnd1();
        return;
    }
    if (health <= 0) {
        badEnd2();
        return;
    }

    if (roomCount >= 7 ) {
        goodEnd()
        return;
    }
    img.src = "./Ascii%20images/Coffee Room.png"
    console.log(roomCount)
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


    right.style.display = "none";
    left.style.display = "none";

    const handleChoiceClickBreak = (choice) => {
        if (choice === choice1) {
            paragraph.textContent = rooms.breakRoom.afterChoice.choice1;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            roomCount += 1

        }
        else if (choice === choice2) {
            paragraph.textContent = rooms.breakRoom.afterChoice.choice2;
            let para = document.querySelector("#paragraph");
            suspicion += 1
            roomCount += 1
            health_suspicion()
            para.appendChild(paragraph)


        }
        else if (choice === choice3) {
            paragraph.textContent = rooms.breakRoom.afterChoice.choice3;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            health -= 1
            roomCount += 1
            health_suspicion()
        }
        choice1.removeEventListener("click", choice1Click);
        choice2.removeEventListener("click", choice2Click);
        choice3.removeEventListener("click", choice3Click);


        right.style.display = "block";
        left.style.display = "block";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    }


    const choice1Click = () => handleChoiceClickBreak(choice1);
    const choice2Click = () => handleChoiceClickBreak(choice2);
    const choice3Click = () => handleChoiceClickBreak(choice3);

    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";

    choice1.addEventListener("click", choice1Click);
    choice2.addEventListener("click", choice2Click);
    choice3.addEventListener("click", choice3Click);

    right.removeEventListener('click', copyRoom)
    left.removeEventListener('click', breakRoom)
    right.removeEventListener('click', mailRoom)
    left.removeEventListener('click', breakRoom)
    left.addEventListener('click', restRoom)
    right.addEventListener('click', cubicleRoom)
}




const restRoom = () => {
    if (suspicion >= 5) {
        badEnd1();
        return;
    }
    if (health <= 0) {
        badEnd2();
        return;
    }

    if (roomCount >= 7 ) {
        goodEnd()
        return;
    }
    img.src = "./Ascii%20images/Restroom.png"
    let src = document.querySelector("#img");
    src.appendChild(img)

    title.textContent = rooms.restRoom.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.restRoom.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
    removeButton.remove()
    choice1.textContent = rooms.restRoom.choices.choice1
    choice2.textContent = rooms.restRoom.choices.choice2
    choice3.textContent = rooms.restRoom.choices.choice3

    let right = document.querySelector("#rightBtn");
    let left = document.querySelector("#leftBtn");
    left.textContent = rooms.restRoom.nextRooms.left
    right.textContent = rooms.restRoom.nextRooms.right



    right.style.display = "none";
    left.style.display = "none";

    const handleChoiceClickRest = (choice) => {
        if (choice === choice1) {
            paragraph.textContent = rooms.restRoom.afterChoice.choice1;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            roomCount += 1
        }
        else if (choice === choice2) {
            paragraph.textContent = rooms.restRoom.afterChoice.choice2;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            suspicion += 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice3) {
            paragraph.textContent = rooms.restRoom.afterChoice.choice3;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            health -= 1
            roomCount += 1
            health_suspicion()
        }
        choice1.removeEventListener("click", choice1Click);
        choice2.removeEventListener("click", choice2Click);
        choice3.removeEventListener("click", choice3Click);


        right.style.display = "block";
        left.style.display = "block";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    }

    const choice1Click = () => handleChoiceClickRest(choice1);
    const choice2Click = () => handleChoiceClickRest(choice2);
    const choice3Click = () => handleChoiceClickRest(choice3);

    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";

    choice1.addEventListener("click", choice1Click);
    choice2.addEventListener("click", choice2Click);
    choice3.addEventListener("click", choice3Click);

    right.removeEventListener('click', serverRoom)
    left.removeEventListener('click', restRoom)
    right.removeEventListener('click', cubicleRoom)
    left.removeEventListener('click', restRoom)
    left.addEventListener('click', breakRoom)
    right.addEventListener('click', copyRoom)
}


const copyRoom = () => {
    if (suspicion >= 5) {
        badEnd1();
        return;
    }
    if (health <= 0) {
        badEnd2();
        return;
    }
    if (roomCount >= 7 ) {
        goodEnd()
        return
    }
    img.src = "./Ascii%20images/Copy Room.png"
    let src = document.querySelector("#img");
    src.appendChild(img)

    title.textContent = rooms.copyRoom.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.copyRoom.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
    removeButton.remove()
    choice1.textContent = rooms.copyRoom.choices.choice1
    choice2.textContent = rooms.copyRoom.choices.choice2
    choice3.textContent = rooms.copyRoom.choices.choice3


    let right = document.querySelector("#rightBtn");
    let left = document.querySelector("#leftBtn");
    left.textContent = rooms.copyRoom.nextRooms.left
    right.textContent = rooms.copyRoom.nextRooms.right

    right.style.display = "none";
    left.style.display = "none";

    const handleChoiceClickCopy = (choice) => {
        if (choice === choice1) {
            paragraph.textContent = rooms.copyRoom.afterChoice.choice1;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            health -= 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice2) {
            paragraph.textContent = rooms.copyRoom.afterChoice.choice2;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            suspicion += 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice3) {
            paragraph.textContent = rooms.copyRoom.afterChoice.choice3;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            roomCount += 1
        }
        choice1.removeEventListener("click", choice1Click);
        choice2.removeEventListener("click", choice2Click);
        choice3.removeEventListener("click", choice3Click);

        right.style.display = "block";
        left.style.display = "block";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    }

    const choice1Click = () => handleChoiceClickCopy(choice1);
    const choice2Click = () => handleChoiceClickCopy(choice2);
    const choice3Click = () => handleChoiceClickCopy(choice3);

    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";

    choice1.addEventListener("click", choice1Click);
    choice2.addEventListener("click", choice2Click);
    choice3.addEventListener("click", choice3Click);






    right.removeEventListener('click', mailRoom)
    left.removeEventListener('click', copyRoom)
    right.removeEventListener('click', copyRoom)
    left.removeEventListener('click', breakRoom)
    left.addEventListener('click', restRoom)
    right.addEventListener('click', serverRoom)
}




const serverRoom = () => {
    if (suspicion >= 5) {
        badEnd1();
        return;
    }
    if (health <= 0) {
        badEnd2();
        return;
    }

    if (roomCount >= 7 ) {
        goodEnd()
        return;
    }

    img.src = "./Ascii%20images/Server Room.png"
    let src = document.querySelector("#img");
    src.appendChild(img)

    title.textContent = rooms.serverRoom.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.serverRoom.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
    removeButton.remove()
    choice1.textContent = rooms.serverRoom.choices.choice1
    choice2.textContent = rooms.serverRoom.choices.choice2
    choice3.textContent = rooms.serverRoom.choices.choice3

    let right = document.querySelector("#rightBtn");
    let left = document.querySelector("#leftBtn");
    left.textContent = rooms.serverRoom.nextRooms.left
    right.textContent = rooms.serverRoom.nextRooms.right

    right.style.display = "none";
    left.style.display = "none";

    const handleChoiceClickServer = (choice) => {
        if (choice === choice1) {
            paragraph.textContent = rooms.serverRoom.afterChoice.choice1;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            suspicion += 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice2) {
            paragraph.textContent = rooms.serverRoom.afterChoice.choice2;
            let para = document.querySelector("#paragraph");
            para.appendChild(paragraph)
            health -= 1
            roomCount += 1
            health_suspicion()

        }
        else if (choice === choice3) {
            paragraph.textContent = rooms.serverRoom.afterChoice.choice3;
            let para = document.querySelector("#paragraph");
            roomCount += 1
            para.appendChild(paragraph)
        }
        choice1.removeEventListener("click", choice1Click);
        choice2.removeEventListener("click", choice2Click);
        choice3.removeEventListener("click", choice3Click);


        right.style.display = "block";
        left.style.display = "block";
        choice1.style.display = "none";
        choice2.style.display = "none";
        choice3.style.display = "none";
    }


    const choice1Click = () => handleChoiceClickServer(choice1);
    const choice2Click = () => handleChoiceClickServer(choice2);
    const choice3Click = () => handleChoiceClickServer(choice3);

    choice1.style.display = "block";
    choice2.style.display = "block";
    choice3.style.display = "block";

    choice1.addEventListener("click", choice1Click);
    choice2.addEventListener("click", choice2Click);
    choice3.addEventListener("click", choice3Click);

    console.log(roomCount)

    right.removeEventListener('click', serverRoom)
    left.removeEventListener('click', cubicleRoom)
    right.removeEventListener('click', serverRoom)
    left.removeEventListener('click', restRoom)
    left.addEventListener('click', copyRoom)
    right.addEventListener('click', mailRoom)
}


const goodEnd = () => {
    right.style.display = "none";
    left.style.display = "none";
    img.src = "./Ascii%20images/Leaving Work.png"
    let src = document.querySelector("#img");
    src.appendChild(img)


    title.textContent = rooms.win.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.win.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
}

const badEnd1 = () => {
    right.style.display = "none";
    left.style.display = "none";
    img.src = "./Ascii%20images/BossYelling.png"
    let src = document.querySelector("#img");
    src.appendChild(img)


    title.textContent = rooms.lose1.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.lose1.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
}


const badEnd2 = () => {
    right.style.display = "none";
    left.style.display = "none";
    img.src = "./Ascii%20images/Sleeping.png"
    let src = document.querySelector("#img");
    src.appendChild(img)


    title.textContent = rooms.lose2.title
    let name = document.querySelector("#text");
    name.prepend(title)

    paragraph.textContent = rooms.lose2.description;
    let para = document.querySelector("#paragraph");
    para.appendChild(paragraph)
}



const pressStart = (event) => {

    receptionist(event);
}




//Event listeners

screen.forEach(element => {
    element.addEventListener("click", pressStart)
});




