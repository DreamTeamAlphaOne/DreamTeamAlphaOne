export default function SuggestedMovie(props) {
    
    // console.log("resources in suggestedmovie", props.resources)
    
    // if (props.resources && props.resources.length === 0) {
    //     return;
    // } else {
    //     var movie = props.resources[0]
    // }
    
    return (
        <div className="m-5 bg-purple-500 border-8 border-purple-700 border-solid">
            <div id="suggestionbox">
                <div id="title" className="m-3">
                    <h2 className="text-center border-2 border-black">Movie Title</h2>        
                </div>
                <div id="image"></div>
                <div id="description" className="m-5">
                    <p>Movie Description goes here</p>
                </div>
                
            </div>

            <button onClick={()=> props.showSuggestionOrPicker()}className="border-2 border-black align-self-center">Close Suggestion</button>
            
        </div>
    )
}