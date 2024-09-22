// Task 2: Write JavaScript code to handle form submissions and store user input in an object.
const handleSubmit = event => {
    event.preventDefault();
    const userName = document.getElementById("user-name").value;
    const email = document.getElementById("user-email").value;
    const message = document.getElementById("user-message").value;
    alert(`Hello, ${userName}! Form submitted successfully.`);
    document.getElementById("assignment-form").reset();
    return { name: userName, email: email, message: message };
};