use main

db.data.drop();

db.data.insert([
  {
    "name": "object",
    "description": "A self-contained component that contains properties and methods needed to make a certain type of data useful.",
    "keywords": ["properties", "methods"],
    "testDescription": ["A self-contained component that contains ", " and ", " needed to make a certain type of data useful."],
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
    "embed_video": "https://www.youtube.com/watch?v=1OZrWqVncsU",
    "audio": "./client/build/audio/object.mp3"
  },
  {
    "name": "method",
    "description": "An action that an object is able to perform.",
    "keywords": ["action", "object"],
    "testDescription": ["An ", " that an ", "is able to perform."],
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
    "audio": "./client/build/audio/method.mp3"
  },
  {
    "name": "properties",
    "description": "Variables declared within a class.",
    "keywords": ["Variables", "class"],
    "testDescription": ["", "declared within a ", "."],
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
      {"Functional Properties": "https://www.youtube.com/watch?v=qzzFHpn69UQ"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=GAlH10AY7YI",
    "audio": "./client/build/audio/property.mp3"
  },

  {
    "name": "variable",
    "description": "A variable is a named piece of computer memory, containing some information inside.",
    "keywords": ["variable", "memory", "information"],
    "testDescription": ["A",  "is a named piece of computer ", ", containing some ", " inside."],
    "image": "",
    "tags": ["object-oriented programming", "array", "integer"],
    "add_info": "A variable is a storage location paired with an associated symbolic name (an identifier), which contains some known or unknown quantity of information referred to as a value. The variable name is the usual way to reference the stored value; this separation of name and content allows the name to be used independently of the exact information it represents. The identifier in computer source code can be bound to a value during run time, and the value of the variable may thus change during the course of program execution.",
    "webpages": [
      {"What is a variable": "https://launchschool.com/books/ruby/read/variables"},
      {"Variable in StackOverflow": "https://stackoverflow.com/questions/1137158/what-is-a-variable"},
      {"Wikipedia (variable)": "https://en.wikipedia.org/wiki/Variable_(computer_science)"}
    ],
    "videos": [
      {"Video discussing variables": "https://www.youtube.com/watch?v=aeoGGabJhAQ"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=t4ND-_kTxcI",
    "audio": "./client/build/audio/variable.mp3"
  },

  {
    "name": "class",
    "description": "A class serves as a template for creating, or instantiating, specific objects within a program.",
    "keywords": [ "objects"],
    "testDescription": ["A class serves as a template for creating, or instantiating, specific ", " within a program."],
    "image": "",
    "tags": ["object-oriented programming", "object", "properties", "method", "object"],
    "add_info": "In many languages, the class name is used as the name for the class (the template itself), the name for the default constructor of the class (a subroutine that creates objects), and as the type of objects generated by instantiating the class; these distinct concepts are easily conflated. When an object is created by a constructor of the class, the resulting object is called an instance of the class, and the member variables specific to the object are called instance variables, to contrast with the class variables shared across the class.",
    "webpages": [
      {"What is a class": "http://guyhaas.com/bfoit/itp/JavaClass.html"},
      {"Wikipedia (class)": "https://en.wikipedia.org/wiki/Class_(computer_programming)"}
    ],
    "videos": [
      {"OO classes and objects": "https://www.youtube.com/watch?v=POrU7vcKB_k"}
    ],
    "embed_video": "https://www.youtube.com/watch?v=BZ8r7pC9bHY",
    "audio": "./client/build/audio/class.mp3"
  },

  {
    "name": "abstraction",
    "description": "Using abstraction, a programmer hides all but the relevant data about an object in order to reduce complexity and increase efficiency.",
    "keywords": ["programmer", "object", "efficiency"],
    "testDescription": ["Using abstraction, a ", " hides all but the relevant data about an ", " in order to reduce complexity and increase ", "."],
    "image": "",
    "tags": ["object", "object-oriented propgramming", "variable"],
    "add_info": "Abstraction is a technique for arranging complexity of computer systems. It works by establishing a level of complexity on which a person interacts with the system, suppressing the more complex details below the current level. The programmer works with an idealized interface (usually well defined) and can add additional levels of functionality that would otherwise be too complex to handle.",
    "webpages": [
      {"What is abstraction": "http://whatis.techtarget.com/definition/abstraction"},
      {"Abstraction in StackOverflow": "https://stackoverflow.com/questions/7028242/what-is-abstraction"},
      {"Wikipedia (abstraction)": "https://en.wikipedia.org/wiki/Abstraction_(software_engineering)"}
    ],
    "videos": [
      {"Video discussing abstraction": "https://www.youtube.com/watch?v=6V1sr0XV_Ng"},
      {"Abstraction is a core idea": "https://www.youtube.com/watch?v=HJ6rX5qBPIc"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=L1-zCdrx8Lk",
     "audio": "./client/build/audio/abstraction.mp3"
  },

  {
    "name": "array",
    "description": "An array is a data structure that contains a group of elements, which are typically all of the same data type",
    "keywords": ["elements", "data"],
    "testDescription": ["An array is a data structure that contains a group of ", ", which are typically all of the same ", " type"],
    "tags": ["variable", "string", "integer"],
    "add_info": "An array, is a data structure consisting of a collection of elements (values or variables), each identified by at least one array index or key. An array is stored so that the position of each element can be computed from its index tuple by a mathematical formula.",
    "webpages": [
      {"What is an array": "https://techterms.com/definition/array"},
      {"Array in StackOverflow (Java)": "https://stackoverflow.com/documentation/java/99/arrays#t=201709192017060243788"},
      {"Wikipedia (array)": "https://en.wikipedia.org/wiki/Array_data_structure"}
    ],
    "videos": [
      {"Explaining Java array": "https://www.youtube.com/watch?v=7VWPiKoia8o"},
      {"Explaining Ruby array": "https://www.youtube.com/watch?v=REDH9OzdQ_I"}
    ],
     "embed_video": "https://www.youtube.com/watch?v=Zj_UC7c1nh4",
     "audio": "./client/build/audio/array.mp3"
  }

  // {
  //   "name": "",
  //   "description": "",
  //   "keywords": ["", ""],
  //   "testDescription": [" ", "", ""],
  //   "tags": ["", "", ""],
  //   "add_info": "",
  //   "webpages": [
  //     {"What is a variable": ""},
  //     {"Variable in StackOverflow": ""},
  //     {"Wikipedia (variable)": ""}
  //   ],
  //   "videos": [
  //     {"Video discussing variables": ""},
  //     {"Programming fundamentals - variables": ""}
  //   ],
  //    "embed_video": "",
  //    "audio": "./client/build/audio/"
  // }

]);
