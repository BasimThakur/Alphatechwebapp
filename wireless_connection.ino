#include <ESP8266WiFi.h>
#include <ESP8266WebServer.h>

// WiFi credentials
const char* ssid = "<YOUR_SSID>"; // Replace with your WiFi SSID
const char* password = "<YOUR_PASSWORD>"; // Replace with your WiFi Password

// Create a web server object
ESP8266WebServer server(80);

// Define pins for fan and light control
const int fanPin = 5; // D1 on NodeMCU
const int lightPin = 4; // D2 on NodeMCU

void setup() {
    // Start serial communication
    Serial.begin(115200);
    
    // Set up the GPIO pins
    pinMode(fanPin, OUTPUT);
    pinMode(lightPin, OUTPUT);
    
    // Connect to Wi-Fi
    WiFi.begin(ssid, password);
    while (WiFi.status() != WL_CONNECTED) {
        delay(1000);
        Serial.println("Connecting to WiFi...");
    }
    Serial.println("Connected to WiFi!");

    // Define the routes
    server.on("/fan/on", []() {
        digitalWrite(fanPin, HIGH); // Turn fan ON
        server.send(200, "text/plain", "Fan ON");
    });

    server.on("/fan/off", []() {
        digitalWrite(fanPin, LOW); // Turn fan OFF
        server.send(200, "text/plain", "Fan OFF");
    });

    server.on("/fan/speed/slow", []() {
        // Implement slow speed functionality here
        server.send(200, "text/plain", "Fan set to SLOW");
    });

    server.on("/fan/speed/medium", []() {
        // Implement medium speed functionality here
        server.send(200, "text/plain", "Fan set to MEDIUM");
    });

    server.on("/fan/speed/fast", []() {
        // Implement fast speed functionality here
        server.send(200, "text/plain", "Fan set to FAST");
    });

    server.on("/light/on", []() {
        digitalWrite(lightPin, HIGH); // Turn light ON
        server.send(200, "text/plain", "Light ON");
    });

    server.on("/light/off", []() {
        digitalWrite(lightPin, LOW); // Turn light OFF
        server.send(200, "text/plain", "Light OFF");
    });

    server.on("/light/low", []() {
        // Implement low light functionality here
        server.send(200, "text/plain", "Light set to LOW");
    });

    server.on("/light/medium", []() {
        // Implement medium light functionality here
        server.send(200, "text/plain", "Light set to MEDIUM");
    });

    server.on("/light/high", []() {
        // Implement high light functionality here
        server.send(200, "text/plain", "Light set to HIGH");
    });

    // Start the server
    server.begin();
    Serial.println("Server started!");
}

void loop() {
    // Handle client requests
    server.handleClient();
}
