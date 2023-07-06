import React from "react";

const TblHeader = ({ list = [] }) => {
  return (
    <React.Fragment>
      <th align="center" style={{ width: "50px", minWidth: "50px" }}>#</th>

      {list.map((v, index) => (
        <th style={v.style} key={index}>
          {v.title}
        </th>
      ))}
    </React.Fragment>
  );
};

export default TblHeader;
