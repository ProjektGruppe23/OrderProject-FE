export async function fetchOrders(input1, input2) {
    try {
        const url1 = input1;
        const url2 = input2;

        console.log("fetching url:" + url1);
        console.log("fetching url:" + url2);

        alert("Orders are being processed, please wait... Click OK to continue");

        const response1 = await fetch(url1);
        const response2 = await fetch(url2);

        if(response1.ok && response2.ok)
        {
            console.log('Orders fetched \n successfully');
        }
        else if (!response1.ok || !response2.ok)
        {
            console.log("Failed to fetch orders" + "reverb info: " + response1.status + "; Shopify info: " + response2.status);
            alert("Failed to fetch orders. \n" + "reverb info: " + response1.status + "; Shopify info: " + response2.status);
        }

        return [response1, response2];

    } catch (error) {
        console.error('Error fetching orders: ', error);
        return [];
    }
}