export async function fetchOrdersForBackend() {
    try {
        const url1 = 'http://localhost:8080/getorders';
        const url2 = 'http://localhost:8080/getordersshopify';

        console.log("fetching url:" + url1);
        console.log("fetching url:" + url2);

        alert("Orders are being processed, please wait...");

        const response1 = await fetch(url1);
        const response2 = await fetch(url2);

        if(response1.ok && response2.ok)
        {
            alert("Orders added successfully!");

        }
        else if (!response1.ok)
        {
            console.log('Failed to fetch orders from reverb');
        }
        else if (!response2.ok)
        {
            console.log('Failed to fetch orders from shopify');
        }

        return [response1, response2];

    } catch (error) {
        console.error('Error fetching orders: ', error);
        return [];
    }
}
