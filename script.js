function storeWish() {
    // Retrieve existing wishes from Local Storage or initialize as an empty array
    var existingWishes = JSON.parse(localStorage.getItem('newYearWishes')) || [];

    // Retrieve form values
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var wish = document.getElementById('wish').value;

    // Create a wish object
    var newWish = {
        name: name,
        email: email,
        wish: wish
    };

    // Add the new wish object to the existing array
    existingWishes.push(newWish);

    // Convert the updated array to a JSON string and store it back in Local Storage
    localStorage.setItem('newYearWishes', JSON.stringify(existingWishes));

    // Alert the user that the wish is stored
    alert('Your wish has been recorded successfully!');

    // Clear the form fields for the next entry
    document.getElementById('name').value = '';
    document.getElementById('email').value = '';
    document.getElementById('wish').value = '';
}