import { useState } from 'react'


export default function EmotionPicker(props) {

    // function handleEmotionChange(button_emotion) {
    //     var emotion_picked = button_emotion
    //     props.setEmotionState(emotion_picked)
    //     console.log(emotion_picked)
    // }

    // function handleEmotionChange(button_emotion) {
    //     const [emotionState, setEmotionState] = useState();
    //     emotionPicked = button_emotion
    //     setEmotionState(emotionPicked)
    //     console.log("newest emotion state", emotionState)
    // }

    function handleEmotionSubmit(event) {
        event.preventDefault();
        console.log(event)    
        }
    
    return (
        <div>
            <h2 className="p-4 text-center">Choose an emotion to suggest a movie!</h2>
            <div className="flex flex-col items-center justify-center flex-1 w-full text-center">
                <div className="grid w-full grid-cols-5 gap-2">

                    <form target="happy_form" id="happy_form" onSubmit={handleEmotionSubmit} className="p-2 bg-yellow-300 border-4 border-yellow-500 ">
                        <img className="mb-2 border-4 border-yellow-500 rounded-full" src="/emotions/happy.jpg" alt="happy" />
                        <button onClick={() => props.handleEmotionChange('happy')} className="p-1 m-auto font-mono font-medium bg-yellow-400 border-2 border-yellow-500 rounded-md hover:bg-yellow-500">Happy</button>
                    </form>

                    <form onSubmit={handleEmotionSubmit} className="p-2 bg-blue-300 border-4 border-blue-500">
                        <img className="mb-2 border-4 border-blue-500 rounded-full" src="/emotions/sad.jpg" alt="sad" />
                        <button onClick={() => props.handleEmotionChange('sad')} className="p-1 m-auto font-mono font-medium bg-blue-400 border-2 border-blue-500 rounded-md hover:bg-blue-500">Sad</button>
                    </form>

                    <form onSubmit={handleEmotionSubmit} className="p-2 bg-red-500 border-4 border-red-700">
                        <img className="mb-2 border-4 border-red-700 rounded-full" src="/emotions/angry.jpg" alt="angry" />
                        <button onClick={() => props.handleEmotionChange('angry')} className="p-1 m-auto font-mono font-medium bg-red-600 border-2 border-red-700 rounded-md hover:bg-red-700">Angry</button>
                    </form>

                    <form onSubmit={handleEmotionSubmit} className="p-2 bg-purple-300 border-4 border-purple-500">
                        <img className="mb-2 border-4 border-purple-500 rounded-full" src="/emotions/fear.jpg" alt="fear" />
                        <button onClick={() => props.handleEmotionChange('fear')} className="p-1 m-auto font-mono font-medium bg-purple-400 border-2 border-purple-300 rounded-md hover:bg-purple-500">Fear</button>
                    </form>
                    
                    <form onSubmit={handleEmotionSubmit} className="p-2 bg-pink-300 border-4 border-pink-500">
                        <img className="mb-2 border-4 border-pink-500 rounded-full" src="/emotions/surprise.jpg" alt="surprise" />
                        <button onClick={() => props.handleEmotionChange('surprised')} className="p-1 m-auto font-mono font-medium bg-pink-400 border-2 border-pink-500 rounded-md hover:bg-pink-500">Surprise</button>
                    </form>

                </div>
            </div>

            {/* <h2>You have selected: {emotionState}</h2> */}
        </div>
    )

}