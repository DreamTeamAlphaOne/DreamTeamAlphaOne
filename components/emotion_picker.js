export default function EmotionPicker() {

    return (
        <div className="grid grid-cols-5 m-5 border-2 border-red-400">
            <div>
                <p className="text-center">Happy</p>
                <img src="/emotions/happy.jpg" alt="happy"/>
            </div>
                
            <div>
                <p className="text-center">Sad</p>
                <img src="/emotions/sadness.jpeg" alt="sad" className="self-end"/>
            </div>

            <div className="border-2 border-black">
                <p className="text-center">Angry</p>
                <img src="/emotions/angry.jpg" alt="angry"/>
            </div>

            <div>
                <p className="text-center">Surprised</p>
                <img src="/emotions/surprise.jpg" alt="surprise"/>
            </div>

            <div>
                <p className="text-center">Fear</p>
                <img src="/emotions/fear.jpg" alt="fear"/>
            </div>
        </div>
    )

}