import { HashRouter as Router, Route } from 'react-router-dom';
import './App.css';
import MovieList from '../MovieList/MovieList';
import MovieDetails from '../MovieDetails/MovieDetails';
import MovieForm from '../MovieForm/MovieForm';
import '@fontsource/roboto';


function App() {
  return (
    <div className="App">
      <div id="appTitle">
        <h1>JJ'sFlix</h1>
      </div>
      <Router>
        <Route path="/" exact>
          <MovieList />
        </Route>
        {/* Details page */}
        <Route path="/details">
          <MovieDetails />
        </Route>
        {/* Add Movie page */}
        <Route path="/form">
          <MovieForm />
        </Route>
      </Router>
    </div>
  );
}


export default App;
