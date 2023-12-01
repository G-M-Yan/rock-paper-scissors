## Rock Paper Scissors Game - Web Implementation

This code represents a Rock-Paper-Scissors game implemented for the web. It offers an interactive interface using HTML, CSS, and JavaScript. The game provides three options (rock, paper, or scissors) as buttons for player selection and displays the results dynamically on the webpage.

### HTML Structure
The HTML file contains buttons for each option, a result display area, a log to show the round results, and a 'Replay' button to start a new game.

### JavaScript Functions
- `getComputerChoice()` generates a random choice (rock, paper, or scissors) for the computer.
- `playRound(playerSelection, computerSelection)` determines the winner for a round based on the player's and computer's choices.
- `handlePlayerChoice()` handles player interaction by detecting button clicks and triggering game rounds.
- `updateScore(result)` updates the score and checks for game completion.
- `disableButtons()` disables buttons after the game ends.

### CSS Styling
The CSS file styles the game interface, utilizing background images, button styles, text formatting, and layout adjustments for a visually appealing experience.

#### Screenshot of the Website
![Rock Paper Scissors Website](/home/yan/repos/rock-paper-scissors/screenshot.png)

The game logic is implemented using event listeners, DOM manipulation, and CSS styling to create an engaging and user-friendly Rock-Paper-Scissors game on the web.
