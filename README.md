# Notification
This repository is still in development, but will be available soon. 

Please check back for updates.
# react_presentation

This repository provides simple react components for creating a basic slide show. The components handle text placement, image placement, etc. programmatically. All you have to do is pass in the text and images. This is best achieved with a state variable of an array of slide objects that can be iterated through with a filter function of a state management system selector (such as a selector in Recoil). There are five primary components: an Introductory `slide`, a split slide (a left box for text and a right box for an image), a centered slice (takes an array of images or an array of text), a split slide with a child (in which a map or some other website-oriented object can be rendered), and a splitembedded slide (a split slide with embedded content in the right box such as a YouTube video). The components are designed to be used with a state variable that determines what is displayed on the screen. The state variable is an array of objects. Each object represents a slide. The intro slide is a simple slide with a title and a subtitle. The split slide has a left box for text and a right box for an image. The centered slide has an array of images that are displayed in a row. The child slide is for rendering a map or some other website-oriented object. The slides are rendered in the order that they are in the array. 

# Quick Start
To get started import this package with `npm install react_presentation` or `yarn add react_presentation` and then import the components you want to use. The fastest way to get started is with the `Layout` component. `Layout` includes all the components available and renders them based on a state variable: `slide`. Each `slide` should have a type property that determines what type of slide is rendered. The type property can be `intro`, `split`, `centered`, `child`, or `embed`.

# SlideState Example

React_Presentation uses a state variable to determine what is displayed on the screen. The state variable is an array of objects. Each object represents a slide. The objects have a type property that determines what type of slide is rendered. The type property can be 'intro', 'split', 'centered', or 'child'. The intro slide is a simple slide with a title and a subtitle. The split slide has a left box for text and a right box for an image. The centered slide has an array of images that are displayed in a row. The child slide is for rendering a map or some other website-oriented object. The slides are rendered in the order that they are in the array. Below is an example of the SlideState:

```
{images:["image_goes_here", "another_image"],
slides: [{
  split: true,
  text: [{
    text: 'split refers to the type of slide.',
    color: 'black'
    },
    {
      text: 'something else here',
      color: 'lightgrey' // can be any css color
    }
  ],
  image: {
    image: 'image_goes_here',
    description: 'description here'
  }
},
{
  centered: true,
  images: [{
    image: 'image_goes_here',
    flex: 2, // flex is the size of the image relative to the other images in the array
    description: 'description for the image'
  },
  {
    image: 'another_image',
    flex: 1,
    description: 'another description'
  }]
},
{
  centered: true,
  text: [{
    text: 'First level', 
    color: 'black',
    children: [{
        text: 'Second Level list item', 
        color: 'grey'
      },
      {
        text: 'Second Level list item', 
        color: 'grey'
      }]
    },
    {
      text: 'First level', 
      color: 'black',
      children: [{
          text: 'Second Level list item', 
          color: 'grey'
        },
        {
          text: 'Second Level list item', 
          color: 'grey'
        }
      ]
    }
  ],
},
]}
```
# Changing Slides with Arrows Components
Use the arrows component to set a function that iterates through the state array to cycle the content.

Iterating through the SlideState is easiest with a state variable and a selector. This can be done with a selector function in recoil or with a state function in react. Use the index to filter the SlideState: 
```
currentSlide = slideState.filter(a => a[index]). 
```
In this way, the state of the slide show can be updated by updating index, which is automatically done in the arrows function.

This is a simple solution for integrating web content that does not work well in PowerPoint with the slide show. The components also handle all the positioning of content for the user.

# Arrows Component

The arrow component takes a function as a prop that is called when the arrow is clicked. The function should update the index of the slide show. The arrows work when clicked, but the nextSlide and prevSlide props are also available for use with the arrows on the keyboard. Below is an example of the two functions:
  
  ```
function nextSlide(e) {
  if (e && slideIndex < slideState.length - 1) {
    setSlideIndex(slideIndex + 1);
  }
  if (e && slideIndex === slideState.length - 1) {
    setSlideIndex(0);
  }
}

function prevSlide(e) {
  if (e && slideIndex > 0) {
    setSlideIndex(slideIndex - 1);
  }
  if (e && slideIndex === 0) {
    setSlideIndex(slideState.length - 1);
  }
}
```
`slideIndex` and `setSlideIndex` are the index of the slide show and are react useState variables. You must include in your own code: `const [slideIndex, setSlideIndex] = useState(0). `slideState` is the array of slides. It is similarly a state variable you must construct in your code. The function checks to see if the index is at the end of the array and if so, it resets the index to 0. If the index is not at the end of the array, it increments the index by 1. The same logic is used for the prevSlide function, but the index is decremented by 1.

The arrows component also takes a boolean as a prop that determines whether the arrows are visible or not. This is useful for hiding the arrows when you are at the end of the slide show
