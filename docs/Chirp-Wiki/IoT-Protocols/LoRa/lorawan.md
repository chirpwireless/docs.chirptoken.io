# LoRa vs LoRaWAN

## LoRa Reminder

**[LoRa](LoRa-intro.md)** is the IoT communication protocol optimized for very long range transmission of small quantities of data. It can provide IoT applications using specific devices that connect to a central point, called the Gateway, that interprets the chirp signals into digital information and sends it through the internet.

## What is LoRaWAN?

LoRaWAN is the type of Wide Area Network (WAN) created specifically for **[LoRa](LoRa-intro.md)**, which enables the standard of a low power and long-range (LPWAN) network based on Semtech’s LoRa Devices, using unlicensed (open, free) sub-GHz and Industrial, Scientific and Medical (ISM) radio bands. 

## What makes LoRa Work? (Semtech and the LoRa Alliance)

Whilst Semtech proides novel **[LoRa Chipsets](LoRa-chipsets.md)** , semiconductor devices that enable the functionality of **[LoRa Gateways](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Hardware.md)** , the LoRa Alliance is the international non-profit organization that groups together the most important companies engaged in the development of a globally standardized and harmonious set of standards for LoRaWAN.

## Isn’t it the same?

In short, no. **[LoRa](LoRa-intro.md)** is the communication protocol, the technology that makes it possible to do long-range wide area IoT with extremely low power consumption. A single **[LoRa Gateway](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Hardware.md)** can be installed in a home to enable the use of **[LoRa](LoRa-intro.md)** for a few local devices, but this does not constitute a LoRaWAN Network.

Creating an IoT Network is possible using various types of communication protocols. The **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)**, for example, provides **[two standards of LoRa (sub-GHz and ISM 2.4GHz)](Dual-band-LoRa.md)** , **[Zigbee](docs/Chirp-Wiki/IoT-Protocols/Zigbee/Zigbee-intro.md)** and **[BLE](docs/Chirp-Wiki/IoT-Protocols/BLE/BLE-intro.md)** . The Chirp Network constitutes a LoRaWAN network because it uses **[LoRa](LoRa-intro.md)** and follows all of the standards and regulations imposed by the LoRa Alliance.

## Why is this distinction important?

Creating a Network requires the installation of a lot of Gateways and Devices in a single network that follows the requirements and specifications imposed by the LoRaWAN standards. They are dictated by the LoRa Alliance, in order to be legally recognized and approved by both the International Telecommunication Union (ITU) and various local/national regulators. Because of this, anywhere you go you can be sure that the Devices/Gateways and the LoRaWAN Networks will function well and all devices that use **[LoRa Chipsets](LoRa-chipsets.md)** or are certified for **[LoRa](LoRa-intro.md)** will be the compatible with the Network.
