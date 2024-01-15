Zomato Clone
------------

1st Part:
---------

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


2nd Part:
---------

-> Add "start":"parcel index.html" in package.json scripts file to use command npm start / npm run start instead of using npx parcel index.html for executing the code.

-> Whenever we don't know which command we need to run to see output and which bundler they are using on project we can refer in package.json file there we come to know which command is using on their project.

-> We need to use npm start for running code and for production we need to use npm run build we can't use npm build because start is the keyword given by parcel in react.


React Components
----------------
1. Class Based Components -> Older Way of Writing Components
2. Functional Components  -> Newer Way of Writing Components

Note : In Industry, Most of the Projects in now a days are using functional components.
----

Create Components Using JSX
---------------------------

Different Ways of writing Components
------------------------------------

a) {/* const Heading = () => (
    <h1>Hello World!</h1>
)

b) const Heading = () => <h1>Hello World!</h1>

c) const Heading = () => {
    return (
        <h1>Hello World!</h1>
    )
} */}

1. What is JSX?
A. -> JSX is not an HTML Script Language It's like HTML like syntax (or) XML syntax.
   -> It is not HTML in Javscript.
   -> We write JSX Syntax for components for better understanding and for browsers to understand and display output in webpages.
   -> We can use usestate, useEffect in JSX and whatever we write in JSX it can be converted into HTML Tags to understand by JS Runtime Engine and by Browsers.
   -> JSX can remove malicious data(Cross-Side Scripting) and it can remove threats that are getting from apis.

2. How Browsers Understand JSX to display Output?
A. Whatever we write code that can be converted into Javascript Object the converted code goes to JS run Engine and Browser will understand that code and renders the code, display Html tags in DOM and provdes output in webpage.

-> Browsers understand ECMA6 (ES6) in JavaScript. It's a pure JavaScript Language.

-> JSX(code) -> Babel Converting Code -> JS Object(like React.createElement) -> JS Engine -> HTML Element(Browser Understands Code)

-> There is a concept like how babel compiling behind the scenes

-> Babel is Transpiler / Compiler


3. If we want to write JSX in Multiple Lines there are different ways,

-> const Heading = () => [
    <h1>Hello Wolrd!</h1>,
    <h2>Hi</h1>
];

-> const Heading = () => (
    <div>
    <h1>Hello World!</h1>,
    <h1>Hi</h1>
);

-> const Heading = () => (
    <> -> fragments
    <h1>Hello World!</h1>
    <h1>Hi</h1>
);

-> const Heading = () => (
    <React.Fragement>
    <h1>Hello World!</h1>
    <h1>Hi</h1>
);

-> const Heading = () => [
    <h1 key='1'>Hello World!<h1>,
    <h1 key='2'>Hi</h1>
];


4. What makes React code Readable / Faster?
A. React Code is understandable because we are using JSX, Parcel, Here React is not doing anything it is Independently Existing, Most of the things are doing using JSX, Parcel, Babel.




