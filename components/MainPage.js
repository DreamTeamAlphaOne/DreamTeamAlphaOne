import EmotionPicker from './EmotionPicker'
import SuggestedMovie from './SuggestedMovie'

export default function MainPage(props) { 
    
    return (
        <main className="grid w-full grid-cols-3 gap-2 p-2">
            <div className="w-full p-5 m-5 bg-green-500 border-2 border-green-700">
                <h1 className="text-4xl text-center bg-green-300 border-green-500 border-solid border-6">Facial Recognition Feature Coming Soon!</h1>
            </div>
        
            <div className="w-full p-4 m-5">
                <EmotionPicker handleEmotionChange={props.handleEmotionChange}
                emotionState={props.emotionState}/>
            </div>

            <div className="">
                <SuggestedMovie resources={props.resources}/>
            </div>
        
        </main>
    )
}