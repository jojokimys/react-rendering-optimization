import { memo, useState } from "react";

// 1. memoized component
const ItemMemoized = ({ index, value, onClick }) => {
  return (
    <div className={`item ${value ? "selected" : ""}`} onClick={() => onClick(index)}>
      {value.toString()}
    </div>
  );
};

// 3. memoized value -> memoized component
const ItemMemoizedWithState = ({ children }) => {
  const [clicked, setClicked] = useState(false);

  const onClickItem = () => {
    setClicked((prev) => !prev);
  };

  return (
    <div className={`item ${clicked ? "selected" : ""}`} onClick={onClickItem}>
      {children}
    </div>
  );
};

export default memo(ItemMemoized);
