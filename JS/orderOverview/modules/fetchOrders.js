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
            console.log('Orders fetched successfully');
            alert("Orders fetched successfully, the site will now reload to show the updated orderlist. Click OK to continue");
        }
        else if (!response1.ok)
        {
            console.log('Failed to fetch orders from reverb');
            alert("Failed to fetch orders from reverb" + response1.status);
        }
        else if (!response2.ok)
        {
            console.log('Failed to fetch orders from shopify');
            alert("Failed to fetch orders from shopify");
        }

        return [response1, response2];

    } catch (error) {
        console.error('Error fetching orders: ', error);
        return [];
    }
}