import React, { useState } from "react";

export default function FormForClassRoom({ addClassroom }) {
  const [isOpen, setIsOpen] = useState(false);
  const [moduleName, setModuleName] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [fromCapacity, setFromCapacity] = useState("");
  const [toCapacity, setToCapacity] = useState("");
  const [classStatus, setClassStatus] = useState("");
  const [description, setDescription] = useState("");
  const [file, setFile] = useState(null);

  const HandleAddClass = (e) => {
    e.preventDefault();
    const newClass = {
      moduleName,
      lessonName,
      fromCapacity,
      toCapacity,
      classStatus,
      description,
      file,
    };
    addClassroom(newClass);
    console.log(newClass);
    setIsOpen(false);

    setModuleName("");
    setLessonName("");
    setFromCapacity("");
    setToCapacity("");
    setClassStatus("");
    setDescription("");
    setFile(null);
  };

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    setFile(selectedFile);
  };

  const options = [
    { value: "pending", label: "Pending" },
    { value: "start", label: "Started" },
    { value: "end", label: "Ended" },
    { value: "close", label: "Closed" },
  ];

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
        type="button"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="lucide lucide-plus"
        >
          <path d="M5 12h14" />
          <path d="M12 5v14" />
        </svg>
      </button>

      {isOpen && (
        <div
          id="crud-modal"
          tabIndex="-1"
          aria-hidden="true"
          className="fixed inset-0 z-50 flex items-center justify-center w-full h-full bg-gray-800 bg-opacity-75"
        >
          <div className="relative w-full max-w-md p-4 max-h-full">
            <div className="relative bg-white rounded-lg shadow">
              <div className="flex items-center justify-between p-4 border-b rounded-t">
                <h3 className="text-lg font-semibold text-gray-900">
                  Class Details
                </h3>
                <button
                  type="button"
                  className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ml-auto inline-flex justify-center items-center"
                  onClick={() => setIsOpen(false)}
                >
                  <svg
                    className="w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 14 14"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M1 1l6 6m0 0l6 6M7 7L1 13m6-6L1 1m6 6l6-6"
                    />
                  </svg>
                  <span className="sr-only">Close modal</span>
                </button>
              </div>
              <form className="p-4" onSubmit={HandleAddClass}>
                <div className="mb-4">
                  <label
                    htmlFor="moduleName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Name
                  </label>
                  <input
                    type="text"
                    id="moduleName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter class name"
                    value={moduleName}
                    onChange={(e) => setModuleName(e.target.value)}
                    required
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="lessonName"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Code
                  </label>
                  <input
                    type="text"
                    id="lessonName"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    placeholder="Enter class code"
                    value={lessonName}
                    onChange={(e) => setLessonName(e.target.value)}
                    required
                  />
                </div>
                <div className="flex gap-4 mb-4">
                  <div>
                    <label
                      htmlFor="fromCapacity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      From Capacity
                    </label>
                    <input
                      type="number"
                      id="fromCapacity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter from capacity"
                      value={fromCapacity}
                      onChange={(e) => setFromCapacity(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="toCapacity"
                      className="block mb-2 text-sm font-medium text-gray-900"
                    >
                      To Capacity
                    </label>
                    <input
                      type="number"
                      id="toCapacity"
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                      placeholder="Enter to capacity"
                      value={toCapacity}
                      onChange={(e) => setToCapacity(e.target.value)}
                      required
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="file"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Upload File
                  </label>
                  <input
                    type="file"
                    id="file"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5"
                    onChange={handleFileChange}
                  />
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="description"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Description
                  </label>
                  <textarea
                    id="description"
                    rows="4"
                    className="block w-full p-2.5 text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-primary-600 focus:border-primary-600"
                    placeholder="Enter class description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    required
                  ></textarea>
                </div>
                <div className="mb-4">
                  <label
                    htmlFor="classStatus"
                    className="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Class Status
                  </label>
                  <select
                    id="classStatus"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5"
                    value={classStatus}
                    onChange={(e) => setClassStatus(e.target.value)}
                    required
                  >
                    <option value="" disabled>
                      Select Status
                    </option>
                    {options.map((option) => (
                      <option key={option.value} value={option.value}>
                        {option.label}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="text-white inline-flex items-center bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Add Class
                  </button>
                  <button
                    type="button"
                    onClick={() => setIsOpen(false)}
                    className="ml-2 text-gray-900 bg-white border border-gray-300 focus:ring-4 focus:outline-none focus:ring-gray-200 hover:bg-gray-100 font-medium rounded-lg text-sm px-5 py-2.5"
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
