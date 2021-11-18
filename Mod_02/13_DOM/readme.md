# DOM (Document Object Model

### Contents

1. [DOM in HTML](#DOM-in-HTML)
2. [DOM in Javascript](#DOM-in-Javascript)
3. [Finding HTML Elements by Id](#Finding-HTML-Elements-by-Id)
4. [Finding HTML Elements by Tag Nanme](#Finding-HTML-Elements-by-Tag-Name)
5. [Finding HTML Elements by Class Name](#Finding-HTML-Elements-by-Class-Name)

### DOM in HTML

The HTML DOM model is a tree of objects that represents the structure of the document.

![DOM](https://www.w3schools.com/whatis/img_htmltree.gif)

The HTML DOM is an Object Models for HTML. It defines the structure of the HTML document and the way it is presented to the user. It defines:

- HTML elements as **objects**
- **Properties** for all HTML elements
- **Methods** for all HTML elements
- **Events** for all HTML elements

### DOM in Javascript

The HTML DOM is an API for JavaScript:

- JavaScript can add/change/remove HTML elements
- JavaScript can add/change/remove HTML attributes
- JavaScript can add/change/remove CSS styles
- JavaScript can react to HTML events
- JavaScript can add/change/remove HTML events

### Finding HTML Elements by Id

This example finds the element with the id "nameOfMyId":

```javascript
var element = document.getElementById("nameOfMyId");
```

### Finding HTML Elements by Tag Name

This example finds all < h1 > elements:

```javascript
var x = document.getElementsByTagName("h1");
```

### Finding HTML Elements by Class Name

This example finds all elements with the class "myClass":

```javascript
var x = document.getElementsByClassName("myClass");
```

More info [here](https://www.w3schools.com/js/js_htmldom.asp)

[Back to top
](#contents)
