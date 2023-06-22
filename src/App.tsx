import Search from "./components/Search";
import Title from "./components/Title";
import "./App.css"

function App() {
  const apiKey = `?access_key=${import.meta.env.VITE_API_KEY}`;
  const apiUrl = "https://emoji-api.com/emojis/";

  
  return(
  <>
    <Title />
    <Search apiKey={apiKey} apiUrl={apiUrl}/>
  </>);
}

export default App;
