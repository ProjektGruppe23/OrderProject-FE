import { fetchAnyUrl } from './modules/fetchAnyUrl.js';
import { fetchOrdersForBackend } from './modules/fetchOrdersForBackend.js';
import { populateTable } from './modules/populateOrderTable.js';

const url3= 'http://localhost:8080/getordersfromdb';

document.addEventListener('DOMContentLoaded', async () =>
{
    await fetchOrdersForBackend();
    const dbOrders = await fetchAnyUrl(url3);
    console.log(dbOrders);
    populateTable(dbOrders);
});