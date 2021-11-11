import EmotionPicker from './emotionpicker'
import SuggestedMovie from './suggestedmovie'
import { useState } from 'react'

export default function MainPage(props) {

    let showSuggestionBox = false

    function wasEmotionPicked() {
        showSuggestionBox = true
        console.log("Function was triggered")
        console.log(showSuggestionBox)
    }
    
    
    return (
        <main className="grid w-full grid-cols-2 gap-4 p-5">
            <div className="w-full p-5 m-5 bg-green-500 border-2 border-green-700">
                <h1 className="text-4xl text-center bg-green-300 border-green-500 border-solid border-6">Facial Recognition Feature Coming Soon!</h1>
            </div>
        
            <div className="w-full p-4 m-5">
                { showSuggestionBox ?
                <SuggestedMovie />
                :
                <EmotionPicker handleEmotionChange={props.handleEmotionChange}
                                emotionState={props.emotionState}
                                wasEmotionPicked={wasEmotionPicked}/>
                }
            </div>
        
        </main>
    )
}