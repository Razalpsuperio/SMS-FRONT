import React, { useState } from "react";
import {
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Button,
  useDisclosure,
  Checkbox,
  Input,
} from "@nextui-org/react";

export default function Lessons() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [moduleName, setModuleName] = useState("");
  const [lessonName, setLessonName] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleAddModuleAndLesson = () => {

    console.log("Module Name:", moduleName);
    console.log("Lesson Name:", lessonName);
    console.log("Checkbox Checked:", isChecked);


    onClose();
  };

  return (
    <>
      <Button onClick={onOpen} color="default">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><path d="M5 12h14"/><path d="M12 5v14"/></svg>
      </Button>
      <Modal isOpen={isOpen} onClose={onClose} placement="center">
        <ModalContent>
          <ModalHeader>Add Module and Lesson</ModalHeader>
          <ModalBody>
            <Input
              label="Module Name"
              placeholder="Enter module name"
              value={moduleName}
              onChange={(e) => setModuleName(e.target.value)}
              fullWidth
              marginY
            />
            <Input
              label="Lesson Name"
              placeholder="Enter lesson name"
              value={lessonName}
              onChange={(e) => setLessonName(e.target.value)}
              fullWidth
              marginY
            />
            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
            >
              This lesson is important
            </Checkbox>
          </ModalBody>
          <ModalFooter>
            <Button onClick={handleAddModuleAndLesson} auto>
              Add
            </Button>
            <Button onClick={onClose} auto>
              Cancel
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}
