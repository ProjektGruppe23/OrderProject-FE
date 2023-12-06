import { fetchAnalyticsData } from "./fetchAnalyticsData.js";

function prepareBarChartData(data) {
    const countries = new Set();
    const reverbData = {};
    const shopifyData = {};

    // Initialize data structure for counts and total prices
    data.forEach(item => {
        countries.add(item.countryName);
        if (!reverbData[item.countryName]) {
            reverbData[item.countryName] = { count: 0, totalPrice: 0 };
        }
        if (!shopifyData[item.countryName]) {
            shopifyData[item.countryName] = { count: 0, totalPrice: 0 };
        }
    });

    // Process data
    data.forEach(item => {
        if (item.vendorName === 'Reverb') {
            reverbData[item.countryName].count += 1;
            reverbData[item.countryName].totalPrice += item.price; // Aggregate price
        } else if (item.vendorName === 'Shopify') {
            shopifyData[item.countryName].count += 1;
            shopifyData[item.countryName].totalPrice += item.price; // Aggregate price
        }
    });

    // Prepare datasets
    const datasets = {
        reverb: Array.from(countries).map(countryName => reverbData[countryName].count),
        shopify: Array.from(countries).map(countryName => shopifyData[countryName].count),
        reverbPrices: Array.from(countries).map(countryName => reverbData[countryName].totalPrice),
        shopifyPrices: Array.from(countries).map(countryName => shopifyData[countryName].totalPrice)
    };

    return {
        labels: Array.from(countries),
        datasets: [
            {
                label: 'Reverb - Orders',
                data: datasets.reverb,
                backgroundColor: 'rgba(54, 162, 235, 0.5)',
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1,
                yAxisID: 'y-axis-orders'
            },
            {
                label: 'Shopify - Orders',
                data: datasets.shopify,
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
                borderColor: 'rgba(255, 99, 132, 1)',
                borderWidth: 1,
                yAxisID: 'y-axis-orders'
            },
            {
                label: 'Reverb - Total Price',
                data: datasets.reverbPrices,
                backgroundColor: 'rgba(75, 192, 192, 0.5)',
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 1,
                yAxisID: 'y-axis-prices'
            },
            {
                label: 'Shopify - Total Price',
                data: datasets.shopifyPrices,
                backgroundColor: 'rgba(153, 102, 255, 0.5)',
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 1,
                yAxisID: 'y-axis-prices'
            }
        ]
    };
}

function renderBarChart(data) {
    const ctx = document.getElementById('myChart').getContext('2d');
    new Chart(ctx, {
        type: 'bar',
        data: data,
        options: {
            scales: {
                'y-axis-orders': {
                    type: 'linear',
                    position: 'left',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Number of Orders'
                    }
                },
                'y-axis-prices': {
                    type: 'linear',
                    position: 'right',
                    beginAtZero: true,
                    title: {
                        display: true,
                        text: 'Total Price'
                    },
                    grid: {
                        drawOnChartArea: false
                    }
                }
            }
        }
    });
}

export async function displayBarChart() {
    const rawData = await fetchAnalyticsData();
    const chartData = prepareBarChartData(rawData);
    renderBarChart(chartData);
}