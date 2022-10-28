<h1> Task 1 </h1>
<h1>What is Browser?</h1>

Browser is software which is allows us to find, access, render and view websites on the internet. Some popular browsers are Google Chrome, Mozilla Firefox, Safari, Microsoft Internet Explorer etc.

<h1>What is the main functionality of browser?</h1>
Browsers are primarily used to display and access websites. As well as we can created with programming languages such as HTML and XML. Browsers converts HTTP web pages and websites into human-readable content. 

Web browsers function starts with user entering the URL (Uniform resource Locator) into the address bar in the top of the browser.
Ex. www.google.com

Once the resource has been located and interpreted the browser will display the content to the user. The browser application converts content such as HTML, CSS, and images to an interactive file in a process called rendering. Browsers can interpret and display content such as video, images, text, hyperlinks, and XML files.

Below are some of the main functions of web browsers

1. The main task is to collect information from the Internet and make it accessible to users.
2. A web browser can be used to visit any website. When we type a URL into a browser, the web server redirects us to that website.
3. Plugins are available on the web browser to run Java applets and flash content.
4. It simplifies Internet surfing because once we arrive at a website, we can quickly check the hyperlinks and access a wealth of information.
5. Internal cache is used by browsers and is saved so that the user can open the same webpage multiple times without losing any data.
6. A web browser can open multiple web pages at the same time.
7. Back, forward, reload, stop reload, home, and other options are available on these web browsers, making them simple and convenient to use.

<h1>High Level Components of a browser</h1>

The browser's main components are:

<h3>1. The user interface:</h3> this includes the address bar, back/forward button, bookmarking menu, etc. Every part of the browser display except the window where you see the requested page.
<h3>2. The browser engine:</h3> marshals actions between the UI and the rendering engine.
<h3>3. The rendering engine:</h3> responsible for displaying requested content. For example if the requested content is HTML, the rendering engine parses HTML and CSS, and displays the parsed content on the screen.
<h3>4. Networking:</h3> for network calls such as HTTP requests, using different implementations for different platform behind a platform-independent interface.
<h3>5. UI backend:</h3> used for drawing basic widgets like combo boxes and windows. This backend exposes a generic interface that is not platform specific. Underneath it uses operating system user interface methods.
<h3>6. JavaScript interpreter:</h3> Used to parse and execute JavaScript code.
<h3>7. Data storage:</h3> This is a persistence layer. The browser may need to save all sorts of data locally, such as cookies. Browsers also support storage mechanisms such as localStorage, IndexedDB, WebSQL and FileSystem.

<h1>Rendering engines</h1>
Different browsers use different rendering engines: Internet Explorer uses Trident, Firefox uses Gecko, Safari uses WebKit. Chrome and Opera (from version 15) use Blink, a fork of WebKit.

<h3>The Main Flow</h3>

The rendering engine will start getting the contents of the requested document from the networking layer. This will usually be done in 8kB chunks.

![bPlYx9xODQH4X1KuUNpc-_1_](https://user-images.githubusercontent.com/71999624/193417850-01dd011f-c604-4fa5-a9f0-f01e8d95a511.jpg)

The rendering engine will start parsing the HTML document and convert elements to DOM nodes in a tree called the "content tree". The engine will parse the style data, both in external CSS files and in style elements. Styling information together with visual instructions in the HTML will be used to create another tree: the render tree.

The render tree contains rectangles with visual attributes like color and dimensions. The rectangles are in the right order to be displayed on the screen.

After the construction of the render tree it goes through a "layout" process. This means giving each node the exact coordinates where it should appear on the screen. The next stage is painting - the render tree will be traversed and each node will be painted using the UI backend layer.

It's important to understand that this is a gradual process. For better user experience, the rendering engine will try to display contents on the screen as soon as possible. It will not wait until all HTML is parsed before starting to build and layout the render tree. Parts of the content will be parsed and displayed, while the process continues with the rest of the contents that keeps coming from the network.

![Tbif2mUJCUVyPdyXntZk](https://user-images.githubusercontent.com/71999624/193417967-8c57d552-a4f9-41bd-8274-60b83d659cbe.jpg)

<h3>Parsing - general</h3>

Since parsing is a very significant process within the rendering engine, we will go into it a little more deeply. Let's begin with a little introduction about parsing.

Parsing a document means translating it to a structure the code can use. The result of parsing is usually a tree of nodes that represent the structure of the document. This is called a parse tree or a syntax tree.

<h3>Types of parsers</h3>

There are two types of parsers: top down parsers and bottom up parsers. An intuitive explanation is that top down parsers examine the high level structure of the syntax and try to find a rule match. Bottom up parsers start with the input and gradually transform it into the syntax rules, starting from the low level rules until high level rules are met.

The top down parser will start from the higher level rule: it will identify 2 + 3 as an expression. It will then identify 2 + 3 - 1 as an expression (the process of identifying the expression evolves, matching the other rules, but the start point is the highest level rule).

The bottom up parser will scan the input until a rule is matched. It will then replace the matching input with the rule. This will go on until the end of the input. The partly matched expression is placed on the parser's stack.

<h3>HTML Parser</h3>
The job of the HTML parser is to parse the HTML markup into a parse tree.

<h4>The parsing algorithm</h4>
As we saw in the previous sections, HTML cannot be parsed using the regular top down or bottom up parsers.

The reasons are:

The forgiving nature of the language.
The fact that browsers have traditional error tolerance to support well known cases of invalid HTML.
The parsing process is reentrant. For other languages, the source doesn't change during parsing, but in HTML, dynamic code (such as script elements containing document.write() calls) can add extra tokens, so the parsing process actually modifies the input.
Unable to use the regular parsing techniques, browsers create custom parsers for parsing HTML.

<h1>CSS parsing</h1>

Remember the parsing concepts in the introduction? Well, unlike HTML, CSS is a context free grammar and can be parsed using the types of parsers described in the introduction

<h1>The order of processing scripts</h1>

<h3>Scripts</h3>
The model of the web is synchronous. Authors expect scripts to be parsed and executed immediately when the parser reaches a <script> tag. The parsing of the document halts until the script has been executed. If the script is external then the resource must first be fetched from the network - this is also done synchronously, and parsing halts until the resource is fetched. This was the model for many years and is also specified in HTML4 and 5 specifications. Authors can add the "defer" attribute to a script, in which case it will not halt document parsing and will execute after the document is parsed. HTML5 adds an option to mark the script as asynchronous so it will be parsed and executed by a different thread.
  
<hq>Layout</h1>
When the renderer is created and added to the tree, it does not have a position and size. Calculating these values is called layout or reflow.

HTML uses a flow based layout model, meaning that most of the time it is possible to compute the geometry in a single pass. Elements later "in the flow" typically do not affect the geometry of elements that are earlier "in the flow", so layout can proceed left-to-right, top-to-bottom through the document. There are exceptions: for example, HTML tables may require more than one pass.

The coordinate system is relative to the root frame. Top and left coordinates are used.

Layout is a recursive process. It begins at the root renderer, which corresponds to the <html> element of the HTML document. Layout continues recursively through some or all of the frame hierarchy, computing geometric information for each renderer that requires it.

The position of the root renderer is 0,0 and its dimensions are the viewport - the visible part of the browser window.

All renderers have a "layout" or "reflow" method, each renderer invokes the layout method of its children that need layout.

  
<h1>Painting</h1>
In the painting stage, the render tree is traversed and the renderer's "paint()" method is called to display content on the screen. Painting uses the UI infrastructure component.
  
<h3>The painting order</h3>
CSS2 defines the order of the painting process. This is actually the order in which the elements are stacked in the stacking contexts. This order affects painting since the stacks are painted from back to front. The stacking order of a block renderer is:

background color
background image
border
children
outline
