Zomato Clone
------------

Steps To follow:
----------------
1 -> Create Parcel Bundler without using create-react-app dependency command.
2 -> Installed React, ReactDOM as dependencies without using CDN links.

Note :
------
Use CDN Development links mostly when we use development sceneraio, apart from this we can use CDN production links too.

CDN: (Content Delivery Network)
-------------------------------
It is used to control how browser handles crossorigin requests for a particular resource such as <script>, <tag>.

-> Fetching the resources from different domains to localBrowsers that served/display on HTML Page.
-> Suitable for publicly accessible resources.
-> If we need credentials / resources like cookies, HTTP authentication from different domains we need to give crossorigin = "use-credentials" otherwise we use crossorigin="anonymous" or Instead just use crossorigin.

3 -> Use type="module" in html to work with react.

Parcel Features:
----------------
-> Dev Build
-> Caching - Faster Builds
-> Optimization
-> Minification
-> HMR ( Hot Module Replacement) -> Refreshing webpage automatcally in output gives fast result
-> File watching algorithm -> Whenever we need to change title name we can change and ths algorithm is written in c++
-> Image Optimization
-> Bundling
-> Compress ( Remove all whitespaces from our code to deploy our code into production)
-> Differential Bundling -> when our website/app is hoisted, We can open our app in different web browser versions.
-> Diagnostcs -> Errors ( Parcel provide clean and readble errors)
-> Tree Shaking -> Remove Unused Code.
-> Same features are present in differnet dev and production bundlers.

.gitignore
----------
This is used to remove unwanted folders when we need to push into git repository because it contains large file size. When we want these large files we can install by using npm parcel index.html / npm install -> This command will fetch all dependenoies from package.json. 

Production Build:
-----------------
Command: npx parcel build index.html
-------
-> When we use this command it converts all the code into single link here optimization/minification works behind the scenes.
-> All the code that we see in dist folder whatever we seen in output we are getting those output from dist and parcel-cache these two files will communicates with each other and it gives to the javascript engine and browser understands the code finally diaplsy output in webpage.

-> When we delete parcel-cache, dist folders we regenerate automatically using dev dependency or build dependency or normal dependency commands.

-> When we use Production Build Command it takes some time to get files and output as result.

How to make our website /app compatable for all versions (older, newer versions)?
---------------------------------------------------------------------------------
Use "browserslist": [
    "last 2 chrome version"
] in Package.json

-> It will work only in last 2 latest versions of chrome devices.


