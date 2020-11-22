import "./App.css";
import MapFrame from "./components/map-frame/map-frame.component";
import SiteMast from "./components/site-mast/site-mast.component";


function App() {
  return (
    <div className="main-container">



      <h1>welcome to de islanddd</h1>
      you can access your api vars via environment variables.

      <SiteMast />
      <MapFrame />
    </div>
  );
}

export default App;
