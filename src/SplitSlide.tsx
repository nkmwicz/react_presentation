import * as React from 'react';
import './styling.scss';
import { v4 as uuidv4 } from 'uuid';
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

interface SplitTypes {
  title: string;
  subTitle?: string;
  h1Class?: string;
  headerClass?: string;
  text?: Array<{
    text: string;
    color: string;
    children?: Array<{ text: string; color: string }>;
  }>;
  image?: { image?: string; description?: string; alt?: string };
  leftBoxClass?: string;
  rightBoxClass?: string;
  imgBoxClass?: string;
}
function SplitSlide({
  title,
  subTitle,
  h1Class,
  headerClass,
  text,
  image,
  leftBoxClass,
  rightBoxClass,
  imgBoxClass
}: SplitTypes) {
  return (
    <div>
      <div className={`${headerClass} header`}>
        <h1 className={h1Class ? h1Class : ''}>
          {title}{' '}
          {subTitle ? (
            <>
              <br /> {subTitle}
            </>
          ) : null}
        </h1>
      </div>
      <div className="split-container">
        <div className={leftBoxClass ? leftBoxClass : 'left-box'}>
          {text &&
            text.map((a) => {
              return (
                <div className="left-text-container" key={uuidv4()}>
                  <p style={{ color: a.color }}>{a.text}</p>
                </div>
              );
            })}
        </div>
        <div className={rightBoxClass ? rightBoxClass : 'right-box'}>
          {image && (
            <figure className={imgBoxClass ? imgBoxClass : 'img-right-box'}>
              <img src={image.image} alt={image.alt} />
              {image?.description && (
                <figcaption className="text-center">
                  {image.description}
                </figcaption>
              )}
            </figure>
          )}
        </div>
      </div>
    </div>
  );
}

export default SplitSlide;
