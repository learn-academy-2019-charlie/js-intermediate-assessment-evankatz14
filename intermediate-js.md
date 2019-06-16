# Intermediate Javascript Assessments

### Without using Google answer the following:

1. What is the difference between .map() and .filter()?

.map() is a method that runs through an array, performs a function on each element within in the array, and pushs the updated elements into a new array.  The new array will typically be the same length as the original array.
.filter() is a method tha runs through an array, checks a conditional on each element, and pushs only the items that meet the conditional into a new array.  The new array will typically be smaller than the original.

2. Why would you use object destructuring?

object destructuring is useful when trying to access specific values of keys that are nested within an object.  It saves time from having to write out every aspect of an object that the desire info is nested with.
(object destructuring is also handy when rendering states in React)

3. What is the difference between var, let, and const?

var is the declaration method from pre ES6. var can be globally or locally scoped.  let and const were introduced in ES6.  
let is used to declare local variables that are allowed to be reassigned.
const is used to declare local variable that are not allowed to be reassigned (they are not inmuttable however)

4. Why is testing important?

Testing has many important functions in coding.  It provides a faster method to check if code is functioning properly, you do not need to console.log a bunch of different arguments over and over again to test.
Testing helps a coder consider the outlying situations in a function.  It forces a coder to ask themselves, "what are the situations when my function will not act as I expect it to?"
Because of the coder asking themselves this question, creating tests can help guide the creation of functions. 
Lastly, testing is common practice at companies to ensure proper functionality.  Thus it will be a valuable skill for us as junior developers and interviewees.

5. What is a higher order function?

a higher order function that either takes a function as an argument, or returns a function.

6. What is the difference between a class and an object?

an object is a container that can store multiple pieces of information, including both data and actions.
A class is blueprint for objects.  A class contains a constructor to develop data that is present in all objects of that class, as well as methods that are also built in to any object within that class.

7. What did you learn during the group project this week? Please include any additional feedback you may have.

I learned a lot about HTML and CSS since I have much less experience with these languages.  I also learned how fun working on a big project with a group of people can be. Finally, I learned how hard it can be to not take over driving while working with other people. 

### HTML/CSS Review questions: First, try to answer each question on your own then Google the answer to further your knowledge.

1. How do you link a CSS file to your HTML page?

utilize the <link> element.  Set rel = 'stylesheet' and href = "css file location (or url)"

2. What is the difference between a div and a span?

span is in-line, div is block-line

3. What is a CSS class? When should you use an id instead of a class?

a CSS class is a naming convention to designate a set of elements in HTML.  An id is also a designation tool that has higher precedence than class. This means that styling on an ID will override styling on a class.

4. Name 4 semantic HTML tags.

<p>
<h1>
<span>
<em>

5. What are three options for creating responsive design?

use the <meta> tag as so: <meta name="viewport" content="width=device-width, initial-scale=1.0">
when setting widths, use percentages instead of set sizes (px)
set text size using vw (viewport width), this sets text to be the size of a percentage of the current viewport width.

### Stretch: The following questions are potential interview questions. First, try to answer each question on your own then Google the answer to further your knowledge.

1. What is front end development? Can you identify any tools/skills that are uniquely required of front end developers?

Front end development is the computer coding of the aspects of a site or app that users actually see and interact with.  Front end devlopers need to be able to understand usability, readability, and aesthetics.

2. What is block scope in JavaScript?

Block scope is the area within conditional statements or function statements.  It is what is bewteen the {} (curly braces).

3. How would you explain the idea of "inheritance" in object oriented programming?

Inheritance is the practice of making child classes from existing classes.  A class that extends a parent class takes all of the attributes and methods assigned to the parent class and then can add to or modify from there.