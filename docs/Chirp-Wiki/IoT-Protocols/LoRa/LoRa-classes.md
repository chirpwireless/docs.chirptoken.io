---
sidebar_position: 4
---

# LoRa Classes

## What are the LoRa Classes?

Besides the classification of LoRa on the basis of whichever frequency bands it is using, previously discussed in **[Dual-band-LoRa](docs/Chirp-Wiki/IoT-Protocols/LoRa/Dual-band-LoRa.md)**, a LoRa-enabled network can also be classified according to the classes of devices that it supports, namely Class A, B or C.

Altough all LoRa devices can communicate in both directions (receive and send messages), there is a difference in how often a device listens for messages sent from the Network/Cloud Applications through the Gateway that mediates between the internet and LoRa. Class A devices only listen in two short periods after its transmission window, Class B schedules additional receiving windows at fixed time periods regardless of whether transmissions were sent by the device in the meantime, and class C is always on, with the only exception being when the device itself is transmitting.

Classes B and C are not found in some of the popular, existing, networks in the IoT space. By enabling them from the get-go, Chirp extends the usability of its ecosystem by making the devices you can connect actually control the environment and respond to it, rather than just monitoring it and logging bytes when neccesary. 

Altough support for Classes B and C is a network property, and it is enabled in part by Chirp’s use of a DLT blockchain architecture capable to scale to the amount of transmissions logged by a class B or C device, end devices themselves, as well as their firmware, needs to have class B and C operation set-up and enabled for it to work. Transition between classes is possible, and most devices have open-source firmware that can be edited or updated when needed to enable additional functionality and uses.
