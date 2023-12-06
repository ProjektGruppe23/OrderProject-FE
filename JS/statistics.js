import { totalOrders } from './modules/statistics/totalOrders.js';


document.addEventListener('DOMContentLoaded',
    async () =>
    {
        const totalOrdersNumber = await totalOrders();
        console.log(totalOrdersNumber);
    });