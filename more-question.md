### JavaScript Interview Questions

- What is Preload, preconnect, prefetch, pre-render?

   - preload – load content that's required for the intial render
    ### <link rel="preload" href="/public/home.js" as="script" />

   - The preconnect link relation type is used to indicate an origin that will be used to fetch required resources. Initiating an early connection, which includes the DNS lookup, TCP handshake, and optional TLS negotiation, allows the user agent to mask the high latency costs of establishing a connection.
    ### <link rel="preconnect" href="//example.com">
    ### <link rel="preconnect" href="//cdn.example.com" crossorigin>

   - The prefetch link relation type is used to identify a resource that might be required by the next navigation, and that the user agent SHOULD fetch, such that the user agent can deliver a faster response once the resource is requested in the future.
    ### <link rel="prefetch" href="//example.com/next-page.html" as="document" crossorigin="use-credentials">
    ### <link rel="prefetch" href="/library.js" as="script">

   - The prerender link relation type is used to identify a resource that might be required by the next navigation, and that the user agent SHOULD fetch and execute, such that the user agent can deliver a faster response once the resource is requested in the future.
    ### <link rel="prerender" href="//example.com/next-page.html">

- How can you do caching in website?


- What is Etag, Cache-Control, Document Fragment?

    ### ETag
    The ETag (or entity tag) HTTP response header is an identifier for a specific version of a resource. It lets caches be more efficient and save bandwidth, as a web server does not need to resend a full response if the content was not changed. Additionally, etags help to prevent simultaneous updates of a resource from overwriting each other ("mid-air collisions").

    ### DocumentFragment
    The DocumentFragment interface represents a minimal document object that has no parent.
    It is used as a lightweight version of Document that stores a segment of a document structure comprised of nodes just like a standard document. The key difference is due to the fact that the document fragment isn't part of the active document tree structure. Changes made to the fragment don't affect the document.

    EventTarget <- Node <- DocumentFragment

    ### Cache-Control
    The Cache-Control HTTP header field holds directives (instructions) — in both requests and responses — that control caching in browsers and shared caches (e.g. Proxies, CDNs).


- How to do Asset optimization? What is Image Compression? Diff b/w WebP vs PNG vs JPG?



- What is Memory Leak?


- Difference in between Repaint vs Rework?


- If a user clicks on a Button to fetch API, and if he clicks multiple times? How to cancel old API calls and keep the latest one result?


- How react make parallel API calls is using promise.allSettled()? How it’s working internally?




- What algorithm does Array.sort() uses? Output is the output for [1, null, 5, 2, undefined]
    ### O/p [1, 2, 5, null, undefined]

- What happens when we hit the URL? What is CRP?


- What are the events that we can use when website is loading? In-depth of CRP.


- Describe the differences between prototypal and classical inheritance in JavaScript?


- How does JavaScript handle asynchronous operations, and what are the mechanisms for managing them?


- What are SOLID principles?
- How do we use OOPs in JS?
- What are semantic HTML elements?
- What is srcSet in HTML?
- Difference b/w display:none and visibility:hidden?
- Basic Performance related discussion and questions.
- What is the use of new operator?
- Can we bind this in arrow function? What will happen if we use new operator with arrow function?
- What is difference b/w Map and Object?
- What is Closure, Event Loop, Hoisting, Currying?
- What are Web Core Vitals? How to improve them?
- Explain web performance metrics?
- Explain webpack build process?
- What will be the architecting an application to support multiple device?
- What is the Use of Headers in http request?
- What is render blocking resources?
- What is Event Capturing vs Event Delegation vs Event Bubbling?
- What are Symbols and Generators?
- What is  Web Components, Service Worker, Web Worker Progressive Web App?


### ReactJs Interview Questions*

- What are portals in ReactJs?
- How to implement infinite Scroll in ReactJs?
- How can you add event listener programatically?
- How react works? How component gets render in using virtual DOM? What is Virtual DOM?
- What is Differ Algorithm & Reconciliation Algorithm
- What is React Fibre and render works?
- Why CSR is better than SSR?
- Explain how SSR works, it's advantages and what is hydration?
- How are different ways to optimize react application? On SSR and client side both.
- Given a real life example of OOPs in your react application?
- What is the difference b/w useMemo vs useCallback()
- What is useRef() and it's useCases?
- Performance - Lazy loading, Code Splitting, Chunking, Suspense, Asset management, Bundle, Webpack, async-defer scripts, pre-fetch, pre-load, etc
- What are HOC in React?
- What is Render prop pattern?
- What are the Alternatives to prop drilling ? Like HOC and Context API?
- What is React.memo? Explain it’s working?
- What is useImperativeHandle, useLayoutEffect, useDebugValue hooks?
- Class based vs function based component react?
- What are error boundaries in react?
- Explain Lifecycle methods in ReactJS?
- State management libraries are Redux vs Redux tool kit vs Redux Thunk vs Zustand in ReactJs?
- What is React-router and RBAC (route-based-access-control)? How to implement private protected routes?
- Explain React testing ways? Like Unit-testing, JEST, react-testing-library etc.



### REACTJS Machine Coding Round

1. Circle Overlap detect. Wherever user click on a any section, at that position a circle will be created, if 2 circle overalap, change the color of previous circle to red from yellow.
2. Create a Photo tagging system, just like FaceBook photo tag, where user can click of any position in image and then input box will open at that place, when he submits data the tag will be shown at that place, hovering over tag will show that data
3. Create a ProgressBar which start/stop/resume/reset functionality.
4. Create a Stop Watch which start/stop/resume/reset functionality.
5. Create a button and click of that button, add ProgressBar (10% increase in every 1 second). User can add upto N ProgressBar by clicking in button. Progress bar will start only if there are not more than 3 ProgressBar in progress. Rest ProgressBar will starts in sequentially order. Note - At most at a time, only maximum 3 ProgressBar can be in running state.
6. RoadSideCoder Youtube Channel (17 Machine Coding Questions playlist -> VERY IMPORTANT AND COMMONLY ASKED)
7. Create Folder structure structure (VS code like, Checkout RoadSider Coder channel)
8. Normal E-commerce App with Routing, Listing, Detail page, etc
9. Slider Component 
10. Jira Board 
11. Checkout Stepper
12. Comments section
13. Flip Card on Click
14. Tic Tac Toe
15. Analog Clock
16. Create functionality to change all text on page to different translations
17. Design grid using HTML/CSS and Javascript with search and sort, event bubbling (Amazon onsite)
18. Make calendar of any Month like Date Picker
19. Design Pop Over
20. Typeahead / autocomplete using trie
21. Snake ladder board
22. Implement Nested Checkboxes (parent is checked, children are checked and vice versa. Must use actual checkbox input)
23. Implement Connect Four
24. Implement a poll widget
25. Implement Event Emitter
26. Implement a Hashtable
27. componentDidUpdate() Polyfill for Functional based component!


### JavaScript DSA

1. To make chaining logic of function like: calculator().add(4).subtract(3).multiply(3); It can be achieved by returning this from every methods of object
2. Create a cache fun that takes a function as parameter and cache the result, if parameter changes then only the parameter function is called otherwise cached result is returned.
3. Flat array to given length
4. Shuffle array in random manner
5. Write a function printAllKeysInObject(obj) that outputs the given object into this pattern: { 'a.b': 1, 'e.f.g': 2, 'e.f.h': 3 }
6. Currying Problem: Define sum function ending with (). Example -> sum(0)(1)(2)(3)(4)(5)()
7. Currying Problem: Define sum function ending without (). Example -> sum(0)(1)(2)(3)(4)(5)
8. Currying Problem: Create a sum function such a way that it can be called with any pattern like show below: curriedSum(1, 2, 3), curriedSum(1)(2,3), curriedSum(1)(2)(3) [All 3 cases output will be 6]
* Write polyfill for DeepCopy and ShallowCopy
1. Create polyfill for Array Map()
2. Create polyfill for Array Sort()
3. Create polyfill for Array Reduce()
4. Create a Polyfill of Promise.all()
5. Create a Polyfill of Promise.allSettled()
6. Create a Polyfill of Function.bind()
7. Create a Polyfill of Promise.any()
8. Write polyfill for debounce function.
9. Write polyfill for throttle function.
10. Determine whether a given callback function (heavyProcess in this case) is fast or slow based on a specified timer.
11. Check path exists or not in given Object. Write method findPath(key, path) and it return value if path exists for the given object, else return undefined value. Ex -> findPath(obj, 'a.b.c') where obj ={ a: {b: c: 10}}
12. Write Throttle function without the use of setTimeout() and clearTimeout() Use timestamp instead of setTimeout.
13. Flatten nested Javascript Array without using Array.prototype.flat()
14. Object flatten to all levels Recursively de-structure if the type of value is an object
15. Create two box in vanilla JS one inside the other box and then hide middle box using CSS only.
16. Find the nth largest number from a given array.
17. Check whether given two strings are anagram or not.
18. Return the length of last word in given string.
19. Reverse all the vowels in reverse order in given string.
20. Find the union and intersection of given 2 sorted arrays. Example: a = [1,3,4,6,7], b = [2,3,4,5], Union is [3,4] and Intersection is [1,2,5,6,7]
21. Find who wins the election ['a','a','b','b','a','b','c']. If multiple candidates have same votes, then first one wins in order of occurrence.


### Round 1: DSA (Karan Jain)

- *Problem Solving:* Write Polyfill of bind method

JS
const obj = {
    name: 'Gourav',
    methodOne: function() {
        console.log('method1 Running')
    }
}

obj.methodOne()

function test(age) {
    console.log(this.name, age)
}

Function.prototype.mybind = function (thisContext, ...argsArray) {
    let parentFunction = this
    return function bindedFun(...funArgs) {
        thisContext.parentFunction() 
        //return parentFunction.apply(thisContext, [...argsArray, ...funArgs])
        //parentFunction([...argsArray, ...funArgs])
    }
}

let bindedFunc = test.mybind(obj);
bindedFunc(29)


- *Problem Solving:* Currying problem

JS
function curry(func) {
  // implement this function
  return function myCurried(...args) {
      if(args.length >= func.length) {
           return func(...args)
      } else {
          return function secondCurried(...args2) {
              let finalArgs = [...args, ...args2]
              return myCurried(...finalArgs)
          }
      }
  }
}

// sample function
function test(a,b,c) {
  // some logic
  return a+b+c;
}

const curriedFunction = curry(test);

// case 1
const res1 = curriedFunction(1,2,3);
console.log("RESULT 1: ", res1)
// res1 === 6

// case 2
const res2 = curriedFunction(1,2)(3);
console.log("RESULT 2: ", res2)// res2 === 6

// case 3
const res3 = curriedFunction(1)(2)(5);
console.log("RESULT 3: ", res3)// res2 === 6
// res3 === 6


- *Machine Coding:* Create a stop watch with Pause, Play, Stop, Reset feature


### Round 2: LLD

- *Machine Coding:* Create WordGuess game (https://wordleunlimited.org)

![Screenshot 2024-03-19 at 6.48.34 PM.png](file:///Users/gouravhammad/.config/joplin-desktop/resources/452e40424dd24b0c9561cfc130bdb679.png) 

- - Handle success/error cases in above problem.  
        - How to make it scalable?  
        - How you will design Keyword for above problem?  
        - Any possible optimization in code?
- What is componentDidUpdate() method does in class based component? How to achieve it in functional component (Create Polyfill for it)


### Round 3: HLD

- Tell me something about your recent project and it's tech
- How to improve performance of  tekion.com website.
- *Machine Coding:* Create a dynamic grid boxes by taking row and columns as input? How to optimize it's rendering?


### Round 4: HM (Manikanta Tummalapenta from CRM team)

- Talked about my past projects, experience, etc
- Explain your current project architecture?
- *System Design:* Flipkart Search Bar
    - Multiple follow up questions on it like pagination, API response, etc

![Screenshot 2024-04-03 at 4.56.37 PM.png](file:///Users/gouravhammad/.config/joplin-desktop/resources/b191d94f98d34b349150bdbb44c699af.png)

- *System Design:* Verbally for LinkedIn Notification section
- Lifecycle development of any feature at Cars24?
- Why you wanna join Tekion?
- How did you resolve conflict within team? Share any example.