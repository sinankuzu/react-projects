import "bootstrap/dist/css/bootstrap.min.css";
import Cards from "./cards/MyCards";
import NavBar from "./nav/NavBar";
import data from "./data"


function App() {
  return <div>
   <NavBar/>
   <Cards dataa = {data}/>
  </div>;
}

export default App;
