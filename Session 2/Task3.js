// 📁 Goal: Build a simple web app that allows users to search for meals by an ingredient using public API.

// 🔗 API Endpoint: Use the following API to filter meals by ingredient: https://www.themealdb.com/api/json/v1/1/search.php?s=

// 📌 Requirements:

// Create a search input field where the user can type an ingredient (e.g., "chicken", "garlic").
// When the user clicks the "Search" button:
// Fetch meals that include the entered ingredient.
// Display each meal in a card format, including:
// Meal image
// Meal name
// If no meals are found, display a friendly message.
// Style the page using CSS for a clean and responsive layout.


async function searchMeals() {
    const ingredient = document.getElementById('ingredient').value.trim();
    const resultsContainer = document.getElementById('results');
    resultsContainer.innerHTML = ''; // Clear previous results

    if (!ingredient) {
        resultsContainer.innerHTML = '<p>Please enter an ingredient to search for meals.</p>';
        return;
    }

    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();

        if (data.meals) {
            data.meals.forEach(meal => {
                const mealCard = document.createElement('div');
                mealCard.classList.add('meal-card');

                mealCard.innerHTML = `
                    <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
                    <h3>${meal.strMeal}</h3>
                `;

                resultsContainer.appendChild(mealCard);
            });
        } else {
            resultsContainer.innerHTML = '<p>No meals found for the given ingredient. Please try another ingredient.</p>';
        }
    } catch (error) {
        console.error('Error fetching meals:', error);
        resultsContainer.innerHTML = '<p>There was an error fetching the meals. Please try again later.</p>';
    }
}

document.getElementById('searchButton').addEventListener('click', searchMeals); 