export async function fetchOrdersForBackend() {
    try {
        const url1 = 'http://localhost:8080/getorders';
        const url2 = 'http://localhost:8080/getordersshopify';

        console.log("fetching url:" + url1);
        console.log("fetching url:" + url2);

        alert("Orders are being processed, please wait...");

        const response1 = await fetch(url1);
        const response2 = await fetch(url2);

        if (!response1.ok || !response2.ok) {
            throw new Error('Failed to fetch orders');
        }

        const data1 = await response1.json();
        const data2 = await response2.json();

        // Combine or process data from both URLs as needed
        const combinedData = [...data1, ...data2];

        return combinedData;
    } catch (error) {
        console.error('Error fetching orders:', error);
        return [];
    }
}
