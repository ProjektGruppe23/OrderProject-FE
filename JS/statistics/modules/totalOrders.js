import {analyticsData} from './fetchAnalyticsData.js';

export async function totalOrders()
{
    try
    {
        const totalOrders = analyticsData.length;

        document.getElementById('total-orders-number').textContent = totalOrders.toString();
    }
    catch (error)
    {
        console.error('Error fetching data:', error);
        document.getElementById('total-orders-number').textContent = 'Error';
    }
}
