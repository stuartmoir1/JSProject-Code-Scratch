use main

db.data.drop();

db.data.insert([
  {
    "name": "object",
    "description": "A self-contained component that contains properties and methods needed to make a certain type of data useful.",
    "keywords": ["properties", "methods"],
    "image": "",
    "tags": ["object-oriented programming", "class"],
    "add_info": "Software objects are conceptually similar to real-world objects: An object’s properties are what it knows and its methods are what it can do. they too consist of state and related behavior. An object stores its state in fields (variables in some programming languages) and exposes its behavior through methods (functions in some programming languages). Methods operate on an object's internal state and serve as the primary mechanism for object-to-object communication. Hiding internal state and requiring all interaction to be performed through an object's methods is known as data encapsulation — a fundamental principle of object-oriented programming.",
    "webpages": [
      {"Wikipedia (Object)": "https://en.wikipedia.org/wiki/Object_(computer_science)"},
      {"Oracle (Object)": "http://docs.oracle.com/javase/tutorial/java/concepts/object.html"},
      {"Codecademy (Object)": "https://www.codecademy.com/courses/learn-ruby/lessons/object-oriented-programming-i/exercises/why-classes?action=lesson_resume"}
    ],
    "videos": [
      {"YouTube video": "https://www.youtube.com/watch?v=1OZrWqVncsU"}
    ],
    "embed_video": "",
    "audio": ""
  },
  {
    "name": "method",
    "description": "An action that an object is able to perform.",
    "keywords": ["object"],
    "image": "./client/build/images/method.png",
    "tags": ["function", "class", "object"],
    "add_info": "A method defines the behaviour of the objects that are created from the class. Consider the example of an object of the type 'person,' created using the person class. Methods associated with this class could consist of things like walking and driving. Methods are sometimes confused with functions, but they are distinct.",
    "webpages": [
      {"Wikipedia (Method)": "https://en.wikipedia.org/wiki/Method_(computer_programming)"},
      {"Codecademy (Method)": "https://www.codecademy.com/courses/learn-ruby/lessons/methods-blocks-sorting/exercises/why-methods?action=lesson_resume"}
    ],
    "videos": [
      {"YouTube video:": "https://www.youtube.com/watch?v=_rsKeFaGx48"}
    ],
    "embed_video": "https://www.youtube.com/embed/1OZrWqVncsU",
    "audio": ""
  },
  {
    "name": "properties",
    "description": "Variables declared within a class.",
    "keywords": ["variables", "class"],
    "image": "",
    "tags": ["object-oriented programming", "class"],
    "add_info": "A property, in object-oriented programming languages, is a special sort of class member, intermediate in functionality between a field (or data member) and a method. The syntax for reading and writing of properties is like for fields, but property reads and writes are (usually) translated to 'getter' and 'setter' method calls. The field-like syntax is easier to read and write than lots of method calls, yet the interposition of method calls 'under the hood' allows for data validation, active updating (eg of GUI elements), or implementation of what may be called 'read-only fields'.",
    "webpages": [
      {"What is a Property": "http://study.com/academy/lesson/what-is-an-attribute-in-computer-programming-definition-examples.html"},
      {"Property in StackOverflow": "https://stackoverflow.com/questions/4246883/what-is-method-property-and-function"},
      {"Wikipedia (Property)": "https://en.wikipedia.org/wiki/Property_(programming)"}
    ],
    "videos": [
      {"Video discussing Properties": "https://www.youtube.com/watch?v=grcPxVOnZpY"},
      {"Functional Properties": "https://www.youtube.com/watch?v=qzzFHpn69UQ"},
      {"hasattr": "https://www.youtube.com/watch?v=GAlH10AY7YI"}
    ],
    "embed_video": "",
    "audio": ""
  }
]);