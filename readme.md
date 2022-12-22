# VR neglect training

This application aims to replace the screen with random.

This README.md explains the structure of the application and how it is engineered. This readme is subdivided into three headings. First is installation to explain get the application building and running. Secondly, is the architecture of the application explained. The third heading has troubleshooting guide, look here if you have some troubles. Like installing or get it running on VR. At last is getting the application running on a virtual reality system.


## Installation

This topic explains how to get started developing.
1. Clone the repository run: `git clone https://github.com/luukvankooten/vr-training.git`
2. Change the directory to vr-training run:`cd vr-training`
3. Run: `npm install`
4. After complete run: `npm run dev`


Your browser should open automatically and the following is shown


## Architecture

This topic explains the design of the application and the libraries used inside the project. First, the entire application is written in typescript, which is a superset of JavaScript. The choice to do the entire project in typescript is made because it is meant to reduce bug. Every file has comment above the with explaination what it does.

### Libaries:

#### parcel.js

parcel.js is the bundler used to build the web application. 
See their documentation for use: [website](https://parceljs.org)

#### babylon.js
Babylon.js is the rendering engine for the application. 
The website explains how to use it: [docs](https://doc.babylonjs.com).

### The directory structure

```
  node_modules/
    the installed packages by npm
  dist/
    the build output of parcel.js
  public/
    all the assets of the application which is publicly avialbe
  src/
    the source code of the application
    store/
      the code for the store which is heavily inspired by redux
    context/
      simple helper function that can be used.
    components/
      All the code for the user interface lives here which is also heavily inspired by react.
      ui/
        the current screen which the user see.
    selector/
      related to the store the selector
    actions/
      related to the store where actions are handeld
    middleware/
      related to the store the middleware for the store
```




