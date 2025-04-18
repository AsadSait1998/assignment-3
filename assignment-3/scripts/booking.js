/********* create variables *********/
// useful variables might be: the cost per day, the number of days selected, and elements on the screen that will be clicked or will need to be modified. 
// Do any of these variables need to be initialized when the page is loaded? 
// When do they need to be reset or updated?

// Daily rate and day counter variables
let dailyRate = 35; // Default rate is full day ($35)
let dayCounter = 0; // Start with 0 days selected

// Get all DOM elements we'll need to manipulate
const costLabel = document.getElementById('calculated-cost');
const fullButton = document.getElementById('full');
const halfButton = document.getElementById('half');
const clearButton = document.getElementById('clear-button');
const monday = document.getElementById('monday');
const tuesday = document.getElementById('tuesday');
const wednesday = document.getElementById('wednesday');
const thursday = document.getElementById('thursday');
const friday = document.getElementById('friday');

// Put days in an array for easier handling
const dayElements = [monday, tuesday, wednesday, thursday, friday];

/********* colour change days of week *********/
// when the day buttons are clicked, we will apply the "clicked" class to that element, and update any other relevant variables. Then, we can recalculate the total cost.
// added challenge: don't update the dayCounter if the same day is clicked more than once. hint: .classList.contains() might be helpful here!

dayElements.forEach(day => {
    day.addEventListener('click', function() {
        // Check if this day is already selected
        if (!day.classList.contains('clicked')) {
            // Add the clicked class to change appearance to yellow (as seen in screenshots)
            day.classList.add('clicked');
            // Increment the day counter
            dayCounter++;
            // Update the calculated cost
            calculate();
        }
    });
});

/********* clear days *********/
// when the clear-button is clicked, the "clicked" class is removed from all days, any other relevant variables are reset, and the calculated cost is set to 0.

clearButton.addEventListener('click', function() {
    // Remove clicked class from all day elements
    dayElements.forEach(day => {
        day.classList.remove('clicked');
    });
    
    // Reset the day counter
    dayCounter = 0;
    
    // Update the calculated cost display
    calculate();
});

/********* change rate *********/
// when the half-day button is clicked, set the daily rate to $20, add the "clicked" class to the "half" element, remove it from the "full" element, and recalculate the total cost.

halfButton.addEventListener('click', function() {
    // Set rate to half-day price
    dailyRate = 20;
    
    // Update the styling to show which option is selected
    halfButton.classList.add('clicked');
    fullButton.classList.remove('clicked');
    
    // Update the cost calculation
    calculate();
});

// when the full-day button is clicked, the daily rate is set back to $35, the clicked class is added to "full" and removed from "half", and the total cost is recalculated.

fullButton.addEventListener('click', function() {
    // Set rate to full-day price
    dailyRate = 35;
    
    // Update the styling to show which option is selected
    fullButton.classList.add('clicked');
    halfButton.classList.remove('clicked');
    
    // Update the cost calculation
    calculate();
});

/********* calculate *********/
// when a calculation is needed, set the innerHTML of the calculated-cost element to the appropriate value

function calculate() {
    // Calculate the total cost based on number of days and rate
    const totalCost = dayCounter * dailyRate;
    
    // Update the display with the new cost
    costLabel.innerHTML = totalCost;
}

// Initialize - ensure "full" button starts selected (as seen in screenshots)
document.addEventListener('DOMContentLoaded', function() {
    // "full" button starts with clicked class by default in the HTML
    // This ensures the calculation logic matches the initial visual state
    calculate();
});