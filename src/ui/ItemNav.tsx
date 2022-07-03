import React from "react";

interface Props {
  id: string;
  FilterFunction: () => void;
  name: string;
}
// This is a Template to Item
const ItemNav = ({ id, FilterFunction, name }: Props) => {
  return (
    <li className="nav-item" key={id}>
      <span
        className="btn btn-light"
        aria-current="page"
        onClick={FilterFunction}
      >
        {name}
      </span>
    </li>
  );
};

export default ItemNav;
