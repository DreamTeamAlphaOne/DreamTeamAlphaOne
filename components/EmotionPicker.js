import { useState } from 'react'


export default function EmotionPicker(props) {
    
    return (
        <div>
            <h2 className="m-4 text-xl text-center bg-blue-300 border-4 border-blue-500">Choose an emotion to suggest a movie</h2>
            <div className="flex flex-col items-center justify-center flex-1 w-full text-center">
                <div className="grid w-full grid-cols-5 gap-2">

                    <form onSubmit={props.wasEmotionPicked()} className="p-2 bg-yellow-300 border-4 border-yellow-500 ">
                        <img className="mb-2 border-4 border-yellow-500 rounded-full" src="/emotions/happy.jpg" alt="happy" />
                        <button onClick={(event) => props.handleEmotionChange(event, 'happy')} className="p-1 m-auto font-mono font-medium bg-yellow-400 border-2 border-yellow-500 rounded-md hover:bg-yellow-500">Happy</button>
                    </form>

                    <form onSubmit={() => props.wasEmotionPicked()} className="p-2 bg-blue-300 border-4 border-blue-500">
                        <img className="mb-2 border-4 border-blue-500 rounded-full" src="/emotions/sad.jpg" alt="sad" />
                        <button onClick={(event) => props.handleEmotionChange(event, 'sad')} className="p-1 m-auto font-mono font-medium bg-blue-400 border-2 border-blue-500 rounded-md hover:bg-blue-500">Sad</button>
                    </form>

                    <form onSubmit={props.wasEmotionPicked()} className="p-2 bg-red-500 border-4 border-red-700">
                        <img className="mb-2 border-4 border-red-700 rounded-full" src="/emotions/angry.jpg" alt="angry" />
                        <button onClick={(event) => props.handleEmotionChange(event, 'angry')} className="p-1 m-auto font-mono font-medium bg-red-600 border-2 border-red-700 rounded-md hover:bg-red-700">Angry</button>
                    </form>

                    <form onSubmit={props.wasEmotionPicked()} className="p-2 bg-purple-300 border-4 border-purple-500">
                        <img className="mb-2 border-4 border-purple-500 rounded-full" src="/emotions/fear.jpg" alt="fear" />
                        <button onClick={(event) => props.handleEmotionChange(event, 'fear')} className="p-1 m-auto font-mono font-medium bg-purple-400 border-2 border-purple-300 rounded-md hover:bg-purple-500">Fear</button>
                    </form>
                    
                    <form onSubmit={props.wasEmotionPicked()} className="p-2 bg-pink-300 border-4 border-pink-500">
                        <img className="mb-2 border-4 border-pink-500 rounded-full" src="/emotions/surprise.jpg" alt="surprise" />
                        <button onClick={(event) => props.handleEmotionChange(event, 'surprise')} className="p-1 m-auto font-mono font-medium bg-pink-400 border-2 border-pink-500 rounded-md hover:bg-pink-500">Surprise</button>
                    </form>

                </div>
            </div>
            <h2 className="m-4 text-center bg-yellow-300 border-4 border-yellow-500">You have selected {props.emotionState}</h2>
        </div>
    )

}