export async function handleResponse(responseOrError)
{
    if (responseOrError instanceof Response)
    {
        if (responseOrError.ok)
        {
            return await responseOrError.json();
        }
        else
        {
            const responseData = await responseOrError.json();

            // Check for 401 Unauthorized status
            if (responseOrError.status === 401)
            {
                alert('You are not authorized. Please login.');
                console.log('Redirecting to login page');
                window.location.href = '/login'; // Redirect to your login page
                return;
            }

            const errorMsg = `Server Error! Status: ${responseOrError.status}, Message: ${JSON.stringify(responseData)}`;
            alert(errorMsg);
            throw new Error(errorMsg);
        }
    }
    else if (responseOrError instanceof Error)
    {
        console.error('Fetch Error:', responseOrError);
        alert('An unexpected error occurred. See console for details.');
        throw responseOrError;
    }
    else
    {
        console.error('Unknown object:', responseOrError);
        throw new Error('An unknown error occurred');
    }
}