import Head from "next/head"
import { Flex, Text, Button, Link} from '@chakra-ui/react'

export default function Login(){
    return(
        <>
            <Head>
                <title>BarberPro - Seu sistema completo</title>
            </Head>
            <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center" >
                <Link href="/login">
                    <Button>Ir para tela de login</Button>
                </Link>
            </Flex>
        </>
    )
}