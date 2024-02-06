import { useDispatch } from "react-redux";
import Button from "./components/Button";
import MoviePlaylist from "./components/MoviePlaylist";
import SongPlaylist from "./components/SongPlaylist";
import { reset } from "./store/index";
 
function App(){
  const dispatch=useDispatch();
  const handleReset=()=>{
   dispatch(reset());
  }
  return <div className="app">
    <h1 className="text-3xl font-bold underline">
    <Button primary className="p-2" onClick={handleReset}>Reset Lists</Button>
  </h1>
    <MoviePlaylist />
    <hr/>
    <SongPlaylist/>
  </div>
}


export default App