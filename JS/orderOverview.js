import { fetchAnyUrl } from './modules/fetchAnyUrl.js';
import { fetchOrdersForBackend } from './modules/fetchOrdersForBackend.js';
import { populateTable } from './modules/populateOrderTable.js';

const url3= 'http://localhost:8080/getordersfromdb';

const addOrdersButton = document.getElementById("addOrdersButton");

addOrdersButton.addEventListener("click", async () => {
    try {
        await fetchOrdersForBackend();
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