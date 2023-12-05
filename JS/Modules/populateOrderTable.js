import { deleteOrder } from "./deleteOrder.js";

export function populateTable(orders)
{
    const tableContent = document.getElementById('tableContent');
    tableContent.innerHTML = ''; // Clear existing content
    orders.forEach((order) =>
    {
        const row = tableContent.insertRow();

        const productNameCell = row.insertCell();
        productNameCell.textContent = order.productName;

        // const shippingCell = row.insertCell();
        // const shippingButton = document.createElement('button');
        // shippingButton.textContent = 'Shipping';
        // shippingButton.id = 'btnShipping';
        // shippingButton.addEventListener('click', () => {
        //     window.location.href = `shippingOverview.html?orderId=${order.orderId}`;
        // });
        // shippingCell.appendChild(shippingButton);

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



async function fetchAndDisplayShippingDetails(orderId, dropdownElement) {
    try {
        const response = await fetch(`http://localhost:8080/getCustomerAddressByOrderId/${orderId}`);
        const details = await response.json();
        dropdownElement.innerHTML = `
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.costumerName}')">Copy</button> Name: <span>${details.costumerName}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.streetAddress}')">Copy</button> Address: <span>${details.streetAddress}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.postalCode}')">Copy</button> Postal Code: <span>${details.postalCode}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.city}')">Copy</button> City: <span>${details.city}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.country.countryName}')">Copy</button> Country: <span>${details.country.countryName}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.phone}')">Copy</button> Phone: <span>${details.phone}</span></div>
        `;
        dropdownElement.classList.toggle('hidden'); // Show/hide the dropdown
    } catch (error) {
        console.error(error);
    }
}

