export default function MovieSuggestion(props) {
    
    console.log("resources in suggestedmovie", props.resources)
    
    return (
        <div className="bg-purple-500 border-8 border-purple-700 border-solid">
            <h2>Suggested movie</h2>
            <p>{movie.title}</p>
            <p>{movie.description}</p>
            <p></p>
            
        </div>
    )
}