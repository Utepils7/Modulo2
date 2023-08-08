function calculatePrice() {
    var mealSelect = document.getElementById("mealSelect");
    var priceDisplay = document.getElementById("priceDisplay");
    
    var selectedMeal = mealSelect.value;
    var mealPrices = {
        "Brisket": 250,
        "Pulled Pork": 150,
        "Baby Back Ribs": 190,
    };
    
    var price = mealPrices[selectedMeal];
    priceDisplay.innerHTML = "$" + price;
}

function generateOrderNumber() {
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var orderNumberDisplay = document.getElementById("orderNumberDisplay");
    
    var orderNumber = Math.floor(Math.random() * 10000);
    orderNumberDisplay.innerHTML = "Numero de Orden: " + orderNumber + " - Cliente: " + firstName + " " + lastName;
}