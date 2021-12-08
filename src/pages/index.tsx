import {
  Button,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  useColorModeValue as mode,
  VStack,
} from '@chakra-ui/react';

import Container from '@/components/Container';
import Footer from '@/components/layout/Footer';
import NavBar from '@/components/layout/NavBar';

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
          <HStack>
            <Link
              aria-label='Deploy to Vercel'
              isExternal
              href='https://vercel.com/import/git?s=https://github.com/rizqitsani/next-chakra-ts-starter'
            >
              <Image
                src='https://vercel.com/button'
                alt='Vercel deploy button'
              />
            </Link>
            <Text as='span'>or</Text>
            <Button
              as='a'
              href='https://github.com/rizqitsani/next-chakra-ts-starter/generate'
              target='_blank'
              rel='noopener noreferrer'
              size='sm'
              colorScheme='orange'
            >
              Use This Template
            </Button>
          </HStack>
        </VStack>
      </Container>
      <Footer />
    </>
  );
};

export default HomePage;
