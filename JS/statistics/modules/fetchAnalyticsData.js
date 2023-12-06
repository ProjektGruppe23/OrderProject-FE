
export let analyticsData = null;

export async function fetchAnalyticsData()
{
    const url = 'http://localhost:8080/getinfotoanalyze';
    try {
        alert("please wait for data to be fetched, click ok to continue");
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        alert("data has been fetched, please click ok to resume");
        analyticsData = await response.json();
    } catch (error) {
        console.error('There has been a problem with your fetch operation:', error);
    }
}