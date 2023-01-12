import { NavBar }from "./component/NavBar";
import { List } from "./component/List";
import { Sections } from "./component/Sections"



import "./App.css";


function App() {

  return (
    <div className="App">
      
      <header>
        <NavBar />
      </header>
      <List/>
      <main>
        
        <Sections />
      </main>

      
    </div>
  );
}

export default App;
