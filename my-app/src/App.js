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
  // const[search, setSearch] = useState("")  

  useEffect( () => {
    fetch("http://localhost:8002/vinyls")
    .then(resp => resp.json())
    .then(item => setVinyls(item))
  },[]);

//   const filterVinyls = vinyls.filter((item) => {
//     return item.artist.toLowerCase().includes(search.toLowerCase())
// })
  

  return (
    <div className="App">
      <Header vinyls={vinyls} />
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
