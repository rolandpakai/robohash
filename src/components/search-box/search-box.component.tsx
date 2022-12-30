import { ChangeEventHandler, ChangeEvent } from 'react';
import './search-box.styles.css';

type SearchBoxProps = {
  className: string;
  placeholder?: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const SearchBox = ({ 
  className, 
  placeholder, 
  onChange 
}: SearchBoxProps) => {
  return (
    <input 
      type="search" 
      className={`search-box ${ className }`}
      placeholder={ placeholder }
      onChange={ onChange }
    />
  )
}

export default SearchBox;