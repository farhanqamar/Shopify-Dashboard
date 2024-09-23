import React from 'react';
import OrderTable from "../Components/OrderTable";

// Dummy Data
const columnData = [
    "Column 1", "Column 2", "Column 3", "Column 4", "Column 5", "Column 6", "Column 7", "Column 8", "Column 9", "Column 10", "Column 11", "Column 12", "Column 13", "Column 14",
    "Column 15", "Column 16", "Column 17", "Column 18", "Column 19", "Column 20", "Column 21", "Column 22"
  ];

  const dataRow = [
    ["Data 1", "Data 2", "Data 3", "Data 4", "Data 5", "Data 6", "Data 7", "Data 8", "Data 9", "Data 10", "Data 11", "Data 12",
      "Data 13", "Data 14", "Data 15", "Data 16", "Data 17", "Data 18", "Data 19", "Data 20", "Data 21", "Data 22"
    ],
    // Add more rows as needed
  ];

  

const OrderTablePage = () => {
  return (
    <>
     <OrderTable
        columnsData={columnData} // put here First heading row data
        dataRows={dataRow}      // put here all rows data
        />
    </>
  )
}

export default OrderTablePage;