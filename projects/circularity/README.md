Circularity
===

A motion poem using random number generation and velocity applied to circles...

Also at: http://bit.ly/op-spark-circularity

**Table of Contents**

- [Circularity](#circularity)
  - [Prerequisites](#prerequisistes)
  - [Installation](#installation)
  - [Overview](#overview)
  - [Loops To The Rescue](#loops-to-the-rescue)
    - [While Loops](#while-loops)
    - [For Loops](#for-loops)
    - [Arrays](#arrays)
    - [Iterating over Arrays](#Iterating-over-arrays)
  - [TODOs](#todos)
    - [TODO 1 : Declare Our Variables](#todo-1--declare-our-variables)
    - [TODO 2 : Create a function to draw a circle](#todo-2--create-a-function-to-draw-a-circle)
    - [TODO 3 : Draw 3 circles!](#todo-3--draw-3-circles!)
    - [TODO 4 : Move your circles](#todo-4--move-your-circles)
    - [TODO 5 : Keep your circles in the screen](#todo-5--keep-your-circles-in-the-screen)
    - [TODO 6 : Take a break!](#todo-6--take-a-break)
    - [TODO 7 : Draw 100 circles](#todo-7--draw-100-circles)
    - [TODO 8 : Iterate over the array](#todo-8--Iterate-over-the-array)
    - [TODO 9 : Move all our circles and keep them all in bounds](#todo-9--move-all-our-circles-and-keep-them-all-in-bounds)

## Prerequisites
* Make sure your github account is linked to Greenlight
* You have a coding workspace. You can follow instructions found [here](https://github.com/OperationSpark/github-ide-setup/blob/master/README.md) to create an online coding workspace in Codenvy or offline using VS Code.
* You have the `os` tool installed. To verify if you have the `os` tool installed, go to the bash terminal in your coding workspace and type in the command: `os --version`. If you receive an error that says, `os install command not found` the opspark CLI is not installed. To install it, enter the command `npm intall -g opspark` in your bash terminal. When the installation is complete try `os --version` again.

## Installation
* go to your bash terminal and type in the command `os install`. Hit enter.
* If prompted, login with your github credentials
* Use your arrow keys to highlight your course and hit enter. hit enter again to confirm.
* Use your arrow keys to highlight `circularity` and hit enter. hit enter again to confirm.
* open up the index.html file and press Run at the top of your workspace. You will be editing this file.

## Overview

The portrait of the programmer as a young artist continues, using random number generation, color, and velocity applied to circles in this little motion poem. Using the draw line API, you'll create a cool randomized piece of art. 

Some concepts you'll practice and learn:
* Drawing with CreateJS and our draw utility.
* Leveraging the power of built-in and 3rd party API (DRY), like Math and opspark-draw.
* Variable declaration and initialization.
* Function invocation and passing arguments to functions.
* Looping.
* Conditional statements - making decisions in code.
* Recognizing code blocks.
* Calculating coordinates in a cartesian system.
* Calculating boundaries.
* Animating.

Note that **this app will run _in a web browser_**, preferably Chrome.

### Initializing Our App

Starting up an application often takes a few steps of:

* Importing some libraries of code.
* Loading some external data.
* Declaring and initializing some variables for use in our app.

We've setup the app a little bit already, importing some libraries and initializing the basic plumbing in the background, and we won't be loading any external data in our app, so let's move on to declaring, initializing and using our variables.

Our motion poem will contain 100 randomly drawn circles, arranged randomly within the area of our canvas.  The big takeaway in this project is **DRY**: Don't repeat yourself!

We want to draw 100 circles, but we don't want to write the code to do so 100 times.  That would be a silly waste of time and effort, making the code very difficult to maintain.

## Loops To The Rescue

Every programming language comes with features built-in to help you implement repetative processes, like looping over a list of data, or drawing a circle 100 times.  If we want to do anything more than once, we can use a _loop_, and is most often best practice to do so. 

Loops are a great tool to repeat a `{ code block }` a specific number of times and JavaScript comes with a number of built in loops, like `for`, `for-in`, and `while`. Additionally, many 3rd party libraries, like <a href="https://lodash.com/">_lodash_</a>, have implementations of other types of loops. We're going to use the `while` and `for` loops to accomplish our tasks for this project. 

To repeatedly execute some code using a loop, we answer 3 questions:

**1. What do we want to repeat?**

**2. What changes from loop to loop?**

**3. How long will the loop run?**

### While Loops
Let's start with a `while` loop. Suppose I wanted to print the messages `"pushups done: 1"`, `"pushups done: 2"`, and so on until a final message of `"pushups done: 10"`. To *hard-code* this, we could write:

```javascript
console.log("pushups done: 1");
console.log("pushups done: 2");
//... so on
console.log("pushups done: 10");
```

To do this using a loop we need answers to the 3 questions:

**What do we want to repeat?** `console.log()` a message about how many pushups we've done.

**What changes from loop to loop?** The number of pushups that we've done

**How long will the loop run?** Until we've done 10 pushups

Using a `while` loop, we can accomplish this in only 4 lines of code, rather than 10

````javascript
// use a Variable to keep track of how many pushups have been done
var pushupsDone = 1;

// Keep repeating while (as long as) pushupsDone is less than or equal to 10
while(pushupsDone <= 10) {

	// use the Variable `pushupsDone` instead of a hard coded Number
	console.log("pushups done: " + pushupsDone);	

	// increase `pushupsDone` after each repetition
	pushupsDone = pushupsDone + 1;						
}
````

How would you modify this loop so that it does `100` pushups instead of just `10`?

### For Loops
Another kind of loop we will use is the `for` loop. The for loops takes the components of a while loop pattern used in the previous example and condenses it into one line. To produce the same result as above using a `for` loop we could write:

````javascript
for(var pushupsDone = 1; pushupsDone <= 10; pushupsDone++) {
	console.log("pushups done: " + pushupsDone);	
}
````

After the keyword `for` are parentheses and curly braces which form a `{ code block }`. Like the `while` loop above, the `{ code block }` contains the code that we wish to repeat. The parentheses then takes the other three lines of code and lists them in the following order: 

* **Start** : `var pushupsDone = 1;`
	* Use the Variable `pushupsDone` to keep track of how many loops we've done.
* **Stop** : `pushupsDone <= 10`
	* Keep repeating while (as long as) `pushupsDone` is less than or equal to `10`
* **Update** : `pushupsDone++;`
	* increase `pushupsDone` *after* each repetition.
	* `pushupsDone++;` is shorthand for `pushupsDone = pushupsDone + 1;`, and you'll see the `++` or `--` operators used often in code to accomplish this type of pattern.

### Arrays

For-loops also provide a convenient way to access elements of an Array one at a time. Arrays are *zero-indexed* lists of data. Basically, an Array acts as a container, into which we can throw objects, like strings, numbers, or circles. We call the things we throw into Arrays, _items_ or _elements_, as in, the _elements_ of our Array. Arrays are contained within square brackets `[ ]` and are stored in variables.

````javascript
var friends = ['John', 'Max', 'George', 'Ben', 'Steve', 'Brian'];
````

To retrieve an individual _element_ from an Array, we can use *Bracket Notation* which looks like this:

```javascript
arrayName[index] 	// Bracket Notation
```

The `index` is a value's position in the Array. The first value's position is `0`, not `1`. So, we can access the elements of the `friends` Array like so:

````javascript
friends[0];			// returns "John"
friends[1];			// returns "Max"
// so on...
friends[friends.length-1];	// returns "Brian". 
````

The `index` for the final line of code is calculated using the `friends.length` property which always returns the number of elements in the Array, in this case `6`. Therefore, this calculated index is `6 - 1 === 5`. 

**Starting at `0`, count the indexes for the value of the `friends` Array and confirm that the last index is in fact `5`.**

### Iterating over Arrays

Suppose I wanted to print out a message saying `"Hello John"`, `"Hello Max"` and so on with _every_ value in the array. I could hard code this by writing:

```javascript
console.log("Hello " + friends[0]);	// "Hello John"
console.log("Hello " + friends[1]);	// "Hello Max"
// so on...
console.log("Hello " + friends[friends.length-1]);	// "Hello Brian"
```

But this is very repetitive. Using loops we can accomplish the same result. First, we must answer the 3 questions:

**What do we want to repeat?** `console.log()` a message saying `"Hello"` to each name in the `friends` Array

**What changes from loop to loop?** The Numbered `index` used in Bracket Notation which changes the name we are accessing from the `friends` Array

**How long will the loop run?** Until we've said `"Hello"` to every name in the `friends` Array.

Using a `while` loop, the solution would then look like this:

````javascript
// use a Variable to keep track of the friend index we are accessing. The first index is 0
var friendIndex = 0;

// Keep repeating while (as long as) index is less than or equal to the last index of the Array, calculated using the friends.length property
while(friendIndex <= friends.length - 1) {

	// use the Variable `friendIndex` instead of a hard coded Number
	console.log("Hello " + friends[friendIndex]);

	// increase `friendIndex` after each repetition
	friendIndex++;						
}
````

This is called *iterating*. Iterating is the process of accessing values of an Array using a loop. This works by using the counter variable of a for loop (often named `i` - short for index) as a placeholder for the numbered index we want to access. Achieving the same result using a `for` loop would look like this:

````javascript
for (var i = 0; i <= friends.length - 1; i++) {
    console.log("Hello " + friends[i]);
}
````

***

### TODOs

To run the program **right-click** on the file `index.html` and select "Preview". All of our coding will happen in the `js/init.js` file.

#### TODO 1 : Declare Our Variables

Start by opening the `js/init.js` file. We will do all our coding in this file. Then, find TODO 1.

The goal of this project is to create 100 animated circles. Before we get ahead of ourselves, let's create one circle. Declare a variable to hold that circle (we will deal with initializing it later). Also we want to create an empty array to hold our circles, more on that later:

Find **TODO 1** and declare our variables like so:

````javascript
// other code...

// TODO 1: Declare our variables //
var circle;		// variable to hold a single circle when creating circles / iterating
var circles = [];	// variable to store all circles in one Array

// other code...
````

#### TODO 2 : Create a function to draw a circle

We will want to draw many circles in this project so putting the code to draw one circle inside a **function** will make the code much more re-usable! We've created a variable for you called `drawCircle` to hold our function. 

Under **TODO: 2** declare a Function `drawCircle`. It should have no Parameters. When called, it should execute the sequence below for creating and drawing a randomly sized `circle` and giving it a random velocity.

````javascript
// Code to draw a circle
circle = draw.randomCircleInArea(canvas, true, true, '#999', 2);
physikz.addRandomVelocity(circle, canvas);
view.addChild(circle);
circles.push(circle);

````

##### What does this code actually do?

First we call a function from the `draw` library: a collection of functions that allow us to draw various shapes on our `canvas`. This method, `draw.randomCircleInArea` will draw a circle of random size, color, and location within the screen along with a few other settings. Check out the parameters of the function below:

    randomCircleInArea(area, randomizeAlpha, addCross, borderColor, borderThickness, randomRadialProps)
    
We temporarily store the output of the function in `circle`. We then use the `physikz` library, a library of functions that provide motion to canvas drawings, to add a random velocity and direction to our circle.

To get the circle to appear on the screen we add the circle as a *child* of `view` (Think of the parent <-> child relationship of HTML elements!).

Lastly we save each new circle in an array using the `.push()` method. Doing so keeps all circles that we make together in one location which will be very useful very soon!

#### TODO 3 : Draw 5 circles!

Now, call your new Function: You can call the function using the following syntax:

```javascript
functionCallName();
```

##### Save your code, Refresh your game

You should now see 1 circle appear. Call the function 4 more times so that you have a total of 5 circles.

For now, by copying and pasting these function calls we are violating the **DRY Rule: D**ont **R**epeat **Y**ourself. Keep this in mind as we move on. We'll find a better way to do this!

#### TODO 4 : Move your circles

Awesome, let's do some fun stuff with our circles now.  Find the `function update()` where we will write code to animate our circles. 

Remember that our `update()` method is called 60 times per second (also referred to as 60 ticks per second). To get our circles to move we will use the `physikz.updatePosition( <objectToMove> )` method which accepts a circle as an argument. 

However, our circles are all stored in the `circles` **Array**. So, to retrieve an individual circle from our `circles` Array, we must use _Bracket Notation_:

	circles[ <index> ]

Below is an example of passing the first circle in the array to the function - how can you call this function on the 5 circles in our `circles` array?

````javascript
function update() {
    // TODO 4 : Update the circle's position //
    physikz.updatePosition(circles[0]);
    // code to call the function on the other 4 circles...
}
````

#### TODO 5 : Keep your circles in the screen 

##### Lesson Time! Cartesian Coordinates

Our next challenge is to keep the circles in our screen. To do so we must understand the Cartesian Coordinates of a computer screen. 

A computer screen is nothing more than a graph with an *x-axis* and a *y-axis* measured in units of *pixels*. A computer screen may be composed of millions of pixels so understanding this coordinate system is vital to accurately place animations on the screen. 

The *origin*, where the x-axis and y-axis intersect at 0, is always located in the top left corner of the browser window. As you move accross the screen from left to right, x values of pixels increase. As you move down the screen from top to bottom, the y values of pixels increases. 

##### TODO 5 Part 1) Call game.checkCirclePosition on each of your circles

We have created a function for you called `game.checkCirclePosition`. The function accepts a `circle` as an argument and uses a series of `if` statements to determine if the circle is within the bounds of the `canvas`. If a circle leaves the bounds of the screen it will appear on the opposite side of where it exited. 

For example, if a circle leaves the `canvas` along the _right_ border, we need to place the circle at the _left_ border. We have provided code to check this for you:

````javascript
if (circle.x > canvas.width) {
    circle.x = 0;
}

````

Within the `update` function call the `game.checkCirclePosition()` function, passing in each of the 5 circles to the function using bracket notation.

##### TODO 5 Part 2) Complete the function to keep your circles in the screen

You'll notice that the function is incomplete. It only checks the right border! To do this for each border, you'll have to make use of the following pieces of data:

    canvas.width    // The the width of our canvas.
    canvas.height   // The height of our canvas.
    circle.x        // The circle's position along the x-axis, good for testing the right and left side borders.
    circle.y        // The circle's position along the y-axis, good for testing the top and bottom borders.
    circle.radius   // Each circle is of a different size, so the radius will provide this information to you. 
    
<img src="img/screenBounds.png" height="300px">

The `canvas` represents the blank screen and allows us to add drawings to it. The canvas has 2 very important *properties* `.width` and `.height` that calculate the size of the window which may change depending on screen resolution or screen size.

Back in the `game.checkCirclePosition` function write a test for each border of the canvas that checks if the circle has fully exited the canvas by _that_ border. Using a chain of `if`, `else-if` statements, you'll need one test for each border, right-side, left-side, top, and bottom. If a circle leaves the canvas by one of its borders, you need to place the circle fully off the canvas at the opposite border.  Dig?

The best way to start this is to hack away, testing one border at a time!

CHALLENGE: The circle is centered around its own x and y position so we can find where its outer edges are located within the canvas by adding or subtracting its radius from its own x or y value. Use this information to make the circle's smoothly exit and enter the screen.

#### TODO 6 : Take a break!

Congrats! You have made a beautiful program that creates 5 circles, animates them, and keeps them within the screen. Take a 10 minute break from coding and reflect on the code that you have just written. Do you understand what each component does? 

When writing large programs it is a good practice to start small and work your way up to the full program. So far we have been able to create 5 circles, move them, and keep them in our screen's view. But what if we wanted our program to run with 100 circles? 

#### TODO 7 : Draw 100 circles

A loop should do the job! Here is the basic outline of a while loop and a for loop that each run 10 times:

````javascript
var counter = 0; 
while (counter < 10) {
    // do something
    counter++
}

for (var counter = 0; counter < 10; counter++) {
    // do something
}
````

Below **TODO 3** delete your calls to the `drawCircle` function and replace them with a loop that will loop **100** times and call the `drawCircle` function each time. Feel free to choose whichever loop you want!

#### TODO 8 : Iterate over the array

Now that we have 100 circles, we need a way to move all 100 circles and keep all 100 circles within the screen without calling on each circle individually. **Iterating** is the way to go!

Iteration is the process of accessing every element in an array and performing some action with that element. In our case, we want to access every `circle` from our `circles` array and apply the `physikz.updatePosition(circle)` function on each circle. Since this is a repetitive action, a loop is involved!

To iterate we can follow this pattern

```javascript

for (var i = 0; i < myArray.length; i++) {
    var eachValue = myArray[i];
    
    // code to repeat using eachValue
}
```
How can we apply this pattern to our `circles` array? What code do we want to execute for each value?

Within the `update` function, below **TODO 8**, follow the pattern above and create a loop that will iterate over the `circles` array and create a variable `var eachCircle` for each circle in the Array. 

#### TODO 9 : Move all our circles and keep them all in bounds

Awesome job! Now that we have our loop in place and we are iterating over our `circles` Array, let's use the `circle` that we pull out on each loop to do some cool stuff!

1. Within the loop that you just created, call the `physikz.updatePosition(eachCircle)` function.
2. Then, call the `game.checkCirclePosition(eachCircle)` function.
3. Delete your calls to those functions from **TODO 4** and **TODO 5**
4. Sit back and relax

Congrats!

&copy; Operation Spark 2015
