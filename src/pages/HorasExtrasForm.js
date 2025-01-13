import React from 'react'

const HorasExtrasForm = () => {
    return (
        <main id='HorasExtrasForm'>
            <h1>Formulário de Solicitação de Horas Extras</h1>
            <form>
                <label>Solicitante:</label>
                <input required type='text' />
                <label>Matrícula do Demandante:</label>
                <input required type='text' />
                <label>Empregado:</label>
                <input required type='text' />
                <label>Matrícula do Empregado:</label>
                <input required type='text' />
                <label>Solicitante:</label>
                <input required type='text' />
                <label>Setor de Origem:</label>
                <input required type='text' />
                <label>Mês/Ano:</label>
                <input required className='input-data' type='month' />
                <div>
                    <label>Data:</label>
                    <input required className='input-data' type='date' />
                    <br />
                    <label>Início (Hora):</label>
                    <input required className='input-data' type='time' />
                    <br />
                    <label>Término (Hora):</label>
                    <input required className='input-data' type='time' />
                    <br />
                    <label>Setor Demandante:</label>
                    <input required type='text' />
                    <label>Motivo (Identificar o empregado substituído):</label>
                    <br />
                    <textarea required />
                    <br />
                    <label>Observações Gerais:</label>
                    <br />
                    <textarea required />
                    <br />
                </div>
                <div>
                    <button>Enviar</button>
                    <p>*Caso necessite deve selecionar a nova data para justificar.</p>
                </div>
            </form>
        </main>
    )
}

export default HorasExtrasForm;