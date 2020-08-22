import * as React from "react";
import { Tooltip } from ".";
import styled from "styled-components";
import { Link } from "@reach/router";
import { StyledComponentsProps, SideBarItemProps } from "../../interfaces";

const MenuIconContainer = styled(Link)`
  font-decoration: none;
  padding: 6px 0;
  margin: 0;
  text-align: center;
  margin-bottom: ${(props: StyledComponentsProps) =>
    props.mb ? "10px" : "0"};
  justify-content: center;
  align-items: center;
  &hover: {
    cursor: pointer;
  }
`;

const SideBarItem: React.SFC<SideBarItemProps> = ({
  icon,
  tooltip,
  to,
  mb = false,
}) => {

  return (
    <MenuIconContainer
      mb={mb}
      to={to}
      className="w-100 btn btn-outline bg-dark"
    >
      <div>
        <Tooltip route={to} tooltip={tooltip}>
          {icon}
        </Tooltip>
      </div>
    </MenuIconContainer>
  );
};

export default SideBarItem;
