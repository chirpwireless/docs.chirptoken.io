---
sidebar_position: 2
---

# LoRa Hardware

## What is a LoRa Device?

A LoRa device is usually a small **edge devices** such as a *sensor*, *locator*, or other IoT devices able to transmit and receive chirp signals over a very long range, sometimes as far as hundreds of kilometers, where chirps represent individual bytes of data. Most **edge devices** are battery-powered, being capable to function for as long as 2 years without being recharged, and provide a variety of functions.

Devices are capable to receive commands through LoRa, and when the LoRa network supports it may even be controlled to take part in simple or complex automation tasks such as starting motors or switching on a smart plug.


## What is a LoRa Gateway?

The LoRa Gateway is a specialised LoRa hardware, the equipment used to receive the chirps emitted by edge devices and decode it into usable digital data.This data is then transferred through an internet link (either Wi-Fi, LTE, or through the Sattelite Backhaul) to the Network/Cloud Applications, where they are further processed into either an automated response or as a readable, user-friendly output to be accessed through a dashboard. 

 The Gateways are capable of processing signals with powers lower than that of background noise, all because of the configuration of the chirp signal. Different pieces of information are sent by varying the time in between chirp signals.

Gateway optimise themselves by making use of spreading factors, a method to either extend their range of connecting to devices or the amount of data they can receive (datarate). 
Gateways, such as **[Chirp’s Blackbird](docs/Hardware/Blackbird/Blackbird.md)**, use an antenna to capture the radio signal emitted by LoRa end devices. The antenna needs to be placed as high up as possible, in a place with great view and no obstructions in its surroundings. Another requirement of a LoRa Gateway is for it to be connected to the internet through either WiFi or Ethernet cables, which in the case of Chirp is also the source of electrical power, removing the need for a power cable. To find out more about this, you can consult the  **[Tips-and-Tricks](docs/Using-Chirp/Tips-and-tricks.md)** entry on the Hardware Wiki! 




