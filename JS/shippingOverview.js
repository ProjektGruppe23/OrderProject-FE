async function fetchAndDisplayCustomerDetails() {
    const orderId = new URLSearchParams(window.location.search).get('orderId');
    if (!orderId) {
        document.getElementById('customerDetails').innerText = 'No order ID provided.';
        return;
    }

    document.getElementById('orderIdDisplay').textContent = orderId;

    try {
        const response = await fetch(`http://localhost:8080/getCustomerAddressByOrderId/${orderId}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const details = await response.json();

        const detailsDiv = document.getElementById('customerDetails');
        detailsDiv.innerHTML = `
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.costumerName}')">Copy</button> Name: <span>${details.costumerName}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.streetAddress}')">Copy</button> Address: <span>${details.streetAddress}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.postalCode}')">Copy</button> Postal Code: <span>${details.postalCode}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.city}')">Copy</button> City: <span>${details.city}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.country ? details.country.countryName : 'N/A'}')">Copy</button> Country: <span>${details.country ? details.country.countryName : 'N/A'}</span></div>
            <div class="detail"><button class="copy-btn" onclick="copyToClipboard('${details.phone}')">Copy</button> Phone: <span>${details.phone}</span></div>
        `;

    } catch (error) {
        console.error(error);
        document.getElementById('customerDetails').innerText = 'Error fetching customer details.';
    }
}

function copyToClipboard(text) {
    navigator.clipboard.writeText(text).then(() => {
        alert('Copied to clipboard: ' + text);
    }).catch(err => {
        console.error('Error in copying text: ', err);
    });
}

document.addEventListener('DOMContentLoaded', fetchAndDisplayCustomerDetails);

