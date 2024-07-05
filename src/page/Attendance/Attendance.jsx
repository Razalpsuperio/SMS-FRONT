import React, { useState, useEffect } from 'react';
import AttendanceTable from '../../components/AttendanceTable/AttendanceTable';

const Attendance = () => {
  const [students, setStudents] = useState([
    { id: 1, name: "John Doe", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=75&fit=crop&w=256", attendance: [] },
    { id: 2, name: "Jane Smith", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=75&fit=crop&w=256", attendance: [] },
    { id: 3, name: "Alice Johnson", imageUrl: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=75&fit=crop&w=256", attendance: [] },
  ]);
  const [daysInMonth, setDaysInMonth] = useState(31);

  const getDaysInMonth = () => {
    const date = new Date();
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    return new Date(year, month, 0).getDate();
  };

  useEffect(() => {
    const days = getDaysInMonth();
    setDaysInMonth(days);

    const initialStudents = students.map(student => ({
      ...student,
      attendance: Array(days).fill(false)
    }));
    setStudents(initialStudents);
  }, []);

  const handleCheckboxChange = (studentIndex, dayIndex) => {
    const updatedStudents = [...students];
    updatedStudents[studentIndex].attendance[dayIndex] = !updatedStudents[studentIndex].attendance[dayIndex];
    setStudents(updatedStudents);
  };

  return (
    <div className="flex flex-col items-center ml-11">
      <AttendanceTable
        students={students}
        daysInMonth={daysInMonth}
        handleCheckboxChange={handleCheckboxChange}
      />
    </div>
  );
};

export default Attendance;
