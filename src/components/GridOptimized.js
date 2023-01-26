import { useState, useEffect, useCallback, useMemo } from "react";

import Item from "./ItemMemoized";

const GridOptimized = ({ count }) => {
  const [items, setItems] = useState([]);

  // memoized function
  const onClickItem = useCallback(
    (index) => {
      setItems((prev) => {
        let newItems = [...prev];
        newItems[index] = !prev[index];
        return newItems;
      });
    },
    [setItems],
  );

  useEffect(() => {
    setItems(new Array(count * count).fill(false));
  }, [count]);

  // 3. memoized value
  const memoizedItems = useMemo(() => new Array(count * count).fill(false), [count]);

  return (
    <div className={`grid grid-${count}`}>
      {items.map((value, index) => (
        <Item index={index} value={value} key={`item-${index + 1}`} onClick={onClickItem} />
      ))}

      {/* {memoizedItems.map((value, index) => (
        <Item index={index} value={value} key={`item-${index + 1}`} onClick={onClickItem}>
          {`${index}`}
        </Item>
      ))} */}
    </div>
  );
};

export default GridOptimized;
