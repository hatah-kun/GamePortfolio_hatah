// import { MouseEvent } from "react";

import { useState } from "react";

interface Props {
  items: string[];
  heading: string;
  onSelectItem: (item: string) => void;
}

function ListGroup({ items, heading, onSelectItem }: Props) {
  // const items = [
  //   "build fortpolio",
  //   "polish player movement",
  //   "polish gun and firing",
  //   "polish enemy ai",
  //   "polish game mechanics",
  //   "polish game ui",
  //   "create color theme",
  // ];

  // event handler
  // const handleListClick_f = (event: MouseEvent) => {
  //   console.log(event);
  // };

  // hook / states
  const [clickIndex, setClickIndex] = useState(-1);

  return (
    <>
      <h1 className="text-2xl font-bold underline">{heading}</h1>
      <ul className="list-group">
        {items.map((item, index) => (
          <li
            key={item}
            className={
              index === clickIndex
                ? "list-group-item active"
                : "list-group-item"
            }
            onClick={() => {
              setClickIndex(index);
              onSelectItem(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListGroup;
