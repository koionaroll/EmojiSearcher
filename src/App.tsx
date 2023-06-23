import Search from "./components/Search";
import "./App.css"

function App() {
  const apiUrl = import.meta.env.VITE_API_URL // ------------ REFACTORING HERE 
  
  return(
  <>
    <h1>7tv Emote Searcher</h1>
    <p style={{paddingBottom:"2rem"}}>powered by <a href="https://github.com/koionaroll/7tvAPI">custom 7tv scraped api</a></p>
    <Search apiUrl={apiUrl}/>
    <p style={{position:"absolute", bottom:"0"}}>Developed by <a href="https://github.com/koionaroll">Khoi Tran</a></p>
  </>);
}

export default App;
