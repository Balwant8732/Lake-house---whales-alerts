import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { signInWithPopup, onAuthStateChanged } from 'firebase/auth';
import { auth, provider } from '../firebase';
import tw from 'tailwind-styled-components/dist/tailwind';

function Login() {

    const router = useRouter();

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                router.push('/');
            };
        });
    }, []);

    return (
        <Wrapper>
            <UberLogo src='https://hawkaerospace.in/assets/img/img/icons/Hawk1.png' />
           <center> <Title>Login to access your account</Title> </center>
           <br></br>
            <HeadImage src='https://www.glasgowprestwick.com/wp-content/uploads/2020/12/Drone-banner.jpg' />
            <SignInButton onClick={() => signInWithPopup(auth, provider)}>Sign in with Google</SignInButton>
        </Wrapper>
    )
}

export default Login

const Wrapper = tw.div`
    flex flex-col h-screen bg-gray-200 p-4
`

const SignInButton = tw.button`
    bg-black text-white text-center py-4 mt-8 self-center w-full
`

const UberLogo = tw.img`
    h-20 w-auto object-contain self-start
`
const Title = tw.div`
    text-5xl pt-4 text-gray-500
`

const HeadImage = tw.img`
    object-contain w-full
`