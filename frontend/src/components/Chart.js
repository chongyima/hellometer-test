import React from "react";
import { CanvasJSChart } from "canvasjs-react-charts";

export default function Chart(props) {
  let orderData = {};
  props.orders.forEach((element) => {
    const storeId = element.storeId;
    const storeData = orderData[storeId] || { count: Array(24).fill(0) };
    let [hour, min, second] = element.arrivalTime.split(":");
    hour = parseInt(hour);
    if (second.includes("PM")) {
      hour += 12;
    } else if (second.includes("AM") && hour === 12) {
      hour = 0;
    }
    storeData.count[hour] = storeData.count[hour] + 1;
    orderData = { ...orderData, [storeId]: storeData };
  });

  const visibleData = [];
  for (const [key, value] of Object.entries(orderData)) {
    visibleData.push({
      type: "spline",
      name: `Count an hour(storeId = ${key})`,
      showInLegend: true,
      yValueFormatString: "#,##0 Units",
      dataPoints:
        value &&
        value.count.map((count, idx) => {
          return { x: idx, y: count };
        }),
    });
  }
  function toggleDataSeries(e) {
    if (typeof e.dataSeries.visible === "undefined" || e.dataSeries.visible) {
      e.dataSeries.visible = false;
    } else {
      e.dataSeries.visible = true;
    }
  }

  const options = {
    theme: "light2",
    animationEnabled: true,
    title: {
      text: "Order count per hour for each store",
    },
    subtitles: [
      {
        text: "Click Legend to Hide or Unhide Data Series",
      },
    ],
    axisX: {
      title: "time",
    },
    axisY: {
      title: "Order per hour",
      titleFontColor: "#6D78AD",
      lineColor: "#6D78AD",
      labelFontColor: "#6D78AD",
      tickColor: "#6D78AD",
    },
    toolTip: {
      shared: true,
    },
    legend: {
      cursor: "pointer",
      itemclick: toggleDataSeries,
    },
    data: visibleData,
  };

  return (
    <div>
      <CanvasJSChart options={options} />
    </div>
  );
}
