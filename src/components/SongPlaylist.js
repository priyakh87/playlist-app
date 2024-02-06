import Button from "./Button"
import { useDispatch, useSelector } from "react-redux"
import { addSong, removeSong } from "../store";
import { createRandomSongs } from "../data";

function SongPlaylist(){
    const dispatch=useDispatch();
    const SongPlaylist=useSelector((state)=>{
        return state.songs
    });

    const handleAddSong=(song)=>{
        dispatch(addSong(song))
    }
    const handleRemoveSong=(song)=>{
        dispatch(removeSong(song))
    }
 
    const renderSongs=SongPlaylist.map((song,index)=>{
        return <li key={`${song} + ${index}`} className="flex justify-between border-2">
            <p className="px-2 py-2 m-1.5 text-black">{song}</p>
            <Button danger className="border-2 px-2" onClick={()=>handleRemoveSong(song)} >X</Button>
        </li>
    })

    return <div className=""> 
        <h2 className="text-2xl">SongPlaylist</h2>
        <Button secondary onClick={()=>handleAddSong(createRandomSongs())}> Add Song</Button>
        <div className="w-1/2 flex flex-col justify-center">
        <ul className="p-2">{renderSongs}</ul>
        </div>
        
    </div>
}

export default SongPlaylist