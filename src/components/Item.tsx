import React from "react";
import { Figure } from "react-bootstrap";
import { useSetRecoilState } from "recoil";
import { cartItems } from "../state";

const Item = ({ caption, src, id }) => {
  const setCartItems = useSetRecoilState(cartItems);

  const addToCart = () => {
    const itemToAdd = {
      id,
      src,
      caption,
    };
    //@ts-ignore
    const updatedItems = cartItems.length
      ? [
          //@ts-ignore
          ...cartItems,
          itemToAdd,
        ]
      : [itemToAdd];
    setCartItems(updatedItems);
  };
  return (
    <Figure
      style={{ cursor: "pointer" }}
      onClick={() => addToCart()}
      className="py-1 mx-1"
    >
      <Figure.Image width={120} height={120} alt="120x120" src={src} />
      <Figure.Caption className="text-center">{caption}</Figure.Caption>
    </Figure>
  );
};

export default Item;
