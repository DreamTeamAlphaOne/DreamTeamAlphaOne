import axios from 'axios'
import useSWR from 'swr'
import { useState } from 'react'

export const apiUrl = process.env.NEXT_PUBLIC_RESOURCE_URL;
import { useAuth } from '../contexts/auth'

export default function useResource() {

    const { tokens, logout } = useAuth()

    const [emotionState, setEmotionState] = useState('happy');

    const [buttonState, setButtonState] = useState(false);

    const { data, error, mutate } = useSWR([apiUrl, tokens], fetchResource);

    function handleEmotionChange(event, emotion_selected) {
        event.preventDefault();
        setEmotionState(emotion_selected);
        setButtonState(true)
    }

    function showSuggestionOrPicker() {
        setButtonState(false)
    }

    async function fetchResource(url) {

        if (!tokens) {
            return;
        }

        try {
            const response = await axios.get(url, config());

            return response.data;

        } catch (error) {
            handleError(error);
        }
    }

    async function createResource(info) {

        try {
            await axios.post(apiUrl, info, config());
            mutate(); 
        } catch (error) {
            handleError(error);
        }
    }

    async function deleteResource(id) {

        try {
            const url = apiUrl + id;
            await axios.delete(url, config());
            mutate();
        } catch (error) {
            handleError(error);
        }
    }

    function config() {
        return {
            headers: {
                'Authorization': 'Bearer ' + tokens.access
            },
            params : {
                emotion: emotionState
            },
        }
    }

    function handleError(error) {
        console.error(error);
        logout();
    }

    return {
        resources: data,
        error,
        loading: tokens && !error && !data,
        createResource,
        deleteResource,
        handleEmotionChange,
        setEmotionState,
        emotionState,
        buttonState, setButtonState,
        showSuggestionOrPicker,
    }
}
