import * as React from 'react';
import './styling.scss';
import 'bootstrap/dist/css/bootstrap.min.css';

/**
 * --Intro creates a basic introductory page,
 * taking in a title, subTitle, and byLine for
 * metaData on the slideShow.
 * --bgImage inputs an image inline into the component as the background.
 * --bgColor inputs a background color onto the component with inline styling.
 * --backgroundClass can be used to create a customized css for the component.
 * --If using backgroundClass, bgImage is unneccessaary since
 * a background image can be added directly to the css. The same applies to bgColor.
 * --titleClass creates a custom class for the container holding
 * the titleBox, the title, and the byline.
 * --titleBoxClass can be added to customize css
 * on the titlebox (the container holding the title and byline)
 */
function Intro({
  title,
  subTitle,
  byLine,
  bgImage,
  bgColor,
  titleBoxClass,
  backgroundClass,
  titleClass
}: {
  title?: string;
  subTitle?: string;
  byLine?: string;
  bgImage?: React.CSSProperties['backgroundImage'];
  bgColor?: string;
  titleBoxClass?: string;
  backgroundClass?: string;
  titleClass?: string;
}) {
  return (
    <>
      <div
        className={backgroundClass ? backgroundClass : 'bg-intro '}
        style={
          bgImage
            ? {
              backgroundImage: `url(${bgImage})`
            }
            : bgColor
              ? {
                backgroundColor: bgColor
              }
              : { backgroundColor: 'inherit' }
        }
      />
      <div className={titleClass ? titleClass : 'title'}>
        <div className={titleBoxClass ? titleBoxClass : 'title-box'}>
          <h1 className="text-center">
            {title}
            <br />
            <br />
            {subTitle}
          </h1>
          <br />
          <h2 className="text-center">{byLine}</h2>
        </div>
      </div>
    </>
  );
}

export default Intro;
