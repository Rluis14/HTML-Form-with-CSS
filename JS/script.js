document.getElementById("userForm").addEventListener("submit", function(event) {
    const name = document.getElementById("name").value;
    if (name.trim() === "") {
        alert("Please fill out your name.");
        event.preventDefault();
    }
});
