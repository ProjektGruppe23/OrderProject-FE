import { copyToClipboard } from './copyToClipboard.js';
window.copyToClipboard = copyToClipboard;
import { deleteOrder } from "./deleteOrder.js";
import { fetchAndDisplayShippingDetails } from "./fetchShippingDetails.js";

export function populateTable(orders)
{
    const tableContent = document.getElementById('tableContent');
    tableContent.innerHTML = ''; // Clear existing content

    orders.forEach((order) =>
    {
        const row = tableContent.insertRow();

        const dateCell = row.insertCell();
        dateCell.textContent = order.date ? order.date.date : "";

        const orderNumberCell = row.insertCell();
        orderNumberCell.textContent = order.costumerAddress ? order.costumerAddress.costumerAddressId : "";

        const productNameCell = row.insertCell();
        productNameCell.textContent = order.productName;

        const shippingCell = row.insertCell();
        const shippingButton = document.createElement('button');
        shippingButton.textContent = 'Shipping';
        shippingButton.id = 'btnShipping';
        shippingButton.classList.add('btnShipping'); // use class instead of id for multiple elements
        shippingCell.appendChild(shippingButton);

        const shippingDetailsDropdown = document.createElement('div');
        shippingDetailsDropdown.classList.add('shipping-details-dropdown', 'hidden');
        shippingDetailsDropdown.id = `shippingDetails${order.orderId}`; // unique id for each dropdown
        row.insertAdjacentElement('afterend', shippingDetailsDropdown); // insert the dropdown after the row

        shippingButton.addEventListener('click', () => {
            fetchAndDisplayShippingDetails(order.orderId, shippingDetailsDropdown);
        });

        const priceCell = row.insertCell();
        priceCell.textContent = order.price;

        const quantityCell = row.insertCell();
        quantityCell.textContent = order.quantity;

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





