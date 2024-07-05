import React from 'react';
import { Checkbox } from '@nextui-org/react';

const AttendanceTable = ({ students, daysInMonth, handleCheckboxChange }) => {
  const getDayOfWeekAbbreviation = (date) => {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  };

  const renderTableHeaders = () => {
    const headers = [];
    for (let i = 0; i < daysInMonth; i++) {
      const date = new Date();
      date.setDate(i + 1);
      const dayOfWeekAbbreviation = getDayOfWeekAbbreviation(date);
      headers.push(
        <th key={i + 1} className="px-6 py-3 text-center">
          <div className="flex flex-col items-center">
            <span>{i + 1}</span>
            <span className="text-xs">{dayOfWeekAbbreviation}</span>
          </div>
        </th>
      );
    }
    return headers;
  };

  return (
    <div className="overflow-x-auto w-full md:w-6/8">
      <table className="w-full text-sm text-left bg-gray-900 shadow-md rounded-lg overflow-hidden">
        <thead className="text-xs uppercase bg-gray-900 text-white">
          <tr>
            <th className="px-6 py-3">ID</th>
            <th className="px-6 py-3">Student</th>
            <th className="px-6 py-3 text-center">Attendance</th>
          </tr>
          <tr>
            <th className="px-6 py-3"></th>
            <th className="px-6 py-3"></th>
            {renderTableHeaders()}
            <th className="px-6 py-3"></th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, studentIndex) => (
            <tr key={student.id} className="border-b dark:border-gray-700 last:border-b-0 text-white">
              <td className="px-6 py-4 text-center">{student.id}</td>
              <td className="flex items-center px-6 py-4">
                <img className="h-10 w-10 rounded-full mr-4" src={student.imageUrl} alt={student.name} />
                <span className="text-sm font-medium text-white">{student.name}</span>
              </td>
              {student.attendance.map((status, dayIndex) => (
                <td key={dayIndex} className="px-6 py-4 text-center">
                  <label className="cursor-pointer">
                    <Checkbox
                      type="checkbox"
                      className="form-checkbox h-6 w-6 text-indigo-600 transition duration-150 ease-in-out"
                      checked={status}
                      onChange={() => handleCheckboxChange(studentIndex, dayIndex)}
                    />
                  </label>
                </td>
              ))}
              <td className="px-6 py-4 text-center font-medium text-white">
                {student.attendance.filter(status => status).length}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AttendanceTable;
