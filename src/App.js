import './App.css';
import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.component'; 
import SearchBox from './components/search-box/search-box.component';

const App = () => {
  const [set, setSet] = useState([]);
  const [filteredSet, setFilteredSet] = useState(set);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event) => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(set => setSet(set))
      .catch(error => console.error(error))
  }, []);

  useEffect(() => {
    const changedFilteredSet = set.filter((element) => {
      return element.name.toLowerCase().startsWith(searchField)
    });

    setFilteredSet(changedFilteredSet);

  },[set, searchField]);

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

export default App;
