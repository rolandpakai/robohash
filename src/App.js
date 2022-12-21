import './App.css';
import { Component } from 'react';
import CardList from './components/card-list/card-list.component'; 
import SearchBox from './components/search-box/search-box.component';

class App extends Component {
  constructor() {
    super();

    this.state = {
      set: [],
      searchField: ''
    };

    //this.onSearchChange = this.onSearchChange.bind(this);

    console.log('1: constructor - App');
  }

  componentDidMount = () => {
    console.log('3: componentDidMount - App');

    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(set => 
        this.setState((currentState, props) => {
          return { set }
        }, () => {
          console.log(this.state)
        })
      )
      .catch(error => console.error(error));
  }

  onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    this.setState(() => {
      return { searchField }
    });
  }

  render = () => {
    console.log('2: render - App');

    const { set, searchField } = this.state;
    const { onSearchChange } = this;

    const filteredSet = set.filter((element) => {
      return element.name.toLowerCase().startsWith(searchField)
    });

    return (
      <div className="App">
        <h1 className="app-title">Robohash</h1>
        <SearchBox
          className="set-search-box" 
          placeholder="Search"
          onChange={ onSearchChange }
        />
        <CardList set={filteredSet} />
      </div>
    );
  }
}

export default App;
