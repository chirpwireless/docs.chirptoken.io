# Tips and Tricks to maximize Rewards

## Blackbird Location

A single **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)** can provide long-range coverage for **[dual-band LoRa](docs/Chirp-Wiki/IoT-Protocols/LoRa/Dual-band-LoRa.md)** of up to hundreds of kilometers. Installing them close together is often times inefficient and in certain cases it may not produce any additional benefit whatsoever.

Because of this, optimizing the placement of your Blackbird Gateway is one of the most important things to consider when becoming a Keeper. 

-	Installing two **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)** close together or next to another existing **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)**, at a distance of less than 400m, will generate no rewards whatsoever. 

-	Once more than a fixed number of **[Blackbirds](docs/Chirp-Wiki/Hardware/Blackbird.md)** are installed in the same 1 square mile area, the area is declared saturated and it will be impossible to add more **[Blackbirds](docs/Chirp-Wiki/Hardware/Blackbird.md)** in the future.

## Blackbird Height

-	Providing good signal coverage is best when the Antenna is in direct line-of-sight to other **[Blackbirds](docs/Chirp-Wiki/Hardware/Blackbird.md)** and **[Devices](docs/Chirp-Wiki/IoT-Protocols/LoRa/LoRa-Hardware.md)**. In order to achieve this, you must make sure that your **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)** is not obstructed by buildings, mountains or any other thing that may decrease its visibility.

-	It is a best practice to install the Antenna as high-up as possible, on top of very tall buildings, on radio towers, on top of hills, etc. 

## Maximize Availability

The **[Blackbird](docs/Chirp-Wiki/Hardware/Blackbird.md)** requires, at minimum, only two things to function: 

1.	Power
2.	Internet access 

These can be provided in various configurations: either using a single Ethernet cable that provides both, a single power cable and a Wi-Fi connection, or using batteries and solar panels and LTE or Sattelite backhauls for installation in remote locations.

-	Make sure that any set-up you create functions properly all of the time, because you will not be rewarded during the time when the Blackbird is not connected to the internet or is not powered. 

-	Make sure to attach and protect the free part of the cable somewhere to prevent debris, hail, birds or rodents from breaking it

## Check Connector Health

-	Check the quality of connectors (ethernet, power) and cables in order to prevent accidental disconnects or loss-of-power

-	Make sure to connect the antenna with the Blackbird with a cable at least 150cm (60’’) in length to eliminate any cable induced interference or impedance. (12 times the 2.4 GHz wavelength)

-	Make sure to avoid coiling up long cables, especially those transporting low currents and signals, because this creates additional impedance when the cable acts as a inductor. Keep cables as straight as possible.

