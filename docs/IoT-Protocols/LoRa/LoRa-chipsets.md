# Semtech Chipsets

## Who is Semtech?

Semtech is the provider of multiple new and innovative semiconductor devices required in the creation of advanced LoRa products. They are one of the most important actors in the adoption of LoRa as a leading IoT communication protocol in commercial applications for the expansion of IoT.

Chirp makes use of novel innovative chipsets created by Semtech in order to implement the cutting-edge version of LoRa made available in recent years, enhancing the functionality of the network from the very start with respect to improving compatibility, reach, data rate, eliminating regional barriers, improving location accuracy, and a lot more. 

## Semtech SX1280

The **[Semtech SX 1280 chipset](https://www.semtech.com/products/wireless-rf/lora-connect/sx1280)** is the essential addition to the **[Blackbird](docs/Hardware/Blackbird.md)** that enables ultra long range communication with great resistance to heavy interference and global compatibility with all **[LoRa devices](docs/IoT-Protocols/LoRa/LoRa-Hardware.md)** on the market because of the introduction of **[2.4 GHz LoRa](Dual-band-LoRa.md)**. Check out Chirp’s Wiki entry on **[Wi-Fi and BLE immunity](Dual-band-LoRa.md)** and Semtech’s articles (**[BLE](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/2R000000HSNz/HeroVQVfOkV2KaLGS7BiPaFWWoCXVsrP3rFKf9hs6JQ)**, **[Wi-Fi](https://semtech.my.salesforce.com/sfc/p/#E0000000JelG/a/44000000MDcO/Ll4bon.4HPwcyXv9fegcfcgbpvLYd7Lx_aZLMzYNLIQ)**).

## Semtech SX1303

The **[SX1303](https://www.semtech.com/products/wireless-rf/lora-core/sx1303)** is the newest generation of LoRa chipsets, which result in extremely good **[geo-location detection](TDoA.md)** because of the introduction of **Fine Timestamp** capability. This means that the **[Gateway](docs/IoT-Protocols/LoRa/LoRa-Hardware.md)** (in our case the **[Blackbird](docs/Hardware/Blackbird.md)**) has a much better internal clock that can be used in the algorithm used to interpret the time taken for a LoRa signal to reach to and from a **[LoRa device](docs/IoT-Protocols/LoRa/LoRa-Hardware.md)** and several Gateways into their precise position in space. In addition, the SX1303 also provides lowered power consumption and a smaller overall size.
NOTE: With the **[SX 1303](https://www.semtech.com/products/wireless-rf/lora-core/sx1303)** , a device does not need any sort of GPS or location indicator! Anything, including a simple temperature sensor or a smart plug can be located just from the time it takes to respond to a chirp signal sent by our **[Blackbird](docs/Hardware/Blackbird.md)**.

## Why should I care?

Because LoRa chipsets are at the very core of the **[Gateways](docs/IoT-Protocols/LoRa/LoRa-Hardware.md)**, upgrading them in older devices requires a complete recall of all Miners for the replacement of the chipsets in order to make the new functionaly available. Firmware upgrades are limited in older devices, and, thus, it is a very important unique benefit of Chirp compared to older legacy Networks to be able to roll-out the most novel solution from the start.
