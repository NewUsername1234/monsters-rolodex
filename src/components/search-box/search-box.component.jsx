import './search-box.styles.css';

export const SearchBox = ({onSearchChange, placeholder}) => {
    return (
        <input
        className='search'
        onChange={onSearchChange}
        type="search"
        placeholder={placeholder}
    />
    )
}



