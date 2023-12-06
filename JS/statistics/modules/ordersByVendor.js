import {analyticsData} from "./fetchAnalyticsData.js";

function prepareDonutChartData(data)
{
    const vendorData = {
        Reverb: {count: 0, totalPrice: 0},
        Shopify: {count: 0, totalPrice: 0}
    };

    // Calculate the total orders and total prices for each vendor
    data.forEach(item =>
    {
        console.log(data.slice(0, 5)); // Log the first 5 items to check their structure
        if (item.vendorName === 'Reverb')
        {
            vendorData.Reverb.count += 1;
            vendorData.Reverb.totalPrice += item.price; // Aggregate price
        }
        else if (item.vendorName === 'Shopify')
        {
            vendorData.Shopify.count += 1;
            vendorData.Shopify.totalPrice += item.price; // Aggregate price
        }
    });

    return {
        labels: Object.keys(vendorData),
        datasets: [
            {
                label: 'Order Count',
                data: Object.values(vendorData).map(vendor => vendor.count),
                backgroundColor: [
                    'rgba(54, 162, 235, 0.5)',
                    'rgba(255, 99, 132, 0.5)'
                ],
                hoverOffset: 4
            },
            {
                label: 'Total Price',
                data: Object.values(vendorData).map(vendor => vendor.totalPrice),
                backgroundColor: [
                    'rgba(75, 192, 192, 0.5)',
                    'rgba(153, 102, 255, 0.5)'
                ],
                hoverOffset: 4
            }
        ]
    };
}

function renderDonutChart(data)
{
    const ctx = document.getElementById('vendorDonutChart').getContext('2d');
    new Chart(ctx, {
        type: 'doughnut',
        data: data,
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function (context)
                        {
                            const labelPart = context.dataset.label || '';
                            let label = labelPart + ': ';

                            // Check if the current dataset is for price
                            if (labelPart === 'Total Price')
                            {
                                const priceValue = context.raw; // Get the raw value for price
                                if (priceValue !== undefined && priceValue !== null)
                                {
                                    label += '$' + priceValue.toFixed(2); // Format as a currency with two decimal places
                                }
                            }
                            else
                            {
                                // For the 'Order Count' dataset, just show the count
                                label += context.raw;
                            }
                            return label;
                        }
                    }
                }
            }
        }
    });
}

export async function displayDonutChart()
{
    const donutChartData = prepareDonutChartData(analyticsData);
    renderDonutChart(donutChartData);
}