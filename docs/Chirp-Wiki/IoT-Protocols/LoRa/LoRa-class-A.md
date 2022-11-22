---
sidebar_position: 5
---

## LoRa Class A

LoRa Type A is the simplest one, and the only one that older, legacy networks support. 

![LoRa Class A](docs/Chirp-Wiki/img/classA.png)

Lora Type A devices are only capable to listen for a response from the Gateway after transmitting data during two open communication windows separated by a fixed delay. If the device does not receive anything in these limited windows of time when it is listening, it will not be able to receive anyhing until after it transmits data again and two new downlink windows are opened, identical to the previous ones.

The second Receive/downlink window is only openned in case nothing is received during the first window. It acts as a backup in case packets were lost or communication was not properly established. 

If anything is received during either downlink window, its duration extends until the full content of the received message is transmitted. The duration of the window is only fixed in the case where nothing is received.

Class A devices have the lowest energy consumption and tend to be battery powered with very long autonomy, up to years of operation. As the period in which they are not listening is arbitrary and they can only receive something after they transmit a signal themselves, they can be in sleep mode for the vast majority of their lifetimes. They have artificially high latency because of the arbitrary delays that separate downlink windows.

Example devices: a simple sensor, a a fixed period location tracking device, fire detection, cattle movement tracker.
