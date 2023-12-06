export async function sendObjectAsJson(url, object, httpMethod)
{
    try
    {
        const response = await fetch(url,
            {
                method: httpMethod,
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(object)
            });
        return await response;
    }
    catch (error)
    {
        console.log(error);
    }
}