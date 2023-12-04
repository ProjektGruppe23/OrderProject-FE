import { fetchAnyUrl } from './modules/fetchAnyUrl.js';
import { fetchOrders } from './modules/fetchOrders.js';
import { populateTable } from './Modules/orderOverview/populateOrderTable.js';

const url1= 'http://localhost:8080/getorders';
const url2= 'http://localhost:8080/getordersshopify';
const url3= 'http://localhost:8080/getordersfromdb';

const addOrdersButton = document.getElementById("addOrdersButton");

addOrdersButton.addEventListener("click", async () => {
    try {
        await fetchOrders(url1, url2);
        window.location.reload();
    } catch (error) {
        console.error("Error fetching orders:", error);
    }
});

document.addEventListener('DOMContentLoaded', async () =>
{
    const dbOrders = await fetchAnyUrl(url3);
    console.log(dbOrders);
    populateTable(dbOrders);
});