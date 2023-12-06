import { fetchAnalyticsData } from './fetchAnalyticsData.js';

export async function totalOrders()
{
    const url1 = "http://localhost:8080/getinfotoanalyze";

    try
    {
        const data = await fetchAnalyticsData();
        return data.length; // Returns the number of items in the array
    }
    catch (error)
    {
        console.error('Error fetching data:', error);
        return null;
    }
}