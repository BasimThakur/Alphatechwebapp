// Define the ESP8266 IP address
const esp8266Ip = "192.168.4.2"; // Replace with your ESP8266 IP address

// Fan control functions
document.getElementById("fan-on").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/fan/on`)
        .then(response => {
            if (response.ok) {
                console.log("Fan turned ON");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("fan-off").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/fan/off`)
        .then(response => {
            if (response.ok) {
                console.log("Fan turned OFF");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("fan-slow").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/fan/speed/slow`)
        .then(response => {
            if (response.ok) {
                console.log("Fan set to SLOW");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("fan-medium").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/fan/speed/medium`)
        .then(response => {
            if (response.ok) {
                console.log("Fan set to MEDIUM");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("fan-fast").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/fan/speed/fast`)
        .then(response => {
            if (response.ok) {
                console.log("Fan set to FAST");
            }
        })
        .catch(error => console.error("Error:", error));
});

// Light control functions
document.getElementById("light-on").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/light/on`)
        .then(response => {
            if (response.ok) {
                console.log("Light turned ON");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("light-off").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/light/off`)
        .then(response => {
            if (response.ok) {
                console.log("Light turned OFF");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("light-low").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/light/low`)
        .then(response => {
            if (response.ok) {
                console.log("Light set to LOW");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("light-medium").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/light/medium`)
        .then(response => {
            if (response.ok) {
                console.log("Light set to MEDIUM");
            }
        })
        .catch(error => console.error("Error:", error));
});

document.getElementById("light-high").addEventListener("click", () => {
    fetch(`http://${esp8266Ip}/light/high`)
        .then(response => {
            if (response.ok) {
                console.log("Light set to HIGH");
            }
        })
        .catch(error => console.error("Error:", error));
});
