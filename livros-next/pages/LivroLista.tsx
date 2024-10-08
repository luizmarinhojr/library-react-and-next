import type { NextPage } from 'next';
import React, { useEffect, useState } from 'react';
import styles from '../styles/Home.module.css';
import Livro from '@/classes/modelo/Livro';
import Head from 'next/head';
import { Menu } from '@/componentes/Menu';
import { LinhaLivro } from '@/componentes/LinhaLivro';


const baseURL: string = 'http://localhost:3000/api/livros';

const obter = async () => {
    let resposta = await fetch(baseURL);
    return await resposta.json();
}

const excluirLivro = async (codigo: number) => {
    const resposta = await fetch(`${baseURL}/${codigo}`, { method: 'DELETE' });
    return resposta.ok;
}

const LivroLista: NextPage = () => {
    const [livros, setLivros] = useState<Array<Livro>>([]);
    const [carregado, setCarregado] = useState<boolean>(false);

    useEffect(() => {
        if (!carregado) {
            obter().then(dados => {
                setLivros(dados);
                setCarregado(true);
            });
        }
    }, [carregado]);

    const excluir = (codigo: number) => {
        excluirLivro(codigo).then(() => setCarregado(false));
    }


    return (
        <>
        <div className={styles.container}>
            <Head>
                <title>Catálogo de Livros</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <Menu />
            <main className="container">
                <h1>Catálogo de Livros</h1>
                <table className="table table-striped table-hover">
                    <thead className="table-dark">
                        <tr>
                            <th>Título</th>
                            <th>Resumo</th>
                            <th>Editora</th>
                            <th>Autores</th>
                        </tr>
                    </thead>
                    <tbody>
                        {livros.map((livro) => (
                            <LinhaLivro 
                                key={livro.codigo}
                                livro={livro}
                                excluir={() => excluir(livro.codigo)}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </div>
        </>
    ) 
}

export default LivroLista;