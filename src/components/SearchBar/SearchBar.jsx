const SearchBar = (onSubmit, filterValue) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    onSubmit(value);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          name="search"
          type="search"
          placeholder="Search"
          defaultValue={filterValue}
        />
        <button type="submit">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;
