import {analyticsData} from "./fetchAnalyticsData.js";

export async function populateTable()
{
    const orders = analyticsData;
    const details = {};  // Object to store count and income

    // Process each order
    orders.forEach(order =>
    {
        const key = JSON.stringify({productName: order.productName, vendorName: order.vendorName});
        if (!details[key])
        {
            details[key] = {count: 0, income: 0};
        }
        details[key].count += 1;
        details[key].income += order.price;  // Sum up the income
    });

    const tableContent = document.getElementById('tableContent');

    // Clear existing table content
    tableContent.innerHTML = '';

    // Populate the table with new data
    Object.keys(details).forEach(key =>
    {
        const {productName, vendorName} = JSON.parse(key);
        const {count, income} = details[key];

        const row = tableContent.insertRow();
        row.insertCell().textContent = productName;
        row.insertCell().textContent = count;
        row.insertCell().textContent = vendorName;
        row.insertCell().textContent = `$${income.toFixed(2)}`;  // Format income as currency
    });
}