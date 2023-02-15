---
sidebar_position: 1
---

# Bluetooth Low Energy (BLE)

## BLE - small, versatile, and EVERYWHERE
Bluetooth Low Energy (or BLE) is one of the most widely used wireless protocols in the IoT space, completely independent from classical Bluetooth and optimised for **[small devices](docs/Hardware/BLE-devices.md)** with the same range as the original, which makes it a short range, 10-100m, IoT protocol. 

The usual **[BLE device](docs/Hardware/BLE-devices.md)** can last somewhere in between a couple of months and a few years on a button cell battery, and they tend to be small and affordable. 

The main driver of BLE adoption is the fact that it is compatible with the Bluetooth 4.0 chipsets installed on existing mobile phones and tablets. Some estimates show that up to 1-10 billion BLE devices are currently in use.

## What's BLE for?

Altough the usual **[BLE device](docs/Hardware/BLE-devices.md)** has very short range but very long lasting battery life, it’s main benefit compared to **[LoRa]( docs/IoT-Protocols/LoRa/LoRa-intro.md)** or **[Zigbee](docs/IoT-Protocols/Zigbee/zigbee-intro.md)** is that it is much better optimised for the devices that need to send data often. It is easy to make a **[BLE device](docs/Hardware/BLE-devices.md)** that sends lots of data more frequently but at short range, with almost (but not exactly) continuous data streams possible for small durations or data bursts. 

Compared to Bluetooth that has actual continuous connections, and is will most often be used for a wireless keyboard and mouse, some BLE applications also exist where battery is more important than the 100ms latency.

BLE uses the same 2.4 GHz radio frequency band as other protocols installed on the **[Blackbird](docs/Hardware/Blackbird/Blackbird.md)**, which makes it possible to share a single antenna with the other chipsets.

NOTE: Unlike classical Bluetooth, BLE has a much higher latency between connections (100ms compared to 6ms), a single BLE communication only transmits data in short bursts, it is not voice-capable, has a slightly lower data rate, but slightly higher than **[2.4GHz LoRa](docs/IoT-Protocols/LoRa/Dual-band-LoRa.md)**. 
