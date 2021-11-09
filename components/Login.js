import { useState } from 'react';
import { useAuth } from '../contexts/auth';

export default function Login() {
    const { login } = useAuth();
    const [formItems, setFormItems] = useState({});

    const handleChange = (event) => {
        const newFormItems = {
            ...formItems,
            [event.target.name]: event.target.value,
        };
        setFormItems(newFormItems);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        login(formItems.username, formItems.password);
    };

    return (
        <div>
        <h2 className="text-center">Please Log In To Access Our App</h2>
            <form 
                onSubmit={handleSubmit}
                className="flex w-1/2 mx-auto mt-2 bg-blue-500 border-4 border-red-700 rounded-md"
            >
                <ul className="w-full mx-auto my-auto text-center">
                    <li className="p-2 m-5 font-bold">Username:
                        <input 
                            name="username"
                            type="text" 
                            className="w-4/5 p-2 border-2 border-solid border-black-300"
                            placeholder="Enter Username"
                            onChange={handleChange}
                            className="ml-5 text-center border-2 border-black"
                        />
                    </li>
                    
                    <li className="p-2 m-5 font-bold">Password: 
                        <input 
                            name="password"
                            type="password" 
                            className="w-4/5 p-2 border-2 border-solid border-black-300" 
                            placeholder="Enter Password"
                            onChange={handleChange}
                            className="ml-5 text-center border-2 border-black"
                        />
                    </li>
                    
                    <li>
                        <button className="w-4/5 p-2 m-5 font-bold bg-green-500 border-4 border-yellow-300">SIGN IN</button>
                    </li>
                </ul>
            </form>
        </div>
    );
}