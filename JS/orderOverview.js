import {fetchAnyUrl} from "./modules/fetchAnyUrl.js";

async function fetchOrders()
{
    try
    {
        return await fetchAnyUrl("http://localhost:8080/getorders");
    }
    catch (error)
    {
        console.error('Error fetching movies:', error);
        return [];
    }
}

function populateTable(orders) {
    const table = document.getElementById('orderTable');
    orders.forEach((order) => {
        const row = table.insertRow();

        const titleCell = row.insertCell();
        titleCell.textContent = order.title;

        const idCell = row.insertCell();
        idCell.textContent = order.id;

        const startDateCell = row.insertCell();
        startDateCell.textContent = order.startDate;

        const endDateCell = row.insertCell();
        endDateCell.textContent = order.endDate;
    });
}