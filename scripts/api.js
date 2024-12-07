async function searchArticles(event) {
    event.preventDefault(); 


    const year = document.getElementById("year-input").value.trim();
    const month = document.getElementById("month-input").value.trim();


    if (!year || !month || isNaN(year) || isNaN(month) || month < 1 || month > 12) {
        document.getElementById("results").textContent = "Please enter a valid year and month.";
        return;
    }

    const apiKey = "G69XSQQ8IncoVzzvulfsaDC9huzYF19E";
    const apiEndpoint = `https://api.nytimes.com/svc/archive/v1/${year}/${month}.json?api-key=${apiKey}`;

    try {
        console.log("Fetching from API:", apiEndpoint);
        const response = await fetch(apiEndpoint);

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorData}`);
        }

        const data = await response.json();
        displayResults(data.response.docs);
    } catch (error) {
        console.error("Error fetching articles:", error);
        document.getElementById("results").textContent = "Error fetching articles. Please try again later.";
    }
}
