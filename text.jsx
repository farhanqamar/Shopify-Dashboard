
import { useState } from "react"
import { IoFilterSharp } from "react-icons/io5";



const OrderTable = () => {

  const [showColumn, setShowColumn] = useState(false)

  const columnDropdown = () => {
    setShowColumn(!showColumn)
  }

  const [visibleColumns, setVisibleColumns] = useState < Record < string, boolean>> ({

    column1: true,
    column2: true,

    column3: true,
    column4: true,

    column5: true,
    column6: true,

    column7: true,
    column8: true,

    column9: true,
    column10: true,

    column11: true,
    column12: true,

    column13: true,
    column14: true,

    column15: true,
    column16: true,

    column17: true,
    column18: true,

    column19: true,
    column20: true,

    column21: true,
    column22: true,

  });

  const toggleColumnVisibility = (columnName: string) => {
    setVisibleColumns((prevState: any) => ({
      ...prevState,
      [columnName]: !prevState[columnName],
    }));
  };

  return (
    <div>
      <div className="p-4 text-end">
        {/* Filter Dropdown */}

        <div className="inline-block text-end">
          <button onClick={columnDropdown} className="bg-blue-500 text-white px-4 py-2 rounded" type="button">
            <IoFilterSharp />
          </button>
          {showColumn ?
            (<div className="absolute text-end right-0  mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
              <div className="py-1">
                {Object.keys(visibleColumns).map((column) => (
                  <label key={column} className="flex items-center px-4 py-2">
                    <input
                      type="checkbox"
                      checked={visibleColumns[column]}
                      onChange={() => toggleColumnVisibility(column)}
                      className="mr-2"
                    />
                    {column}
                  </label>
                ))}
              </div>
            </div>)
            : ('')}
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-4">
          <table className="min-w-full divide-y divide-gray-200 border border-gray-200">
            <thead className="bg-gray-50">
              <tr>
                {visibleColumns.column1 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 1</th>}
                {visibleColumns.column2 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 2</th>}
                {visibleColumns.column3 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 3</th>}
                {visibleColumns.column4 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 4</th>}
                {visibleColumns.column5 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 5</th>}
                {visibleColumns.column6 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 6</th>}
                {visibleColumns.column7 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 7</th>}
                {visibleColumns.column8 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 8</th>}
                {visibleColumns.column9 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 9</th>}
                {visibleColumns.column10 && <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Column 10</th>}
              </tr>
            </thead>

            <tbody className="bg-white divide-y divide-gray-200">
              {/* Example Data Row */}
              <tr>
                {visibleColumns.column1 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 text-left">Data 1</td>}
                {visibleColumns.column2 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 2</td>}
                {visibleColumns.column3 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 3</td>}
                {visibleColumns.column4 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 4</td>}
                {visibleColumns.column5 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 5</td>}
                {visibleColumns.column6 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 6</td>}
                {visibleColumns.column7 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 7</td>}
                {visibleColumns.column8 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 8</td>}
                {visibleColumns.column9 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 9</td>}
                {visibleColumns.column10 && <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">Data 10</td>}
              </tr>
              {/* Add more rows as needed */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default OrderTable;
