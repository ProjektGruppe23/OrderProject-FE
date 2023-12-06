import { fetchAnalyticsData } from './fetchAnalyticsData.js';

export async function totalOrders()
{
    try
    {
        const data = await fetchAnalyticsData();
        const totalOrders = data.length;

        document.getElementById('total-orders-number').textContent = totalOrders.toString();
    }
    catch (error)
    {
        console.error('Error fetching data:', error);
        document.getElementById('total-orders-number').textContent = 'Error';
    }
}
