# Notes for PWA Tutorial

### Step 1
Create an app manifest. It is a simple JSON file that lives in the root of the application.

Display can be set to either standalone, or browser. It will dictate how your app is shown when started.

For icons you want to provide a list of various sizes so the device can determine which one it needs.

Link to all of the manifest options: https://www.youtube.com/redirect?event=video_description&v=AlEdGOLhuM8&redir_token=C8RB5WxBEZckBqbCulRw_c-rQGJ8MTU4MDc4NDY4M0AxNTgwNjk4Mjgz&q=https%3A%2F%2Fdevelopers.google.com%2Fweb%2Ffundamentals%2Fweb-app-manifest%2F

With our manifest and icons added, we should see the "Download to Homescreen" on mobile devices.

### Step 2
Setup your Service Workers

Service workers can load content offline, and use background sync. We can also setup push notifications. They are just a JS file, but they aren't typical.

They do not have access to the DOM. They run in the background, even when the application is closed. They operate on a separate thread that then main thread that is running the normal JS that interacts with the DOM.

They enable the "app-like" feel of a website.

You want to give them a global scope (added to root) so they can access anything they need. In the App.js you must register the service worker. 

Service workers have a lifecycle.

Service workers must be in an HTTPS environment.