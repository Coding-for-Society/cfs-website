/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export class ScrollDrag extends React.Component {
  constructor(props) {
    super(props);
    this.ref = React.createRef();
    this.state = {
      isScrolling: false,
      clientX: 0,
      scrollX: 0,
    };
  }

  onMouseDown = e => {
    this.setState({ ...this.state, isScrolling: true, 
     clientX: e.clientX });
     console.log("onMouseDown");
  };

  onMouseUp = () => {
    this.setState({ ...this.state, isScrolling: false });
  };

  onMouseMove = e => {
    const { clientX, scrollX } = this.state;
    console.log(scrollX +" "+ e.clientX +" "+ clientX);
    if (this.state.isScrolling) {
      //this.ref.current.scrollLeft = scrollX + e.clientX - clientX;
      document.getElementById("scrollDrag").scrollLeft= scrollX + clientX - e.clientX;
      this.state.scrollX = document.getElementById("scrollDrag").scrollLeft;
      this.state.clientX = e.clientX;
    }
  };

  render() {
    const { ref, rootClass } = this.props;
    return (
      <div className = "scrollDrag"
      id = "scrollDrag"
        ref={ref}
        onMouseDown={this.onMouseDown}
        onMouseUp={this.onMouseUp}
        onMouseMove={this.onMouseMove}
      >
        {React.Children.map(this.props.children, child =>
            React.Children.only(child))}
      </div>
    );
  }
}

ScrollDrag.defaultProps = {
  ref: { current: {} },
  rootClass: '',
};

ScrollDrag.propTypes = {
  ref: PropTypes.object,
  rootClass: PropTypes.string,
  children: PropTypes.string,
};

export default ScrollDrag;
/* eslint-disable */