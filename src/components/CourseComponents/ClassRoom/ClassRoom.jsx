import React, { useState } from 'react';
import FormForClassRoom from '../Form/FormForClassRoom';
import EditForm from '../Form/EditForm';

const ClassRoom = () => {
  const [classrooms, setClassrooms] = useState([]);
  const [classroomToEdit, setClassroomToEdit] = useState(null); 

  const addClassroom = (newClass) => {
    setClassrooms([...classrooms, newClass]);
  };

  const editClassroom = (moduleName, editedClass) => {
    const updatedClassrooms = classrooms.map((classroom) =>
      classroom.moduleName === moduleName ? editedClass : classroom
    );
    setClassrooms(updatedClassrooms);
    setClassroomToEdit(null); 
  };

  const handleEditClick = (classroom) => {
    setClassroomToEdit(classroom);
  };

  const generateKey = (pre, index) => {
    return `${pre}_${index}_${new Date().getTime()}`;
  };

  return (
    <div className="p-4 bg-gray-100 min-h-screen">
      <div className="mb-4 flex ">
        <FormForClassRoom addClassroom={addClassroom} />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {classrooms.map((classroom, index) => (
          <div
            key={generateKey(classroom.moduleName, index)}
            className="bg-white rounded-lg shadow-md overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex cursor-pointer"
            onClick={() => handleEditClick(classroom)} 
          >
            <div className="flex-none w-32">
              <img
                src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&q=75&fit=crop&w=256"
                alt=""
                className="object-cover w-full h-full"
              />
            </div>
            <div className="flex-auto p-4">
              <h2 className="text-lg font-bold mb-2">{classroom.moduleName}</h2>
              <div className="flex flex-col mb-2">
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Class Code:</span> {classroom.lessonName}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Class Name:</span> {classroom.moduleName}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Capacity:</span> {classroom.fromCapacity} - {classroom.toCapacity}
                </p>
                <p className="text-gray-700 mb-1">
                  <span className="font-semibold">Status:</span> {classroom.classStatus}
                </p>
                {classroom.description && (
                  <div className="mt-2">
                    <span className="font-semibold">Description:</span> {classroom.description}
                  </div>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Render EditForm component as a modal */}
      {classroomToEdit && (
        <EditForm
          editClassroom={editClassroom}
          classroomToEdit={classroomToEdit}
          closeEditModal={() => setClassroomToEdit(null)}
        />
      )}
    </div>
  );
};

export default ClassRoom;
