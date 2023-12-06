import { copyToClipboard } from './copyToClipboard.js';

export async function fetchAndDisplayShippingDetails(orderId, dropdownElement) {
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

