import React from 'react';
import Header from '../components/Header.js'
import Footer from '../components/Footer.js'

function Home() {
    return (
        <div className='App'>
            <Header />
            <main className='Home-main'>
                <div class='bem-vindo'>
                    <h1>Bem-vindo Guilherme,</h1>
                    <h4>Você está acessando o portal da FHGV</h4>
                </div>
            </main>
            <Footer />
        </div>
    )
}

export default Home;