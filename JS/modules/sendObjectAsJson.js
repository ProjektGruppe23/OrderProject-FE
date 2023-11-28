import { handleResponse } from './handleResponse.js';

export async function sendObjectAsJson(url, object, httpMethod = 'POST')
{
    try
    {
        // Initialize fetch request
        const response = await fetch(url, {
            method: httpMethod,
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(object)
        });
        // Use the unified handleResponse to deal with the fetch response
        return await handleResponse(response);
    }
    catch (error)
    {
        // Use handleResponse to deal with network or other errors
        await handleResponse(error);
    }
}