import './App.css';
import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import SelectionContainerList from './components/SelectionContainerList';
// import VinylContainer from './components/VinylContainer';
// import { Route, Switch } from "react-router-dom";
// import Search from "./components/Search";

function App() {

  const[vinyls, setVinyls] = useState([]) 
  const[search, setSearch] = useState("")

  useEffect( () => {
    fetch("http://localhost:8002/vinyls")
    .then(resp => resp.json())
    .then(items => {
      if (search.length > 0) {
        const filterVinyls = items.filter((item) => {
          return item.artist?.toLowerCase().includes(search.toLowerCase())
        })
        setVinyls(filterVinyls);
      } else {
        setVinyls(items);
      }
    })
  },[search]);

  const handleSearchTerm = (event) => {
    setSearch(event.target.value)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const filterVinyls = vinyls.filter((item) => {
      return item.artist?.toLowerCase().includes(search.toLowerCase())
    })
    setVinyls(filterVinyls);
  }

  function handleAddItem(newItem){
    console.log('User Cards', newItem);
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    const itemData = {
        artist: e.target[0].value,
        album: e.target[1].value,
        image: e.target[2].value,
        genre: e.target[3].value,
        price: e.target[4].value,
        releasedate: e.target[5].value,
    };

    fetch('http://localhost:8002/vinyls', {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
        },
        body:JSON.stringify(itemData),
    })
        .then((response) => response.json())
        .then((newItem) => {;
          setVinyls([...vinyls, newItem])
        });
        // clear inputs
}

  return (
    <div className="App">
      <Header
        vinyls={vinyls}
        handleSearchTerm={handleSearchTerm}
        handleSubmit={handleSubmit}
        handleAddItem={handleAddItem}
        handleFormSubmit={handleFormSubmit}
      />
      <div className="body-center">
        <div className="body--left">
          <SelectionContainerList vinyls={vinyls} />
        </div>
      </div>
      
    </div>
  );
}

export default App;
