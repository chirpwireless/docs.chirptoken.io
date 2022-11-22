---
sidebar_position: 1
---

# LoRa  - the Long Range protocol

**LoRa** is one of the four main communication protocols used on the **Chirp** network. It is one of the main **IoT** technologies used in the **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)**, designed to provide very long range **IoT** coverage for communications or applications that require small data streams, on the order the bytes or kilobytes.

## How does it work?

**LoRa** uses very narrow radio impulses, often called **chirps**, to send information, in a method called the chirp spread spectrum technique. This strategy is unique in its ability to resist against the influence of noise or jamming when in crowded radio channels, making it **[resilient to interference](docs/Chirp-Wiki/IoT-Protocols/LoRa/Dual-band-LoRa.md)**.

## What is it for?

**LoRa** has a large number of uses, usually related to collecting data from a very large number of different **[sensors](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Hardware.md)** across a very large area. This includes examples such as weather, air quality, pollution, light, temperature, humidity sensors, or switches such as one that checks whether a door is closed.

On networks such as Chirp where **[type C](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Classes.md)** is enabled, devices are also listening all of the time for signals sent by **[Gateways](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Hardware.md)**, so they may respond to commands such as turning on lights, closing circuits, starting motors and moving valves. 

These devices tend to have a much lower autonomy than normal **[type A](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Classes.md)** devices, so they will need to be recharged more often, or be plugged in.

## How does it compare?

**LoRa** has the best range and cost compared to all of the other **[IoT protocols](docs/Chirp-Wiki/IoT-Protocols.md)**. It provides coverage for millions of devices over very long ranges, up to hundreds of kilometers at a fraction of the price, using only open, **[license free frequency bands](docs/Chirp-Wiki/IoT-Protocols/LoRa/Dual-band-LoRa.md)**.

However, in terms of bandwidth and data rate it is below Wi-fi, **[BLE](docs/Chirp-Wiki/IoT-Protocols/BLE/BLE-intro.md)** and cellular, altough recent advances in AI-based algorithms have achieved breakthroughs in enabling new advanced applications of LoRa such as image, video and audio transmission. One example would be **[MatchX's edgeX AI](https://matchx.io/products/edge-x-ai-kit)** 

Compared to other technologies, LoRa offer **deep indoor penetration**, essentially being able to penetrate concrete walls or cover an entire office building.

LoRa, especially with the **[SX1303](docs/Chirp-Wiki/Hardware/Semtech-chipsets.md)** advanced chipset, can provide extremely precise location detection of any sensor on the network, such as a simple temperature sensor, without GPS, at meter-level accuracy.



