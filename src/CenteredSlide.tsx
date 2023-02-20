import * as React from 'react';
import { v4 as uuidv4 } from 'uuid';
import './styling.scss';

/**
 * --headerClass is a class
 * --recommended data model for images: {image: 'string', flex: Number, description: 'String' }. image is the image url. Flex is the flex number for the image. Default value is 1. Change to 2 if you want that image to be twice the width of the other images. Description is the figcaption value and alt-text.
 * --If you prefer a series of columns of text, use textArray, which takes an array of objects: [{text: [{text: 'String', color: 'String'}, [{text: 'String', color: 'String'}]], color: 'String'}].
 * The convoluted array of arrays for text permits subitems to be incorporated into the
 * --headerClass
 * --contentBoxClass
 * --
 */
function CenteredSlide({
  headerClass,
  title,
  subTitle,
  images,
  text,
  contentBoxClass,
  contentTextClass,
  imageArrayBoxClass
}: {
  headerClass?: string;
  title: string;
  subTitle?: string;
  images?: Array<{
    flex: number;
    image: string | null;
    description: string;
  }>;
  text?: Array<{
    text: string;
    color: string;
    children?: Array<{
      text: string;
      color: string;
    }>;
  }>;
  contentBoxClass?: string;
  contentTextClass?: string;
  imageArrayBoxClass?: string;
}) {
  return (
    <div className="cover">
      <div className={`${headerClass} header`}>
        <h1>
          {title}{' '}
          {subTitle ? (
            <>
              <br /> {subTitle}
            </>
          ) : null}
        </h1>
      </div>
      <div className={`${contentBoxClass} content-box`}>
        {images && images.length > 0 ? (
          <div className="content-images">
            {images.map((a) => (
              <figure
                key={uuidv4()}
                className={`${imageArrayBoxClass} imgArray-box`}
                style={a.flex ? { flex: a.flex } : { flex: 1 }}
              >
                {a.image && <img src={a.image} alt={a.description} />}
                <figcaption className="text-center">{a.description}</figcaption>
              </figure>
            ))}
          </div>
        ) : (
          <div className={`${contentTextClass} content-text`}>
            {text &&
              text.map((a) => {
                return (
                  <div key={uuidv4()} className="text">
                    <div className="text-item" key={uuidv4()}>
                      <p key={uuidv4()} style={{ color: a.color }}>
                        {a.text}
                      </p>
                      {a.children && (
                        <ul key={uuidv4()}>
                          {a.children.map((b) => {
                            return (
                              <li key={uuidv4()} style={{ color: b.color }}>
                                {b.text}
                              </li>
                            );
                          })}
                        </ul>
                      )}
                    </div>
                  </div>
                );
              })}
          </div>
        )}
      </div>
    </div>
  );
}

export default CenteredSlide;
