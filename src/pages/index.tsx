import { Heading, useColorModeValue as mode, VStack } from '@chakra-ui/react';

import Container from '@/components/Container';
import Footer from '@/components/Footer';
import NavBar from '@/components/NavBar';

const HomePage = () => {
  return (
    <>
      <NavBar />
      <Container as='main'>
        <VStack
          as='section'
          justify='center'
          minHeight={{ base: 'calc(100vh - 7.5rem)', md: 'calc(100vh - 8rem)' }}
          spacing={6}
        >
          <Heading as='h1' color={mode('gray.900', 'orange.300')}>
            Next.js + Chakra UI + Typescript Starter
          </Heading>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
