document.addEventListener("DOMContentLoaded", function () {
    // Function to display current day at the top of the calendar
    function displayCurrentDay() {
        var currentDay = moment().format("dddd, MMMM Do YYYY");
        document.getElementById("currentDay").textContent = currentDay;
    }

    displayCurrentDay(); // Call the function to display the current day

    // Generate time blocks for standard business hours (9am to 5pm)
    function generateTimeBlocks() {
        var container = document.querySelector(".container");

        for (var i = 9; i <= 17; i++) {
            var timeBlock = document.createElement("div");
            var timeLabel = document.createElement("div");
            var eventInput = document.createElement("input");
            var saveButton = document.createElement("button");

            timeBlock.classList.add("time-block");
            timeLabel.textContent = i + ":00";
            eventInput.setAttribute("type", "text");
            eventInput.setAttribute("data-hour", i);
            saveButton.textContent = "Save";
            saveButton.setAttribute("data-hour", i);

            timeBlock.appendChild(timeLabel);
            timeBlock.appendChild(eventInput);
            timeBlock.appendChild(saveButton);
            container.appendChild(timeBlock);

            // Check and set the class for past, present, or future time blocks
            var currentHour = moment().hour();
            if (i < currentHour) {
                timeBlock.classList.add("past");
            } else if (i === currentHour) {
                timeBlock.classList.add("present");
            } else {
                timeBlock.classList.add("future");
            }
        }
    }

    generateTimeBlocks(); // Call the function to generate time blocks

    // Function to save events in local storage
    function saveEvent(hour, event) {
        var events = JSON.parse(localStorage.getItem("events")) || {};
        events[hour] = event;
        localStorage.setItem("events", JSON.stringify(events));
    }

    // Function to load saved events from local storage
    function loadEvents() {
        var events = JSON.parse(localStorage.getItem("events")) || {};

        for (var hour in events) {
            var eventInput = document.querySelector('input[data-hour="' + hour + '"]');
            if (eventInput) {
                eventInput.value = events[hour];
            }
        }
    }

    loadEvents(); // Call the function to load saved events

    // Event listener for saving events
    document.addEventListener("click", function (event) {
        if (event.target.matches("button")) {
            var hour = event.target.getAttribute("data-hour");
            var eventInput = document.querySelector('input[data-hour="' + hour + '"]');
            if (eventInput) {
                saveEvent(hour, eventInput.value);
            }
        }
    });
});
