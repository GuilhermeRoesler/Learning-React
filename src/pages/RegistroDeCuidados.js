import React from 'react'

const RegistroDeCuidados = () => {
    return (
        <main id='RegistroDeCuidados'>
            <h1>REGISTRO DE CUIDADOS</h1>
            <div>
                <label>Paciente: </label>
                <p></p>
                <label>Leito: </label>
                <p></p>
                <label>Médico: </label>
                <p></p>
            </div>
            <table>
                <thead>
                    <tr>
                        <th colSpan={2} rowSpan={2}>Data</th>
                        <th colSpan={2} rowSpan={2}>Hora</th>
                        <th colSpan={6}>Sinais Vitais</th>
                        <th colSpan={2}>Oximetria</th>
                        <th colSpan={3}>Administração</th>
                        <th colSpan={3}>Eliminação</th>
                        <th colSpan={6} rowSpan={2}>Evolução / Observações</th>
                    </tr>
                    <tr>
                        <th colSpan={2}>PA</th>
                        <th colSpan={1}>FC</th>
                        <th colSpan={1}>T</th>
                        <th colSpan={1}>HGT</th>
                        <th colSpan={1}>O2</th>
                        <th colSpan={1}>AA</th>
                        <th colSpan={1}>VO</th>
                        <th colSpan={1}>EV</th>
                        <th colSpan={1}>SNG</th>
                        <th colSpan={1}>DIU</th>
                        <th colSpan={1}>FEZ</th>
                        <th colSpan={1}>VÔM</th>
                    </tr>
                </thead>
            </table>
        </main>
    )
}

export default RegistroDeCuidados;