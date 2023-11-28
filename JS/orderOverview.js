const url1 = 'http://localhost:8080/getorders';
const url2 = 'http://localhost:8080/getordersshopify';

async function fetchAnyUrl(url)
{
    const response = await fetch(url);
    if (!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}

async function fetchOrdersReverb()
{
    try
    {
        console.log("fetching url:" + url1)
        return await fetchAnyUrl(url1);
    }
    catch (error)
    {
        console.error('Error fetching orders:', error);
        return [];
    }
}

async function fetchOrdersShopify()
{
    try
    {
        console.log("fetching url:" + url2)
        return await fetchAnyUrl(url2);
    }
    catch (error)
    {
        console.error('Error fetching orders:', error);
        return [];
    }
}

function populateTable(orders)
{
    const tableContent = document.getElementById('tableContent');
    tableContent.innerHTML = ''; // Clear existing content
    orders.forEach((order) =>
    {
        const row = tableContent.insertRow();

        const orderIdCell = row.insertCell();
        orderIdCell.textContent = order.orderId;

        const orderApiIdCell = row.insertCell();
        orderApiIdCell.textContent = order.orderApiId;

        const productNameCell = row.insertCell();
        productNameCell.textContent = order.productName;

        const priceCell = row.insertCell();
        priceCell.textContent = order.price;

        const quantityCell = row.insertCell();
        quantityCell.textContent = order.quantity;

        const customerAddressCell = row.insertCell();
        customerAddressCell.textContent = order.costumerAddress ? order.costumerAddress.costumerAddressId : '';

        const vendorCell = row.insertCell();
        vendorCell.textContent = order.vendor ? order.vendor.vendorId : '';
    });
}

document.addEventListener('DOMContentLoaded', async () =>
{
    //const reverbOrders = await fetchOrdersReverb();
    const shopifyOrders = await fetchOrdersShopify();
    //populateTable(reverbOrders);
    populateTable(shopifyOrders);
    //console.log(reverbOrders);
    console.log(shopifyOrders);
});