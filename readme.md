# Task Summary

### My Process
- Spent some time understanding the requirements of the task and reading documentation on HTML Collections vs arrays
- Followed the install instructions as per the README
- Familiarised myself with the HTML and current file structure
- Pseudocoded the steps I would need to take and functions I would need to build
- Worked my way through these functions, testing in browser before moving on to the next
- Uncommented the tests in `cypress/integration/magic-trick.js` one by one to ensure all tests passing, changed variable names where required
- Removed unused code
- Once my programme had all the basic functionality implemented, I moved on to the bonus points tasks:
  - **RESET**: I implemented a 'Reset' function & building associated tests
  - **TESTS**: Made sure all tests passed and built my own
  - **EXTRA**: Added shuffle noise upon click

### Areas of Improvement
Had I had more time:
- I would have liked to get through all the tasks on the Bonus Points list
- I would have tried to refactor my code further e.g. combine styleCards and styleSelectedCards functions, combine button creation functions & further separate responsibilities where appropriate
- I would also like to declare some variables in the upper scope which are currently being repeated e.g. deck

### Other Comments
- This was my first time using Cypress for testing & I would like to have more practice with it
- I really enjoyed this task, thank you for giving me this opportunity!

### How To Run
- Simply open these files in your preferred text editor (I used Sublime Text) and drag the index.html into a new browser tab

-------------------------------------------------------------------------------
# Smart Magic Cards
Join Smart by performing a simple magic trick!!

A magician has a deck of cards, 52 cards, 13 of each suit (Hearts, Diamonds, Clubs and Spades).<br>
He will show us all of the cards and we will see that they are ordered and sorted by suit.<br>
We are asked to shuffle the deck.<br>
Then the magician asks us to pick a single card.<br>
When the magician reveals the deck of cards once more, the picked card is removed as well as all the related valued
cards.<br>
Eg. the 8 of hears it picked, now all the 8's are removed from the deck and added to the picked card.<br>

### Requirements
- Make sure all 4 suits of cards are rendered and sorted by suit. There are 13 cards in each suit ( ♥, ♣, ♦, ♠ ).
- Make sure the value for each card is visible on the initial render, basically move each card a bit so the card is readable.
- Add 3 buttons to the flow that will allow you to do 3 actions:
  - **Shuffle:** Randomly shuffles all cards.
  - **Flip cards:** Turn all the cards face down by adding a class (CSS is already included).
  - **Magic:** Remove all related cards from the deck after picking a card. (Only display this button after a card has been picked).
- Create the functionality to pick a card, by clicking on a random card.
- When the trick is performed (by clicking the magic button), move the related cards to the picked card.

#### Bonus points
  - Find a way to remove duplications in the `cards.scss` file and generate all the classes automatically for the cards:
`.hearts-1`, `.hearts-2`, ... , `.spades-13`.
  - Add animation.
  - Do not use images for the cards, style them with CSS/SCSS only.
  - Uncomment the tests in the `cypress/integration/magic-trick.js` file and **make sure the tests pass**.
  - Add additional tests (we like test coverage).
  - Usage of drag and drop to pick a card.
  - Having a way of resetting the app, without reloading the page.
  - Do not break any linting rules. (The linter runs before tests)
  - Add some extra functionality, this is your chance to be creative. 😉

#### Example
<img src="assets/working-example.gif" alt="working-example">

## Getting Started
Follow these steps to get the project setup on your machine.

### Clone the repository
```
git clone git@github.com:smartpension/smart-magic-cards.git
```
_Note:_ You won't have access to commit to this repository. We suggest you download it or fork it.

<img src="assets/fork-example.png" alt="working-example" width="800">

### Install
```
$ yarn install
```

### Develop
As this is just a static application, opening the `index.html` page in the browser should show you the app.<br>
In order to use the SASS compiler, run the following command.
```
$ yarn develop
```

### Test
In order to run the tests, run one of the following commands.
```
$ yarn test       # Test once
$ yarn serve-test # Open and serve the tests
```
_Note:_ [Cypress.io](https://www.cypress.io/) is included in the project and all tests will run with Github Actions.


### Hints
- When performing the trick, use the existing cards rather then create new ones.
- There is a difference between an [`array`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array) and a
[`HTMLCollection`](https://www.w3schools.com/js/js_htmldom_collections.asp). The latter, does not have the
[`array methods`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array#Common_operations),
to convert a `HTMLCollection` into an `array`, you can simply destructure it `[...HTMLCollection]`<br>
<img src="assets/array-hint.png" width=700 alt="array-hint">
