import './styling.scss';
import * as PropTypes from 'prop-types';
import * as React from 'react';

/**
 * --disableLeftArrow takes a function that sets the conditions
 * under which the left arrow should be disabled.
 * --disableRightArrow takes a function that sets the conditions
 * under which the right arrow should be disabled.
 * --rightArrowClass takes a class name for custom styling.
 * --leftArrowClass takes a class name for custom styling.
 * --handleNextClick takes a function for determining what happens when
 * the right arrow is clicked.
 * --handlePrevClick takes a function for determining what happens when
 * the left arrow is clicked.
 * --index accepts a state feature that will determine the index
 * stateArray that will determine the current slide state.
 */

function Arrows(props: {
  disableLeftArrow?: boolean;
  disableRightArrow?: boolean;
  rightArrowClass?: string;
  leftArrowClass?: string;
  handleNextClick: React.MouseEventHandler<HTMLButtonElement>;
  handlePrevClick: React.MouseEventHandler<HTMLButtonElement>;
}) {
  // useEffect(() => {
  //   const click = (e) => {
  //     if (e.keyCode === 37) {
  //       e.preventDefault()
  //       // left arrow
  //       handlePrevClick
  //       console.log(e.keyCode)
  //     }
  //     if (e.keyCode === 39) {
  //       e.preventDefault()
  //       //right arrow
  //       handleNextClick
  //       console.log(handleNextClick)
  //     }
  //   }
  //   window.addEventListener('keyup', click, false);
  //   return function cleanup() {
  //     window.removeEventListener('keyup', click, false);
  //   }
  // });

  return (
    <>
      {props.disableRightArrow ? (
        <button
          type="button"
          className={
            props.rightArrowClass ? props.rightArrowClass : 'rightArrow button'
          }
          disabled
        >
          &rarr;
        </button>
      ) : (
        <button
          type="button"
          className={
            props.rightArrowClass ? props.rightArrowClass : 'rightArrow button'
          }
          onClick={props.handleNextClick}
        >
          &rarr;
        </button>
      )}
      {props.disableLeftArrow ? (
        <button
          type="button"
          disabled
          className={
            props.leftArrowClass ? props.leftArrowClass : 'leftArrow button'
          }
        >
          &larr;
        </button>
      ) : (
        <button
          type="button"
          className={
            props.leftArrowClass ? props.leftArrowClass : 'leftArrow button'
          }
          onClick={props.handlePrevClick}
        >
          &larr;
        </button>
      )}
    </>
  );
}

Arrows.propTypes = {
  disableLeftArrow: PropTypes.func,
  disableRightArrow: PropTypes.func,
  rightArrowClass: PropTypes.string,
  leftArrowClass: PropTypes.string,
  handleNextClick: PropTypes.func.isRequired,
  handlePrevClick: PropTypes.func.isRequired
};

export default Arrows;
