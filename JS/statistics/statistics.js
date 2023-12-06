import { totalOrders } from './modules/totalOrders.js';
import { populateTable } from "./modules/populateTableOrderCount.js";
import { displayBarChart } from "./modules/ordersByCountry.js"
import { displayDonutChart } from "./modules/ordersByVendor.js"

/*async function getAnalyticsData()
{
    Her putter du alle metoderne ind fra de andre klasser der har brug for dataen.
}*/

document.addEventListener('DOMContentLoaded',
    async () =>
    {
        const totalOrdersNumber = await totalOrders();
        console.log(totalOrdersNumber);

        await displayDonutChart();

        await displayBarChart();

        const loadTable = await populateTable();
       console.log(loadTable);
    });