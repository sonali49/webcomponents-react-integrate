import React, { useState } from "react";
import "./dataTable.scss";
import { convertKmToNum } from "../../utils";

const TARGET = 200.00;

const TableRow = ({ dataSet, filterOperator, filterValue }) => {
  return dataSet.map((data) => {
    const { driverName, companyName, distance, score, id } = data;
    if (
      (filterOperator === "<=" && convertKmToNum(distance) <= TARGET) ||
      (filterOperator === ">" && convertKmToNum(distance) > TARGET) ||
      filterValue === "Distance"
    ) {
      return (
        <tr key={id}>
          <td>{driverName}</td>
          <td>{companyName}</td>
          <td>{distance}</td>
          <td>{score}</td>
        </tr>
      );
    }
    return null;
  });
};

export const DataTable = ({ dataSet }) => {
   const [filterValue, setFilterValue] = useState("Distance");
  const filterTable = (e, val) => {
    const wcComp = document.querySelector("dropdown-integrated-component");
    wcComp.addEventListener('changed', () => {
      console.log("CALLED-----")
    })
    console.log(val, 'FROM---------')
     return setFilterValue(e.target.value);
   };
  
  const handleReset = () => {
    setFilterValue("Distance");
    
    return (
      <TableRow
        dataSet={dataSet}
        filterOperator={filterOperator}
        filterValue={filterValue}
        />
    );
  };

  const filterOperator = filterValue.split(" ")[0];
  const list = '["Distance WC", "<= 200.00", "> 200.00"]';
  return (
    <>
      <select onChange={filterTable}>
        <option value="Distance">Distance</option>
        <option value="<= 200.00">{"<= 200.00 km"}</option>
        <option value="> 200.00">{"> 200.00 km"}</option>
      </select>
      <dropdown-integrated-component
        reset-value={false}
        selected-value="Distance WebComponents"
        data={list}
        getChangeSelectedItems={(val) => filterTable(val)}
      ></dropdown-integrated-component>
      <button type="link" onClick={handleReset}>
        Reset
      </button>
      <table cellSpacing="0" cellPadding="0" className="data-table">
        <thead>
          <tr>
            <th>Driver</th>
            <th>Company</th>
            <th>Distance</th>
            <th>Score</th>
          </tr>
        </thead>
        <tbody>
          <TableRow
            dataSet={dataSet}
            filterOperator={filterOperator}
            filterValue={filterValue}
          />
        </tbody>
      </table>
    </>
  );
};

export default DataTable;
