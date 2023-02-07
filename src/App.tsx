import { Button, ChakraProvider, Heading } from "@chakra-ui/react";


function App(): JSX.Element {
  return (
  <ChakraProvider>
    <Heading colorScheme='facebook'> Heading</Heading>
  <Button colorScheme='telegram'>Hello</Button>
  </ChakraProvider>
  )
}

export default App;
