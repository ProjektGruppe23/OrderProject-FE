export async function fetchAnyUrl(url)
{
    const response = await fetch(url);
    if (!response.ok)
    {
        throw new Error(`HTTP error! status: ${response.status}`);
    }
    return await response.json();
}