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

    //  CORS proxy (AllOrigins)
    const corsProxy = 'https://api.allorigins.win/raw?url=';
    const proxiedApiEndpoint = corsProxy + encodeURIComponent(apiEndpoint);

    try {
        console.log("Fetching from API:", proxiedApiEndpoint);
        const response = await fetch(proxiedApiEndpoint);

        if (!response.ok) {
            const errorData = await response.text();
            throw new Error(`HTTP Error: ${response.status} - ${errorData}`);
        }

        const data = await response.json();
        displayResults(data.response.docs);
    } catch (error) {
        console.error("Error fetching:", error);
        document.getElementById("results").textContent = "Error fetching articles.";
    }
}

function displayResults(articles) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";

    if (!articles || articles.length === 0) {
        resultsContainer.textContent = "No articles found.";
        return;
    }

    const ul = document.createElement("ul");
    articles.forEach((article) => {
        const li = document.createElement("li");
        li.textContent = article.headline?.main || "No Title Available";
        ul.appendChild(li);
    });
    resultsContainer.appendChild(ul);
}
