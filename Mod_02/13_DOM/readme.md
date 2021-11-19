# DOM (Document Object Model

### Contents

- [DOM in HTML](#DOM-in-HTML)
- [DOM in Javascript](#DOM-in-Javascript)
- [Finding HTML Elements by Id](#Finding-HTML-Elements-by-Id)
- [Finding HTML Elements by Tag Name](#Finding-HTML-Elements-by-Tag-Name)
- [Finding HTML Elements by Class Name](#Finding-HTML-Elements-by-Class-Name)
- [Properties](#Properties)
  - [Finding HTML Elements](#Finding-HTML-Elements)
  - [Changing HTML Elements](#Changing-HTML-Elements)
  - [Adding and Deleting Elements](#Adding-and-Deleting-Elements)

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

[Back to top](#contents)

# Properties

## Finding HTML Elements

| Property                                   | Description                                         |
| ------------------------------------------ | --------------------------------------------------- |
| document.getElementById(id)                | Find and returns the element with the specified id. |
| document.getElementsByTagName(tagName)     | Finds all elements with the specified tag name.     |
| document.getElementsByClassName(className) | Finds all elements with the specified class name.   |

## Changing HTML Elements

| Property                             | Description                           |
| ------------------------------------ | ------------------------------------- |
| element.innerHTML = new html content | Changes the inner HTML of an element. |
| element.atribute = new value         | Changes the value of an attribute.    |
| element.style.property = new style   | Changes the value of a CSS property.  |

| Method                                 | Description                                    |
| -------------------------------------- | ---------------------------------------------- |
| element.setAttribute(atrribute, value) | Cah ge the attribute value of an HTML element. |

## Adding and Deleting Elements

| Method                                       | Description                       |
| -------------------------------------------- | --------------------------------- |
| document.createElement(element)              | Create an HTML element            |
| element.removeChild(element)                 | Remove an HTML element            |
| element.appendChild(element)                 | Append an HTML element            |
| element.replaceChild(newElement, oldElement) | Replace an HTML element           |
| document.write(html)                         | Write elements HTML into the page |

Additional info [here](https://www.w3schools.com/js/js_htmldom_document.asp)

[Back to properties](#Properties)

Or if you want to...

[Back to top](#contents)
