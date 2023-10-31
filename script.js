document.getElementById("search-button").addEventListener("click", function() {
    const startDate = document.getElementById("start-date").value;
    const endDate = document.getElementById("end-date").value;
    
    if (startDate && endDate) {
        fetch(`/search?startDate=${startDate}&endDate=${endDate}`)
            .then(response => response.json())
            .then(data => displayResults(data));
    }
});

function displayResults(results) {
    const resultsContainer = document.getElementById("results")
}
