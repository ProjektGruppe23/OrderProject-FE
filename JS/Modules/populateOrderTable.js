import { deleteOrder } from "./deleteOrder.js";

export function populateTable(orders)
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
        vendorCell.textContent = order.vendor ? order.vendor.vendorName : '';

        const actionCell = row.insertCell();
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.id = 'btnDeleteOrder';

        deleteButton.addEventListener('click', async () => {
            const orderIdToDelete = order.orderId;
            await deleteOrder(orderIdToDelete);
            window.location.reload();
        });

        actionCell.appendChild(deleteButton);
    });
}