function sendData() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    const inputs = { name, surname};
    const options = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
    }
    fetch("/data", options);
};