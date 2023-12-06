import { totalOrders } from './modules/totalOrders.js';


document.addEventListener('DOMContentLoaded',
    async () =>
    {
        const totalOrdersNumber = await totalOrders();
        console.log(totalOrdersNumber);
    });