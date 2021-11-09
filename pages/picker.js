export default function Picker() {
    return (
        <div>
            <div className="flex flex-col items-center justify-center flex-1 w-full p-4 px-20 text-center">
                <div className="grid w-full grid-cols-5 gap-2">

                    <div className="p-4 bg-yellow-300 border-4 border-yellow-500">
                        <img className="border-4 border-yellow-500 rounded-full" src="/emotions/happy.jpg" alt="happy" />
                        <div>
                            <p className="m-4 font-mono font-black">Happy</p>
                        </div>
                    </div>

                    <div className="p-4 bg-blue-300 border-4 border-blue-500">
                        <img className="border-4 border-blue-500 rounded-full" src="/emotions/sad.jpg" alt="sad" />
                        <div>
                            <p className="m-4 font-mono font-black">Sad</p>
                        </div>
                    </div>

                    <div className="p-4 bg-red-500 border-4 border-red-700">
                        <img className="border-4 border-red-500 rounded-full" src="/emotions/angry.jpg" alt="angry" />
                        <div>
                            <p className="m-4 font-mono font-black">Angry</p>
                        </div>
                    </div>

                    <div className="p-4 bg-purple-300 border-4 border-purple-500">
                        <img className="border-4 border-purple-500 rounded-full" src="/emotions/fear.jpg" alt="fear" />
                        <div>
                            <p className="m-4 font-mono font-black">Fear</p>
                        </div>
                    </div>

                    <div className="p-4 bg-pink-300 border-4 border-pink-500">
                        <img className="border-4 border-pink-500 rounded-full" src="/emotions/surprise.jpg" alt="surprise" />
                        <div>
                            <p className="m-4 font-mono font-black">Surprise</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}