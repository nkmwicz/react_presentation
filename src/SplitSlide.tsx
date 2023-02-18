import "./styling.css";
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types'
/**
 * The SplitSlide component provides a split slide 
 * with a quarter of the slide on the left providing space 
 * for text, and the other three-quarters of the slide on the 
 * right is available for an image that is automatically sized
 * and centered to the center of the image container. 
 * It can take a title, subTitle, textArray, image, h1Class.
 * --title provides a title to the component as a string.
 * --subTitle provides a subtitle to the component as a string.
 * --h1Class accepts a class to provide specialized css to the h1.
 * --headerClass accepts a class name for specialized css on the header holding the h1.
 * --text array is accepts an array of objects [{text, color}] to decide the text and color of each text entry. 
 * --leftBoxClass accepts a class name to customize css of the left box.
 * --imageObject accepts an object including an image and a description: 
 * {image: 'https', description: 'This is an example image'}. The description also is included in the alt-text as well as the figcaption.
 * --rightBoxClass accepts a class name to customize css of the right box container.
 */
function SplitSlide({
  title,
  subTitle,
  h1Class,
  headerClass,
  textArray,
  imageObject,
  leftBoxClass,
  rightBoxClass,
  imgBoxClass,
}) {
  return (
    <div>
      <div className={`${headerClass} header`}>
        <h1 className={h1Class ? h1Class : null}>
          {title} {subTitle ? <><br /> {subTitle}</> : null}
        </h1>
      </div>
      <div className="split-container">
        <div className={leftBoxClass ? leftBoxClass : "left-box"}>
          {typeof textArray !== 'object' ?
            console.error("textArray prop must be included, and it should have the following data format: [{text: 'string', color: 'string'}]") :
            textArray.map(a => {
              return (
                <div className="left-text-container" key={uuidv4()}>
                  <p
                    style={{ color: a.color }}>
                    {a.text}
                  </p>
                </div>
              )
            })}
        </div>
        <div className={rightBoxClass ? rightBoxClass : "right-box"}>
          {typeof imageObject !== 'object' ?
            console.error("imageObject must be present and in the following data format: {image: 'string', description: 'string'}")
            : <figure
              className={imgBoxClass ? imgBoxClass : "img-right-box"}>
              <img src={imageObject.image} alt={imageObject.description} />
              <figcaption
                className="text-center">
                {imageObject.description}
              </figcaption>
            </figure>}
        </div>
      </div>
    </div>
  )
};

SplitSlide.propTypes = {
  title: PropTypes.string,
  subTitle: PropTypes.string,
  h1Class: PropTypes.string,
  headerClass: PropTypes.string,
  textArray: PropTypes.arrayOf(PropTypes.shape({
    text: PropTypes.string,
    color: PropTypes.string,
  })),
  imageObject: PropTypes.shape({
    image: PropTypes.string,
    description: PropTypes.string
  }),
  leftBoxClass: PropTypes.string,
  rightBoxClass: PropTypes.string,
  imgBoxClass: PropTypes.string,
}

export default SplitSlide;