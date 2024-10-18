import React from 'react';
import { useTable } from 'react-table';

// Dummy data
const appointmentsData = [
  {
    id: 1,
    doctorName: 'Dr. John Smith',
    patientName: 'Emily Davis',
    appointmentDate: '2024-10-20',
    appointmentTime: '10:30 AM',
    status: 'Confirmed',
  },
  {
    id: 2,
    doctorName: 'Dr. Sarah Johnson',
    patientName: 'Michael Brown',
    appointmentDate: '2024-10-21',
    appointmentTime: '11:00 AM',
    status: 'Pending',
  },
  {
    id: 3,
    doctorName: 'Dr. James Wilson',
    patientName: 'Sophia Johnson',
    appointmentDate: '2024-10-22',
    appointmentTime: '02:30 PM',
    status: 'Cancelled',
  },
];

// Table component
const AppointmentsTable = () => {
  const columns = React.useMemo(
    () => [
      {
        Header: 'Doctor Name',
        accessor: 'doctorName',
      },
      {
        Header: 'Patient Name',
        accessor: 'patientName',
      },
      {
        Header: 'Appointment Date',
        accessor: 'appointmentDate',
      },
      {
        Header: 'Appointment Time',
        accessor: 'appointmentTime',
      },
      {
        Header: 'Status',
        accessor: 'status',
      },
    ],
    []
  );

  const data = React.useMemo(() => appointmentsData, []);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
  } = useTable({ columns, data });

  return (
    <div className="p-4">
      <h2 className="text-xl font-semibold mb-4">Doctor Appointments</h2>
      <table
        {...getTableProps()}
        className="min-w-full bg-white border border-gray-200 rounded-lg shadow"
      >
        <thead className="bg-gray-100 text-left">
          {headerGroups.map(headerGroup => (
            <tr {...headerGroup.getHeaderGroupProps()} className="border-b">
              {headerGroup.headers.map(column => (
                <th
                  {...column.getHeaderProps()}
                  className="py-2 px-4 text-sm font-medium text-gray-700"
                >
                  {column.render('Header')}
                </th>
              ))}
            </tr>
          ))}
        </thead>
        <tbody {...getTableBodyProps()}>
          {rows.map(row => {
            prepareRow(row);
            return (
              <tr {...row.getRowProps()} className="hover:bg-gray-50">
                {row.cells.map(cell => {
                  return (
                    <td
                      {...cell.getCellProps()}
                      className="py-2 px-4 text-sm text-gray-600 border-b"
                    >
                      {cell.render('Cell')}
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
};

export default AppointmentsTable;
