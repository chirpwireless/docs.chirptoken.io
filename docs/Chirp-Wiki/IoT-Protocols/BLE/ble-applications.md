# BLE Applications

Applications include:

| **Domain** | **Description** |
| :------------: | :------------------------------------------------------------------- |
| **MESH** | Passing data short-range between devices across longer distances |
| **Healthcare** | -	Blood Pressure 
                 | -	Health Thermometer Measurement Devices 
                 | -	Glucose Level Monitors 
                 | -	Continuous Glucode 
                 | - Level Monitors |
| **Sports** | -	Body Composition Measurement
-	Cycling Speed and Cadence (sensors attached to bikes)
-	Cycling Power Profile (including exercise bikes)
-	Heart Rate Monitoring
-	Location, Navigation, Tracking using GPS |
| **Environment** | -	Enironmental Sensors
-	User Data Acquisition (e.g. heat in the room from a radiator) |
| **Hardware** | -	Connecting a Keyboard (but not as precise due to latency)
-	Battery Level and Battery State of batteries in a device |
| **Proximity** | -	Electronic Leash (check if another device goes out of range)
-	„Find Me!” (issues an alert on a second device) 
-	Proximity estimation (detect if a connected device is close) |
| **Audio (LE Audio)** | -	Headphones
-	Hearing Aids
(Lower Quality, better battery life compared to classic Bluetooth) |

## Special BLE functions

Because of the unique fact that BLE is installed on almost every single smartphone built since 2012, it can create unique use cases that involve smartphones and beacons. A Beacon is a BLE enabled device that sends and receives BLE signals and can validate whether it should connect to a device using a unique ID. This makes it possible to directly target smartphones using BLE beacons, for example by sending off a notification or service some specific apps. 

For example, a store can use this functionality to send users, who enable notifications from their app, a targeted promotional message as soon as they enter the store, or a welcome message, or a link to some useful information that they may need, such as where departments are located or where to find the closest customer service advisor.

Although BLE can be used to assign unique IDs to real items using BLE tags, and a BLE Beacon (such as a [Blackbird](../Chirp-Wiki/Hardware/Blackbird.md) ) can read off the tags to detect which item exists, it is not able to easily locate items up to meter-level accuracy due to it being limited to the use of RSSI.
