import { Component } from 'react';
import './search-box.styles.css';

class SearchBox extends Component {

  render = () => {

    const { className, placeholder } = this.props;
    const { onChange } = this.props;

    return (
      <input 
        type="search" 
        className={`search-box ${ className }`}
        placeholder={ placeholder }
        onChange={ onChange }
      />
    )
  }
}

export default SearchBox;