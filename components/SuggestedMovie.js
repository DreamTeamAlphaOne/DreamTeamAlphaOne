export default function SuggestedMovie(props) {
    
    const movieData = props.resources[0]
    console.log("movieData", movieData)
    
    return (
        <div className="m-5 bg-purple-500 border-8 border-purple-700 border-solid">
            
            <div id="suggestionbox">
                <div id="title" className="m-3">
                    <h2 className="text-center border-2 border-black">{movieData ? movieData.title : "Movie Title"}</h2>        
                </div>
                <div id="image"></div>
                <div id="description" className="m-5">
                    <p>{movieData ? movieData.description : "Movie Description Here"}</p>
                </div>
                
            </div>
            <div className="flex flex-auto justify-content-center">
                <button onClick={()=> props.showSuggestionOrPicker()}className="border-2 border-black">Close Suggestion</button>
            </div>
        </div>
    )
}