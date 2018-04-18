import { Component } from 'react';
import ReactDOM from 'react-dom';

const modal = document.getElementById('modal');

class KeyboardDetail extends Component {
  constructor(props) {
    super(props);
    // element to render modal into
    this.el = document.createElement('div');
  }

  componentDidMount() {
    modal.appendChild(this.el);
  }

  componentWillUnmount() {
    modal.removeChild(this.el);
  }

  render() {
    return ReactDOM.createPortal(
      // any react child that gets inserted into modal container
      this.props.children,
      // modal container
      this.el
    );
  }
}

export default KeyboardDetail;
