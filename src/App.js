import './App.css';
import Search from "./components/Search"
import Pagenation from "./components/Pagenination"
import Stories from "./components/Story"




function App() {
  return (
    <div className="conatiner">
      <div className="conatiner_body">
        <Search />
        <Pagenation />
        <Stories />
      </div>
    </div>
   
  );
}

export default App;
