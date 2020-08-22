import * as React from "react";
import { Overlay, Tooltip as RBTooltip } from "react-bootstrap";
import "./Tooltip.css";
import { currentPath } from "../state";
import { useRecoilState } from "recoil";

export default function Tooltip({ children, tooltip, route }) {
  const [show, setShow] = React.useState(false);
  const target = React.useRef(null);
  const [, setRoute] = useRecoilState(currentPath);

  return (
    <>
      <div
        ref={target}
        onMouseOver={() => setShow(true)}
        onMouseLeave={() => setShow(false)}
        onClick={() => setRoute(route)}
      >
        {children}
      </div>
      <Overlay target={target.current} show={show} placement="right">
        {(props) => (
          <RBTooltip className="tooltip" id="overlay-example" {...props}>
            {tooltip}
          </RBTooltip>
        )}
      </Overlay>
    </>
  );
}
