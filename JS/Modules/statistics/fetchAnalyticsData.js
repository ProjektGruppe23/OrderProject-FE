export async function fetchAnalyticsData()
{
    const url = 'http://localhost:8080/getinfotoanalyze';
    try
    {
        const response = await fetch(url);
        if (!response.ok)
        {
            throw new Error('Network response was not ok');
        }
        return await response.json();
    }
    catch (error)
    {
        console.error('There has been a problem with your fetch operation:', error);
        return [];
    }
}