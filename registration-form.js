document.getElementById("registrationForm").addEventListener("submit", function(event) {
    event.preventDefault(); 

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var password = document.getElementById("password").value;

    var resultDiv = document.getElementById("result");
    resultDiv.innerHTML = `
        <h2>Registration Successful!</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Gender:</strong> ${gender}</p>
        <p><strong>Password:</strong> ${password}</p>
    `;
});

document.getElementById("clearButton").addEventListener("click", function() {
    document.getElementById("registrationForm").reset();
    document.getElementById("result").innerHTML = "";
});