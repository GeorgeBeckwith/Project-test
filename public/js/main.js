function sendData() {
    var name = document.getElementById("name").value;
    var surname = document.getElementById("surname").value;

    const inputs = { name, surname}; //Adds both inputs into the same variable
    const options = { //Defines what method will be carried out on the data
        method: "POST", //This declares that the data will be sent
        headers: {
            "Content-Type": "application/json" //Declares format of the data
        },
        body: JSON.stringify(inputs) //Applies JSON format to the data
    }
    fetch("/data", options);
};

