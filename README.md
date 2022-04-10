# WEEKEND MOVIE SAGAS

## Description

_Duration: April 7th - April 10th_

I created a movie management application, that can save a movie collection to a database and display them on page load. A detailed view has been created for each individual movie, including all genres associated with that movie. I practiced using a common web pattern; going from a list to showing more information about a single item.

The application spans across 3 views; the Movie-List, Movie-Form and Movie-details pages. 

The "home" view or Movie-List view displays all movies in the collection. There are two navigation's on this page.

By clicking the "add movie" button from the Movie-List page, the user is brought to the Movie-Form where they can add a movie by title, description, image url, and also select a genre by clicking the "save" button. The user may also click a "cancel" button to navigate back to the Movie-List page. 

I was introduced to REDUX-SAGA the Monday before the start of my project. By Thursday of that same week, I was using REACT and REDUX-SAGA to accomplish this project. Developing the project started with thoughtful and intentional preplanning, which made the execution of the project much easier. I developed a solid plan.

A challenge I face was naming 'actions' through out the application. With actions spread through out the reducers, generator functions, the rootSaga "listener" function and, of course, when dispatched in a component, naming actions descriptively becomes essential for making sense of the code. I learned a lot about redux-saga in this project and it's relationship and interaction with redux and react. 

## Screen Shot

![ScreenShot 1](/ScreenShot1.png?raw=true "Screenshot")
![ScreenShot 2](/ScreenShot2.png?raw=true "Screenshot")
![ScreenShot 3](/ScreenShot3.png?raw=true "Screenshot")

### Prerequisites

Link to software that is required to install the app (e.g. node).

- [node.js](https://nodejs.org/en/)
- [react.js](https://reactjs.org/)
- [nodemon](https://www.npmjs.com/package/nodemon)
- [redux](https://react-redux.js.org/)
- [redux-saga](https://redux-saga.js.org/)


## Installation

1. Open up code editor, run an `npm install`
2. Running the server code requires nodemon. If you don't already have nodemon, install it globally with npm install nodemon --global.
3. Run `npm run server` in your terminal.
4. Run `npm run client` in your terminal.
5. The `npm run client` command will open up a new browser tab for you!

## Usage

From the homepage:
1. View all movies in your collection.
2. Click on the "add movie" to add another movie to your collection.
3. Click on the "see movie details" to see the movie description and genre for each movie.

## Built With

- JavaScript  
- React  
- Css  
- Html
- Redux  
- Redux-Saga

## Acknowledgement

Thanks to [Prime Digital Academy](www.primeacademy.io) who equipped and helped me to make this application a reality. And thank you to my fellow students who provided support and helped create an amazing environment for collaborative learning. 

## Support  

If you have suggestions or issues, please email me at [joshuajsalsbury@gmail.com](www.google.com)
