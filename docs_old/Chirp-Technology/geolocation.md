# Geolocation Accuracy using Semtech and LoRa

From asset tracking to fleet management, the ability to precisely locate devices is essential for businesses to make informed decisions and optimize their operations. The Chirp Network Protocol (CNP) offers a novel approach to geolocation by using a combination of technologies to achieve high levels of accuracy.

## Time Diffrence of Arrival 
One of the key technologies used in the CNP is the Time Difference of Arrival (TDoA) method. TDoA relies on the variance between precisely synchronised and recorded timing information between one transmitter and multiple receivers. By measuring the time it takes for a signal to reach multiple receivers, it is possible to determine the location of the transmitter with a high degree of accuracy.

## Semtech's breakthrough
To achieve this level of accuracy, Chirp has partnered with Semtech, a founding member of the LoRa Alliance, to use their SX1303 chipset and 2.4GHz LoRa using SX1280. These chipsets provide the necessary precision and low power consumption to make TDoA a viable option for geolocation in IoT.

## Alternative methods
In addition to TDoA, using Chirp’s Blackbird it is technically possible to use other methods to determine location, including Received Signal Strength Indication (RSSI) and Time of Arrival (ToA). However, these methods are not as accurate as TDoA and are only used in conjunction with it to provide an alternative solution if needed, and it is yet to be confirmed whether they would be allowed at all for common usage.

## Crypto Proofs
Furthermore, Chirp also uses Proof-of-Coverage and Proof-of-Serialization to provide proof of a gateway's location and to provide time consensus between gateways. These proofs can be further used to extract physical geolocation information of devices that operate on the CNP, which can be transformed into a novel type of proof named Proof-of-Location. This is discussed with more detail in Chirp’s Whitepaper.

## Setting New Records of Geolocation Accuracy
Overall, Chirp's use of TDoA, in conjunction with Semtech's SX1303 chipset and 2.4GHz LoRa using SX1280, is setting new records of geolocation accuracy in the IoT industry. This, combined with the other methods and protocols used by Chirp, makes it a highly reliable and accurate solution for businesses looking to optimize their operations through precise device tracking.
