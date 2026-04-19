const Filter = (props) => {
  return (
    <label>
      filter shown with:{" "}
      <input type="text" value={props.filter} onChange={props.onFilter} />
    </label>
  );
};
export default Filter;
