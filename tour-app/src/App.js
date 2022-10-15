
import './App.css';
import NavBar from './components/NavBar';
import Cards from './components/Cards'
import { data } from "./data";
import Header from './components/Header';

function App() {
  console.log(data)
  return (
    <div>
      <NavBar />
      <Header />
      <Cards myData={data} />
    </div>
  );
}

export default App;
