export function getMovie()
{
    const ageLimitId = document.getElementById("inpAgeLimitId").value;
    const title = document.getElementById("inpTitle").value;
    const description = document.getElementById("inpDescription").value;
    const startDate = document.getElementById("inpStartDate").value;
    const endDate = document.getElementById("inpEndDate").value;
    const length = document.getElementById("inpLength").value;
    const picture = document.getElementById("inpPicture").value;

    // Construct the movie object
    const movie = {
        ageLimit: {
            id: ageLimitId // Nested as requested
        },
        endDate: endDate,
        length: length,
        startDate: startDate,
        title: title,
        description: description,
        picture: picture
    };

    console.log(movie);
    return movie;
}