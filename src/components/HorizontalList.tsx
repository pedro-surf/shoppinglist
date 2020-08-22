import React, { useState } from "react";
import ScrollMenu from "react-horizontal-scrolling-menu";
import "./HorizontalList.css";
import { ArrowLeftBar, ArrowRightBar } from "./icons";

/*const MenuItem = ({ selected, ...item }) => (
    //@ts-ignore
  <div className={`menu-item ${selected ? "active" : ""}`}><Item  {...item} /></div>
);*/
export const List = (list, selected, Item) =>
  list.map((el, index) => <Item {...el} key={index} selected={selected} />);

const Arrow = ({ text, className, icon }) => {
  return <div className={className}>{icon ? icon : text ? text : ""}</div>;
};

const ArrowLeft = Arrow({
  text: "<",
  className: "arrow-prev",
  icon: ArrowLeftBar("black"),
});
const ArrowRight = Arrow({
  text: ">",
  className: "arrow-next",
  icon: ArrowRightBar("black"),
});

const HorizontalList = ({ list, item, showDetails }) => {
  const [selected, setSelected] = useState("");

  const onSelect = (key) => {
    console.dir(key);
    setSelected(key);
    if (showDetails) {
      showDetails(key);
    }
  };
  const menu = List(list, selected, item);

  return (
    <ScrollMenu
      data={menu}
      arrowLeft={ArrowLeft}
      arrowRight={ArrowRight}
      selected={selected}
      onSelect={onSelect}
    />
  );
};

export default HorizontalList;
