import './Draggable.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

export const DraggableElement = ({ color }) => {
  const [position, setPosition] = useState([0, 0])

  const downHandler = (e) => {
    const element = e.target
    element.classList.add('onDrag')

    if (e.type !== 'mousedown') {
      e = e.changedTouches[0];
    }

    const x = e.pageX - element.offsetLeft;
    const y = e.pageY - element.offsetTop;
    setPosition([x, y]);

    document.body.addEventListener('mousemove', moveHandler, false);
    document.body.addEventListener('touchmove', moveHandler, false);
  }

  const moveHandler = (e) => {
    const element = document.getElementsByClassName('onDrag')[0];
    if (e.type !== 'mousemove') {
      e = e.changedTouches[0];
    }

    if (element) {
      element.style.left = e.pageX - position[0] + 'px';
      element.style.top = e.pageY - position[1] + 'px';
  
      element.addEventListener('mouseup', upHandler, false);
      document.body.addEventListener('mouseleave', upHandler, false);
      element.addEventListener("touchend", upHandler, false);
      document.body.addEventListener("touchleave", upHandler, false);
    }
  }

  const upHandler = (e) => {
    const element = document.getElementsByClassName('onDrag')[0];
    if (element) {
      document.body.removeEventListener('mousemove', moveHandler, false);
      element.removeEventListener("mouseup", upHandler, false);
      document.body.removeEventListener("touchmove", moveHandler, false);
      element.removeEventListener("touchend", upHandler, false);
  
      element.classList.remove('onDrag');
    }
  }

  return (
    <div
      className={color}
      onMouseDown={downHandler}
      onTouchStart={downHandler}
    />
  );
}

DraggableElement.defaultProps = {
  color: 'red'
}

DraggableElement.propTypes = {
  color: PropTypes.string
};
