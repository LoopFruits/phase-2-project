// import logo from './logo.svg';
import './App.css';
import React, {useEffect, useState} from 'react';
import Header from "./components/Header";
import SelectionContainerList from './components/SelectionContainerList';
import VinylContainer from './components/VinylContainer';
import Footer from "./components/Footer";
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

  return (
    <div className="App">
      <Header
        vinyls={vinyls}
        handleSearchTerm={handleSearchTerm}
        handleSubmit={handleSubmit}
      />
      <div className="body-center">
        <div className="body--left">
          <SelectionContainerList />
        </div>
        <div className="body--right">
          <VinylContainer vinyls={vinyls} />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
