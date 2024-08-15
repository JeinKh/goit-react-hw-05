import s from "./SearchBar.module.css";

const SearchBar = ({ onSubmit, filterValue }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const value = e.target.elements.search.value.trim();
    onSubmit(value);
  };
  return (
    <div className={s.wrapper}>
      <form className={s.form} onSubmit={handleSubmit}>
        <input
          className={s.input}
          name="search"
          type="search"
          placeholder="Search"
          defaultValue={filterValue}
        />
        <button className={s.btn} type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
