// Function to retrieve data from local storage
function getDataFromLocalStorage() {
    const data = localStorage.getItem("storedData");
    return data ? JSON.parse(data) : [];
}

// Function to display data as <td> elements
function displayDataAsTable(data) {
    const tableBody = document.querySelector("#data-table tbody");

    data.forEach(function(item) {
        const tdElement = document.createElement("td");
        tdElement.textContent = item;

        const trElement = document.createElement("tr");
        trElement.appendChild(tdElement);

        tableBody.appendChild(trElement);
    });
}

// On page load, retrieve data from local storage and display it
document.addEventListener("DOMContentLoaded", function() {
    const data = getDataFromLocalStorage();
    displayDataAsTable(data);
});