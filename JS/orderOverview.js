import { fetchAnyUrl } from './modules/fetchAnyUrl.js';
import { fetchOrdersForBackend } from './modules/fetchOrdersForBackend.js';

const url3= 'http://localhost:8080/getordersfromdb';

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
    await fetchOrdersForBackend();
    const dbOrders = await fetchAnyUrl(url3);
    populateTable(dbOrders);
    console.log(dbOrders);
});