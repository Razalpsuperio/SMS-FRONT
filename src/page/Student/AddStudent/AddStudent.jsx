import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Input,
  Select,
  SelectItem // Assuming these are imported from Next UI
} from "@nextui-org/react";

const animals = [
  { key: "1", label: "Dog" },
  { key: "2", label: "Cat" },
  { key: "3", label: "Bird" }
];

export default function AddStudent() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [name, setName] = useState("");
  const [selectedImage, setSelectedImage] = useState(null);
  const [selectedAnimal, setSelectedAnimal] = useState("");

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setSelectedImage(file);
  };

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleAnimalChange = (animal) => {
    setSelectedAnimal(animal);
  };

  const handleSubmit = () => {
    console.log("Name:", name);
    console.log("Selected Image:", selectedImage);
    console.log("Selected Animal:", selectedAnimal);
    onClose(); // Close modal after submission
  };

  return (
    <>
      <Button variant="solid" color="secondary" onClick={onOpen}>
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
          className="feather feather-plus"
        >
          <path d="M12 5v14M5 12h14" />
        </svg>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalContent>
          <ModalHeader className="flex flex-col gap-1">Add Student</ModalHeader>
          <ModalBody>
            <div className="mb-4 text-center">
              {selectedImage && (
                <img
                  src={URL.createObjectURL(selectedImage)}
                  alt="Selected"
                  className="rounded-full w-24 h-24 mx-auto mb-2 cursor-pointer"
                  onClick={() => document.getElementById("image").click()} // Click input when image is clicked
                />
              )}
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700 cursor-pointer"
              >
                {selectedImage ? "Change Image" : "Select Image"}
              </label>
              <input
                type="file"
                id="image"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>
            <div className="mb-4">
              <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                Name
              </label>
              <Input
                id="name"
                type="text"
                value={name}
                onChange={handleNameChange}
                className="mt-1 block w-full border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div className="flex w-full gap-4">
              <Select
                label="Select an animal"
                value={selectedAnimal}
                onChange={handleAnimalChange}
                className="max-w-xs"
              >
                {animals.map((animal) => (
                  <SelectItem key={animal.key} value={animal.key}>
                    {animal.label}
                  </SelectItem>
                ))}
              </Select>
            </div>
          </ModalBody>
          <ModalFooter>
            <Button color="danger" variant="light" onClick={onClose}>
              Close
            </Button>
            <Button color="primary" onClick={handleSubmit}>
              Add Student
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
