import Link from 'next/link';
import Image from 'next/image';
import {Flex,Box,Text,Button} from '@chakra-ui/react';

const Banner = ({purpose, title1 , title2, desc1 , desc2,}) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} widht={500} height={300} alt="banner" />
    <Box p="5">
    <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
    <Text fontSize="3x1" fontWeight="bold">{title1}<br/>{title2}</Text>
    <Text fontSize="lg" paddingTop="3" paddingBottom="3" color="gray.700">{desc1}</Text>
<Button fontSize="x1" bg="blue.300" color="white">
<Link href={linkName}>{buttonText}</Link>

</Button>

    </Box>
  </Flex> 

)
export default function Home() {
  return (
    <div >
    <h1>Hello World</h1>

    <Banner purpose={'For Sale'} /> 
    <Banner purpose={'For Rend'} />

    </div>  
  )
}
