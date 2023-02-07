---
sidebar_position: 1
---

# Zigbee

## What is Zigbee?
Similar to **[BLE](docs/IoT-Protocols/BLE/BLE-intro.md)**, Zigbee is a short-range IoT protocol specialised in low-power radio devices at a range of 10 to 100m. Zigbee operates in the same 2.4 GHz ISM band as the other IoT protocols installed on the **[Blackbird](docs/Hardware/Blackbird/Blackbird/Blackbird.md)**. Unlike BLE and LoRa, the Zigbee module comes installed as an external, optional dongle that can be omitted when it is not required by a **[Blackbird](docs/Hardware/Blackbird/Blackbird.md)**’s Keeper.

## What's so special about Zigbee?

The strong suit of Zigbee is that it was devised from the start to be easy to integrate in a Mesh Network, particularly suited for wireless control and monitoring, similar to **[LoRa class C](docs/IoT-Protocols/LoRa/LoRa-classes-B-and-C.md)**. This makes it extremely simple to work with even if you are a complete stranger to IoT, and this simplicity made it a top IoT protocol for home low complexity home automation solutions, with more than 2 billion devices currently on the market.

Unlike **[BLE](docs/IoT-Protocols/BLE/BLE-intro.md)** and **[LoRa](docs/IoT-Protocols/LoRa/LoRa-intro.md)**, Zigbee is especially optimised for home automation, with its most common uses being in remote light switches, smart plugs, smoke and intruder detection, local sensors, and does not come with the same versatility as other IoT protocols. 

## What are the limitations of Zigbee?

Zigbee offers a capped data rate of 250 kbit/s, but it does not have the same long-range properties of **[LoRa]( docs/IoT-Protocols/LoRa/LoRa-intro.md)**, as well as the ability to trade-off, when needed, between range, power consumption and data-rate, without external input, as **[Dual-band-LoRa](docs/IoT-Protocols/LoRa/Dual-band-LoRa.md)**. Neither does it have the ability to reach high data rates as **[BLE](docs/IoT-Protocols/BLE/BLE-intro.md)** for the same range. 

To put this comparison in numbers, **[BLE](docs/IoT-Protocols/BLE/BLE-intro.md)** can reach up to 2Mbit/s in data rate, 8 times higher than Zigbee, whilst **[LoRa](docs/IoT-Protocols/LoRa/LoRa-intro.md)** can reach 100-1000 times the range, and it’s not much different even when considering a configuration using the equivalent data rate. 
