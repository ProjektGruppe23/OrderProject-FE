import { handleResponse } from './handleResponse.js';

export async function fetchAnyUrl(url)
{
    try {
        const response = await fetch(url);
        return await handleResponse(response);
    } catch (error) {
        return await handleResponse(error);
    }
}