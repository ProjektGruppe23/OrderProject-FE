import { totalOrders } from './modules/statistics/totalOrders.js';




document.addEventListener('DOMContentLoaded', async () =>
{
    await totalOrders();
});

function incomeByProduct()
{
    let incomeByProduct = 0;
    for (let i = 0; i < getAllData.length; i++)
    {
        incomeByProduct += getAllData[i].price;
        if(getAllData[i].productName === 'Sweater')
        {
            incomeByProduct += getAllData[i].price;
        }
    }
}