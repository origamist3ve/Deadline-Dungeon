Choose your own adventure - Deadline Dungeon
# Project Proposal
- My game is called Deadline Dungeon. It is an ASCII based game similar to the concepts of Multi user dungeons and ZORK. The player must make a decision based on the room he is in to avoid encountering the office boss whose aim is to catch the player slacking. As an office employee, you must traverse the rooms of the office to pass the time till end of working hours without raising the bosses suspicion of you or loosing health from bad decisions

# Wireframe - Initial Landing
![[Deadline dungeon wireframe.png]]

# User stories
- **MVP goals**
    - As a player, I want to be able to navigate between rooms so that I can control my movement
    - As a player, I want to be able to click or write my choice for the room, so that I can control my decisions that impact the game
    - As a player, I want to be able to see the stats of the game on the screen, So that I know my progress
    - As a player, I want to have a tutorial so that I'm be able to know how to play the game
    - As a player I want to have a limited amount of time, so that I have to manage my decisions correctly
    - As a player I want to have a few winning conditions, So that I know how my decisions impacted the game
    - As a player I want to have a game over screen that shows me the stats of my game, so that I know how I did overall in the game
- **Stretch goals**
    - As a player, I want to have random encounters that change the gameplay a bit, so that the game isn't repetitive
    - As a player, I want to see animated ASCII, so that the game looks more visually appealing

# Pseudocode
```js
// 1) Define variables of the game
	// Room descriptions and room text
	// Player condition
		//Health
		//Suspcion
	//Player choices
// 2) Define functions
	// Based on the players choice, run a certain switch case and modify variables
	// Generate random events when player visit certain rooms throughout the game 
// 3) handle players input for choice
	// Handle any choices not allowed during game (Text input)
	// Add text based easter egg(Specific text prompts other than choice)
// 4) Define visuals
	// Set the UI placeholder for innertext output based on the games current state
// 5) Render
	// Display win or lose state at the end when timer is finished or the variables maintaing players health are depleted
```



# Timeline


| **Day**    | **Task**                                                                   | **Blockers**                                                                    | **Notes**                                               |
| ---------- | -------------------------------------------------------------------------- | ------------------------------------------------------------------------------- | ------------------------------------------------------- |
| Monday     | Create and submit proposal                                                 |                                                                                 |                                                         |
| Tuesday    | Create files and build the UI place holder with generic visuals            |                                                                                 |                                                         |
| Wedenesday | Define variables and functions and test in game                            | Figuring out  how to set up the switch cases and implementing the random events | Will have to set up choices first without random events |
| Thursday   | Polish game logic                                                          |                                                                                 |                                                         |
| Friday     | Polish game style                                                          |                                                                                 |                                                         |
| Saturday   | Work on stretch goals                                                      |                                                                                 |                                                         |
| Sunday     | Work on last touchups including any possible stretch goals not implemented |                                                                                 |                                                         |
