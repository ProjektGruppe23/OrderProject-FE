async function fetchCustomerDetails(orderId) {
    const response = await fetch(`http://localhost:8080/getCustomerAddressByOrderId/${orderId}`);
    if (!response.ok) {
        throw new Error('Network response was not ok');
    }
    return response.json();
}

function displayCustomerDetails(details) {
    const detailsDiv = document.getElementById('customerDetails');
    detailsDiv.innerHTML = `
        ${createDetailHTML('Name', details.costumerName)}
        ${createDetailHTML('Address', details.streetAddress)}
        ${createDetailHTML('Postal Code', details.postalCode)}
        ${createDetailHTML('City', details.city)}
        ${createDetailHTML('Country', details.country ? details.country.countryName : 'N/A')}
        ${createDetailHTML('Phone', details.phone)}
        <!-- Repeat for other details -->
    `;
}

function createDetailHTML(label, value) {
    return `
        <div class="detail">
            <button class="copy-btn" onclick="copyToClipboard(this)">Copy</button>
            <span class="detail-label">${label}:</span>
            <span>${value}</span>
        </div>
    `;
}

function copyToClipboard(btn) {
    const text = btn.nextElementSibling.nextElementSibling.textContent;
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', async () => {
    const urlParams = new URLSearchParams(window.location.search);
    const orderId = urlParams.get('orderId');
    if (orderId) {
        try {
            const customerDetails = await fetchCustomerDetails(orderId);
            displayCustomerDetails(customerDetails);
        } catch (error) {
            console.error(error);
            document.getElementById('customerDetails').innerText = 'Customer details not found.';
        }
    }
});
