import {fetchOrders} from "../fetchOrders";

const url1= 'http://localhost:8080/getordersfromdb';
const url2= 'http://localhost:8080/getArchivedOrders';

export async function totalOrders()
{
    const getAllData = await fetchOrders(url1, url2);
    console.log(getAllData);
    let totalOrders = 0;
    for (let i = 0; i < getAllData.length; i++)
    {
        totalOrders++;
    }
    return totalOrders;
}