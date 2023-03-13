import React from "react";
import { MDBDataTable } from "mdbreact";
import Chart from "./Chart";
export default function Home(props) {
  return (
    <div className="container">
      {props.orders && (
        <>
          <MDBDataTable
            striped
            bordered
            small
            data={{
              columns: [
                { label: "storeId", field: "storeId", sort: "asc", width: 150 },
                {
                  label: "arrivalTime",
                  field: "arrivalTime",
                  sort: "asc",
                  width: 150,
                },
                {
                  label: "orderTime",
                  field: "orderTime",
                  sort: "asc",
                  width: 150,
                },
                {
                  label: "pickupTime",
                  field: "pickupTime",
                  sort: "asc",
                  width: 150,
                },
                {
                  label: "totalTime",
                  field: "totalTime",
                  sort: "asc",
                  width: 150,
                },
              ],
              rows: props.orders,
            }}
          />
          <Chart orders={props.orders}></Chart>
        </>
      )}
    </div>
  );
}
