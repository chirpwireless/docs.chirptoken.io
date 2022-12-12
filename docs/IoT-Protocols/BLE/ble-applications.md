---
sidebar_position: 2
---

# BLE Applications

## BLE Applications by domain
Applications include:

| **Domain** | **Description** |
| :------------: | :--------------------------------------------------------------------- |
|    **MESH**    |      Passing data short-range between devices across longer distances |
|                | -	Blood Pressure |
|                | -	Health Thermometer Measurement Devices |
| **Healthcare** | -	Glucose Level Monitors |
|                | -	Continuous Glucode |
|                | -    Level Monitors |
|                |                                                                        |
|                | -	Body Composition Measurement |
|                | -	Cycling Speed and Cadence (sensors attached to bikes) |
|   **Sports**   | -	Cycling Power Profile (including exercise bikes) |
|                | -	Heart Rate Monitoring |
|                | -	Location, Navigation, Tracking using GPS |
|                |                                                                        |
|                | -	Enironmental Sensors (temperature, humidity) |
| **Environment**| -	User Data Acquisition (e.g. heat in the room from a radiator) |
|                | -    Air Quality Sensors (CO2, particulates)
|                |                                                                        |
|                | -    Connecting directly to a computer, phone or tablet |
|  **Hardware**  | -	Connecting a Keyboard (but not as precise due to latency) |
|                | -	Battery Level and Battery State of batteries in a device |
|                |                                                                        |
|                | -	Electronic Leash (check if another device goes out of range) |
| **Proximity**  | -	„Find Me!” (issues an alert on a second device) |
|                | -	Proximity estimation (detect if a connected device is close) |
|                |                                                                        |
|    **Audio**   | -	Headphones |
|    (LE Audio)  | -	Hearing Aids |
|                |      (Lower Quality, better battery life compared to classic Bluetooth) |

## Special BLE functions

Because of the unique fact that BLE is installed on almost every single smartphone built since 2012, it can create unique use cases that involve smartphones and beacons. A Beacon is a BLE enabled device that sends and receives BLE signals and can validate whether it should connect to a device using a unique ID. This makes it possible to directly target smartphones using BLE beacons, for example by sending off a notification or service some specific apps. 

For example, a store can use this functionality to send users, who enable notifications from their app, a targeted promotional message as soon as they enter the store, or a welcome message, or a link to some useful information that they may need, such as where departments are located or where to find the closest customer service advisor.

Although BLE can be used to assign unique IDs to real items using BLE tags, and a BLE Beacon (such as a [Blackbird](docs/Hardware/Blackbird.md) ) can read off the tags to detect which item exists, it is not able to easily locate items up to meter-level accuracy due to it being limited to the use of RSSI.
