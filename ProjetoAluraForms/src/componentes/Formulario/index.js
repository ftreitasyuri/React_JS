import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import { useState } from 'react';
import ListaSuspensa from '../ListaSuspensa';
import './Formulario.css'

const Formulario = () => {

    const times = [
        'Progração',
        'Front-end',
        'DevOps',
        'UX e Design',
        'Inovação e gestão'
    ]

    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const aoSalvar = (evento) => {
        evento.preventDefault();
        console.log('Form foi submetido', nome, cargo, imagem, time);
    }

    return (
        <section className="formulario" >
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do colaborador</h2>
                <CampoTexto
                    obrigatorio={true}
                    label="Nome"
                    placeholder="Digite seu nome"
                    valor={nome}
                    aoAlterado={valor => setNome(valor)}
                />
                <CampoTexto
                    obrigatorio={true}
                    label="Cargo"
                    placeholder="Digite seu cargo"
                    valor={cargo}
                    aoAlterado={valor => setCargo(valor)}
                />

                <CampoTexto
                    obrigatorio={true}
                    label="Imagem"
                    placeholder="Digite a URL da sua imagem"
                    valor={imagem}
                    aoAlterado={valor => setImagem(valor)}
                />

                {/* <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" /> */}
                {/* <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" /> */}
                <ListaSuspensa
                    obrigatorio={true}
                    label="Time"
                    itens={times}
                    valor={time}
                    aoAlterado={valor => setTime(valor)}
                />

                <Botao>
                    Criar Card
                </Botao>
            </form>
        </section>
    );


}

export default Formulario