# Maps & Local storage exercise

----

## Task

Prepare an Ionic 2/3 app to display Google maps with user’s current location based on GPS .

Acceptance Criteria:


- [x] Use Ionic Native plugin for Geolocation
- [x] The user location should have a circle around user location with radius proportional to maps zoom level.
- [x] Geopoint changes have to be written in a database of your choice
- [x] On failing to get GPS data, an empty view has to be displayed to notify user to turn on Location services.


Using lazy loading and optimizing the app performance is a plus. Use your artistic discretion to design the view. No further explanation is provided to complete the task.


## Abstract

In this example, the app has a map in two pages `Home` and `Contact`.

The `MapProvider` keeps only one map instance, and reuse it.

----

## How to run this example?

```
$> git clone https://github.com/

$> cd maps-exercise

// config.xml and package.json has the API KEY for google Maps

$> npm i

$> ionic cordova prepare

$> ionic cordova run android

```
---

## Tested on

- [x] Android Device
- [x] Android Simulator
- [] IOS

**I have an Ubuntu system. I could only test Android platform**


## Files and Functionality


File | Description
---------|---------
app/main.ts | is the entry
app/app.component.ts | Main app component. Checks /requests for location access. <br>If the request is accepted app lazy-loads the Tabs, else app exits after displaying an error.
pages/tabs | The tabs component. Houses Home and History tabs..
pages/home | Home component. If location is disabled, display an error.<br> If location is available shows Google map. Google map camera is focussed to the availalbe location.<br> There is a geolocation handler that records change in location every 15 seconds (updates prior to 15 seconds are discarded)<br>Every time location is updated (15-sec window), the map camera is re-set to the new location.<br>The location is also recorded into an arry in local storage (latest first). This implementation of storing points is just function and is not in the most optimal form.<br>
pages/history | Reads the location array from local storage and displays into a scroll list.<br> The scroll-list is *NOT* auto-updated and needs a screen pull-down to refresh.
