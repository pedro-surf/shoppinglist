import React from "react";
import TableList from "./TableList";
import { useRecoilValue } from "recoil";
import { users, trackers } from "../state";
import { Badge } from "react-bootstrap";
import styled from "styled-components";

const SetDisplayID = styled.div`
  cursor: pointer;
`;

const Settings = ({ path }) => {
  const usr = useRecoilValue(users);
  const siteData = useRecoilValue(trackers);
  const [displayIDCustomers, setDisplayIDCustomers] = React.useState(true);

  return (
    <div className="container text-center py-4">
      <h3>Settings and Stats</h3>
      <h5 className="mt-5">
        Registered Users <Badge variant="success">{siteData.usersCount}</Badge>
      </h5>
      <SetDisplayID onClick={() => setDisplayIDCustomers(!displayIDCustomers)}>
        ({displayIDCustomers ? "Hide" : "Show"} IDs)
      </SetDisplayID>
      <TableList
        noIndex={!displayIDCustomers}
        headers={["Name", "Role", "Creation date"]}
        rows={usr}
      />
      <h5 className="mt-5">
        Customers <Badge variant="info">{siteData.customersCount}</Badge>
      </h5>
      <h5 className="mt-5">
        Registered Products{" "}
        <Badge variant="warning">{siteData.productsCount}</Badge>
      </h5>
    </div>
  );
};

export default Settings;
