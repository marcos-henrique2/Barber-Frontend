import {useState, useContext} from 'react'
import Head from "next/head"
import Image from "next/image"
import logoImg from '../../../public/logo.svg'
import { Flex, Text, Center, Input, Button} from '@chakra-ui/react'
import Link from "next/link"
import { AuthContext } from '../../context/AuthContext'
import { canSSRGuest } from '@/utils/canSSRGuest'

export default function Register(){

    const { signUp } = useContext(AuthContext)
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function handleRegister(){
        if(name === '' && email === '' && password === ''){
            return;
        }

        await signUp({
            name,
            email,
            password
        })

    }

    return(
        <>
            <Head>
                <title>Crie sua conta no BarberPro</title>
            </Head>
            <Flex background="barber.900" height="100vh" alignItems="center" justifyContent="center" >
                
                <Flex width={640} direction="column" p={14} rounded={8}>
                    <Center p={4} mb={5}>
                        <Image
                            src={logoImg}
                            quality={100}
                            width={240}
                            objectFit="fill"
                            alt="Logo barberpro"
                        />
                    </Center>

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="Digite o nome da sua barbearia"
                        type="email"
                        mb={3}
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        color='white'
                    />
                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="Digite seu email"
                        type="email"
                        mb={3}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        color='white'
                    />

                    <Input
                        background="barber.400"
                        variant="filled"
                        size="lg"
                        placeholder="Digite sua senha"
                        type="password"
                        mb={6}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        color='white'
                    />

                    <Button
                        onClick={handleRegister}
                        background="button.cta"
                        mb={6}
                        color="gray.900"
                        size="lg"
                        _hover={{bg: "#ffb13e"}}
                    >
                        Cadastrar
                    </Button>

                    <Center mt={2} >
                        <Link href="/login" >
                            <Text>Já possui uma conta? <strong>Faça login</strong></Text>
                        </Link>
                    </Center>

                </Flex>

            </Flex>
        </>
    )
}

export const getServerSideProps = canSSRGuest (async (ctx) => {
    return {
        props: {}
    }
})