# How IoT can be used to geolocate things

## How is it done?
One of the key features of IoT is the ability to geolocate things, or determine the physical location of a device or object. There are several ways to do this, including using Received Signal Strength Indication (RSSI), Time of Arrival (ToA), and Time Differential of Arrival (TDoA). In this article, we will explore each of these methods and discuss their advantages and disadvantages.

## Received Signal Strength Indicator (RSSI) 
RSSI is a measure of the power level of a wireless signal, usually measured in decibels (dBm). It can be used to estimate the distance between a device and a wireless access point or other device. The main advantage of RSSI is that it is relatively simple to implement and can be done with low-cost hardware. However, it is not very accurate and can be affected by factors such as the environment and other wireless signals.

## Time of Arrival
ToA is a method that uses the time it takes for a signal to travel from a sender to a receiver. It can be used to determine the distance between the two devices. The main advantage of ToA is that it can provide relatively accurate results. However, it requires precise timing, which can be difficult to achieve in practice. Additionally, it is affected by factors such as the environment and other wireless signals.

## Time Difference of Arrival
TDoA is a method that uses the difference in time between when a signal is received by multiple receivers. It can be used to determine the location of a device by triangulation. The main advantage of TDoA is that it can provide very accurate results. However, it requires precise timing and multiple receivers, which can be difficult to achieve in practice. Additionally, it is affected by factors such as the environment and other wireless signals.

## Global Positioning System (GPS)
GPS is a satellite-based navigation system that provides location and time information. It can be used to determine the location of a device with high accuracy. The main advantage of GPS is that it can provide very accurate results. However, it requires a clear view of the sky, which can be difficult to achieve in certain environments. Additionally, it requires a relatively high amount of power to operate, which can be a problem for battery-powered devices.

## How Chirp does it
There are several ways to geolocate things using IoT, including RSSI, ToA, TDoA, and GPS. Each method has its own advantages and disadvantages, and the best choice will depend on the specific requirements of the application. For example, TDoA is considered the most accurate method but it is also the most challenging to implement, while GPS is easy to implement but it requires a clear view of the sky and relatively high amount of power to operate. When it comes to IoT devices, it is important to consider the balance between accuracy and cost, as well as the specific requirements of the application. Chirp's Network Protocol (CNP) Proof-of-Location uses TDoA and it is highly accurate compared to other methods, using the power of cryptographical guarantees to assure decentralized validation of location. To learn more about the significant breakthroughs that differentiate Chirp specificailly from other networks, you can read "Chirp geolocation".
