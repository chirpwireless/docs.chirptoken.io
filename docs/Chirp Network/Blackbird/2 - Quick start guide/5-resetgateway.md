---
sidebar_position: 9
id: '5-resetgateway'
slug: 'Chirp Network/Blackbird/Quick start guide/5-resetgateway'
title: 'Blackbird Reset'
---

# Blackbird Reset

There are three ways to reset the Blackbird LoRaWAN gateway/miner: a simple reboot, a WiFi password reset, and a full factory reset. These can be performed using the hardware reset button or through the gateway Web UI.

## Hardware Reset Button

The Blackbird LoRaWAN gateway/miner has a hardware reset button, which can be used to perform the following reset actions:

![Reset button](Reset%20Button.jpg)

1. **Reboot**: To reboot the device, press the reset button momentarily. The device will restart automatically.

2. **WiFi Password Reset**: To reset the WiFi password to its default value, press and hold the reset button for 5 to 15 seconds. The LED will blink three times as a confirmation that the WiFi password has been reset.

__Please keep in mind that the WiFi password reset will took a significant amount of time to complete. Do not interrupt the process by pressing the reset button again, as this may cause the device to malfunction. After the process is completed you will see WiFi named Chirp-xxxxxx (where xxxxxx is the unique number of your miner, that you may use as a default password for WiFi connection).__

3. **Full Factory Reset**: To perform a full factory reset, press and hold the reset button for more than 15 seconds. The LED will blink seven times as a confirmation when the button is released, indicating that the factory reset has been performed.

## Gateway Web UI

![Web UI Reset](Reset%20WebUI.JPG)

You can also perform a Reboot, a WiFi password reset and a full factory reset through the gateway Web UI. Follow these steps:

1. Access the Blackbird Web UI by entering its IP address in your web browser.

2. Log in using your credentials.

3. Navigate to the "Settings" tab.

4. To reset the WiFi password, click on the "Reconfigure" button. A confirmation message will appear, and the WiFi password will be reset to its default value.

5. To perform a full factory reset, click on the "Reset" button. A confirmation message will appear, and the gateway/miner will be reset to its factory settings.

Please note that performing a full factory reset will erase all your configurations and data. After performing a full factory reset, you will need to reconfigure the gateway/miner and register it again with your Chirp account.
