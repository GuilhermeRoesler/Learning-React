import React from 'react';
import Header from '../components/Header'
import Footer from '../components/Footer'
import LoginForm from '../components/LoginForm'

const LoginPage = () => {
    return (
        <>
            <Header />
            <main className='LoginPage-main'>
                <LoginForm />
            </main>
            <Footer />
        </>
    )
}

export default LoginPage;