import { addMovie, removeMovie } from "../store"
import Button from "./Button"
import { createRandomMovies } from "../data"
import { useDispatch,useSelector } from "react-redux"


function MoviePlaylist(){
   const dispatch=useDispatch()
    const moviesList=useSelector((state)=>{
        return state.movies
    })
    const handleAddMovie=(movie)=>{
        // const action=addMovie(movie);
        // dispatch(action)
       dispatch(addMovie(movie))
    }

    const handleRemoveMovie=(movie)=>{
        // const action=removeMovie(movie);
        // console.log(action,movie);
        dispatch(removeMovie(movie))
    }

    


const renderMovies=moviesList.map((movie,index)=>{
    return <li  key={index} className="flex justify-between border-2">
           <p className="px-2 py-2 m-1.5 text-black">{movie}</p> 
            <Button className="px-2" onClick={()=>handleRemoveMovie(movie)} danger >X</Button>
    </li>
})


return <div className=" ">
    
        <h2 className="text-2xl"> MoviePlaylist</h2> 
        
        <Button onClick={()=>handleAddMovie(createRandomMovies())} primary>Add Movie</Button>
        <div className="w-1/2 flex flex-col justify-center">
        <ul className="p-2">{renderMovies}</ul>
        </div>
    </div>
}
export default MoviePlaylist