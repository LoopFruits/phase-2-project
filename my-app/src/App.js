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
      fetch("http://localhost:3000/vinyls")
      .then(resp => resp.json())
      .then(item => setVinyls(item))
  },[]);
  
  const filterVinyls = vinyls.filter((item) => {
    return item.artist.toLowerCase().includes(search.toLowerCase())
  })

  

  return (
    <div class="App">
        <Header handleSearch={setSearch} />
        <SelectionContainerList />
        <VinylContainer vinyls={filterVinyls} />
        <Footer />
    </div>
  );
}

export default App;
