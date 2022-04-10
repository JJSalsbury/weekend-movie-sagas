import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App.js';
import { createStore, combineReducers, applyMiddleware } from 'redux';
// Provider allows us to use redux within our react app
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// Import saga middleware
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

// Create the rootSaga generator function
function* rootSaga() {
    yield takeEvery('FETCH_MOVIES', fetchAllMovies);
    yield takeEvery('FETCH_DETAILS', getDetails);
    yield takeEvery('ADD_MOVIE', addMovie)
    // yield takeEvery('GET_GENRES', getGenres);
}

function* fetchAllMovies() {
    // get all movies from the DB
    try {
        const movies = yield axios.get('/api/movie');
        console.log('get all:', movies.data);
        yield put({ type: 'SET_MOVIES', payload: movies.data });

    } catch {
        console.log('get all error');
    }
        
}

function* getDetails(action) {
    // get all details from the DB
    try {
        const movie = yield axios.get(`/api/movie/${action.payload}`);
        yield put({ type: 'SET_DETAILS', payload: movie });
    } catch(error) {
        console.log('getFetch error:', error);
    }
    try {
        const genres = yield axios.get(`/api/genre/${action.payload}`);
        yield put({type: 'SET_GENRES', payload: genres});
    } catch(error) {
        console.log('getFetch error:', error);
    }
}

// function* getGenres(action) {
//     const genres = action.payload;
//     try {
//         let response = yield axios.get(`/api/genre/${genres}`)
//         console.log('response.data getGenres:', response.data);
//         yield put({type: 'SET_GENRES', payload: response.data});
//     } catch {
//         console.log('getGenres error');
//     }
// }
function* addMovie(action) {
    try{
        console.log('Payload in addMovie:', action.payload);
        const details = yield axios.post('/api/movie', action.payload)
        console.log('added movie:', details.data)
    } catch (err) {
        console.log('Error in addMovie', err)
    }
}

// Create sagaMiddleware
const sagaMiddleware = createSagaMiddleware();

//REDUX STORE

// Used to store movies returned from the server
const movies = (state = [], action) => {
    switch (action.type) {
        case 'SET_MOVIES':
            return action.payload;
        // case 'SET_DETAILS':
        //     return action.payload;
        default:
            return state;
    }
}

// Used to store the movie genres
const genres = (state = [], action) => {
    switch (action.type) {
        case 'SET_GENRES':
            console.log('genres reducer', action.payload.data);
            
            return action.payload.data;
        default:
            return state;
    }
}

const details = (state=[], action) => {
        switch (action.type) {
            case 'SET_DETAILS':
                return action.payload.data[0];
            default:
                return state;
        }
    }

// Create one store that all components can use
const storeInstance = createStore(
    combineReducers({
        movies,
        genres,
        details
    }),
    // Add sagaMiddleware to our store
    applyMiddleware(sagaMiddleware, logger),
);

// Pass rootSaga into our sagaMiddleware
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={storeInstance}>
        <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);
