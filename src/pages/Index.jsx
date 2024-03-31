import React from "react";
import { Box, VStack, HStack, Heading, Text, Image, Link, Container } from "@chakra-ui/react";
import { FaTwitter, FaLinkedin, FaGithub } from "react-icons/fa";

const Index = () => {
  return (
    <Box bg="gray.100" minHeight="100vh">
      <Container maxW="container.lg" py={8}>
        <VStack spacing={8} align="center">
          <Image src="https://images.unsplash.com/photo-1619721951600-ca4a6d196a72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxlbG9uJTIwbXVzayUyMHBvcnRyYWl0fGVufDB8fHx8MTcxMTg2NDcxNHww&ixlib=rb-4.0.3&q=80&w=1080" alt="Elon Musk" borderRadius="full" boxSize="200px" />
          <Heading as="h1" size="2xl">
            Elon Musk
          </Heading>
          <Text fontSize="xl" color="gray.600">
            Entrepreneur, Engineer, Innovator
          </Text>

          <HStack spacing={4}>
            <Link href="https://twitter.com/elonmusk" isExternal>
              <FaTwitter size={24} />
            </Link>
            <Link href="https://www.linkedin.com/in/elon-musk-3a54b5b" isExternal>
              <FaLinkedin size={24} />
            </Link>
            <Link href="https://github.com/elonmusk" isExternal>
              <FaGithub size={24} />
            </Link>
          </HStack>

          <VStack align="start" spacing={4} maxW="2xl" textAlign="justify">
            <Heading as="h2" size="xl">
              About Me
            </Heading>
            <Text>I'm an entrepreneur and engineer, best known as the co-founder and CEO of SpaceX, and CEO and product architect of Tesla. I'm driven by the goal of reducing global warming through sustainable energy production and consumption, and reducing the risk of human extinction by establishing a human colony on Mars.</Text>

            <Heading as="h2" size="xl">
              Companies
            </Heading>
            <VStack align="start">
              <Heading as="h3" size="lg">
                SpaceX
              </Heading>
              <Text>SpaceX designs, manufactures and launches advanced rockets and spacecraft with the ultimate goal of enabling people to live on other planets.</Text>
              <Heading as="h3" size="lg">
                Tesla
              </Heading>
              <Text>Tesla is accelerating the world's transition to sustainable energy by producing electric vehicles, solar panels and integrated renewable energy solutions.</Text>
            </VStack>

            <Heading as="h2" size="xl">
              Philanthropy
            </Heading>
            <Text>I'm chairman of the Musk Foundation, which focuses its philanthropic efforts on providing solar-power energy systems in disaster areas, supporting research and advocacy for renewable energy, pediatric research, and science and engineering education.</Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
};

export default Index;
