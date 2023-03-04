# nkm_react_presentation

This repository provides simple react components for creating a basic slide show. The slide show does not operate like a normal website. Instead, it is designed to operate with state that is an array that can be iterated through to create the slideshow. There are four primary components: an Introductory slide, a split slide (a left box for text and a right box for an image), a centered slice (takes an array of images), and a split slide with a child (in which a map or some other website oriented object can be rendered).
# SlideState Example
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
slideIndex is the index of the slide show. slideState is the array of slides. The function checks to see if the index is at the end of the array and if so, it resets the index to 0. If the index is not at the end of the array, it increments the index by 1. The same logic is used for the prevSlide function, but the index is decremented by 1.

The arrows component also takes a boolean as a prop that determines whether the arrows are visible or not. This is useful for hiding the arrows when you are at the end of the slide show
