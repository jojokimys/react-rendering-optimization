const Item = ({ index, value, onClick }) => {
  return (
    <div className={`item ${value ? "selected" : ""}`} onClick={() => onClick(index)}>
      {value.toString()}
    </div>
  );
};
export default Item;
