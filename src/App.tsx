import './App.css';
import { useState, useEffect, ChangeEvent } from 'react';
import CardList from './components/card-list/card-list.component'; 
import SearchBox from './components/search-box/search-box.component';
import { getData } from './utils/data.utils';

export type Robo = {
  id: string;
  name: string;
  email: string;
}

const App = () => {
  const [set, setSet] = useState<Robo[]>([]);
  const [filteredSet, setFilteredSet] = useState(set);
  const [searchField, setSearchField] = useState('');

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchField = event.target.value.toLowerCase();
    setSearchField(searchField);
  };

  useEffect(() => {
    const url = 'https://jsonplaceholder.typicode.com/users';
    const fetchUsers = async () => {
      const users = await getData<Robo[]>(url);
      setSet(users);
    }

    fetchUsers();
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
