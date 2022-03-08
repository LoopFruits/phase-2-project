// import logo from './logo.svg';
import './App.css';
import Header from "./components/Header";
import SelectionContainerList from './components/SelectionContainerList';
import VinylContainer from './components/VinylContainer';
// import Footer from "./components/Footer";
// import Search from "./components/Search";

function App() {
  return (
    <div className="App">
        <Header />
        <VinylContainer />
        <SelectionContainerList />
    </div>
  );
}

export default App;
