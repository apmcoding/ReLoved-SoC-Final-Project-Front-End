import React from 'react';
import Logo from '../Global/Logo/LogoImage.png';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Image,
  Box,
} from '@chakra-ui/react';

export default function AddItemPopUp() {
  //sets the state for the modal (toggle)
  const { isOpen, onOpen, onClose } = useDisclosure();
  //sets the state (size) of the modal
  const [size, setSize] = React.useState('xl');
  // sets the size of the model once open button is clicked
  const handleSizeClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  return (
    <>
      <Button onClick={() => handleSizeClick(size)} key={size}>
        Open Modal
      </Button>

      <Modal isOpen={isOpen} size={size} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Add product</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Box boxSize="sm">
              <Image src={Logo} alt="Logo" />
            </Box>
            <FormControl>
              <FormLabel>Product Name</FormLabel>
              <Input placeholder="name your product!" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Location</FormLabel>
              <Input placeholder="Where is the item located?" />
            </FormControl>
            <FormControl mt={4}>
              <FormLabel>Condition</FormLabel>
              <Input placeholder="condition of the item" />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Decription</FormLabel>
              <Textarea placeholder="Please describe your what your giving!" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Add Item
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

//with the click of the button, we want to add the information (in the inputs) to our existing libs browser page
//input is going to be event.target.value (is going to target our inputs + textarea)
//const [newItem, setNewItem] =useState({})
// Product Name, Location, Condition, Decription => event.target.value => store them in variables
//setNewItem({
// key: (use item name for now)
// img: URL of the image
// alt: Product Name
// title: Product Name
// location: Location
//})
//output we want the newly take event.target.value to be showned in the ItemDisplay page, at the top of the list
