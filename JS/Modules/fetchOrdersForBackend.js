import {fetchAnyUrl} from "./fetchAnyUrl.js";

export async function fetchOrdersForBackend()
{
    try
    {
        const url1 = 'http://localhost:8080/getorders';
        const url2 = 'http://localhost:8080/getordersshopify';
        console.log("fetching url:" + url1)
        console.log("fetching url:" + url2)
        alert("Orders are being processed, please wait...");
        return await fetchAnyUrl(url1, url2);
    }
    catch (error)
    {
        console.error('Error fetching orders:', error);
        return [];
    }
}