import ControleEditora from "@/classes/controle/ControleEditora"
import Livro from "@/classes/modelo/Livro";
import React from 'react';


const controleEditora = new ControleEditora();

interface LinhaLivroProps {
    livro: Livro;
    excluir: () => void;
}

export const LinhaLivro: React.FC<LinhaLivroProps> = (props) => {
    let nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <>
            <tr>
                <td className="d-flex flex-column align-items-start">{props.livro.titulo}<button className="btn btn-danger" onClick={() => props.excluir()}>Excluir</button></td>
                <td>{props.livro.resumo}</td>
                <td>{nomeEditora}</td>
                <td><ul>{props.livro.autores.map((autor, index) => <li key={index}>{autor}</li>)}</ul></td>
            </tr>
        </>
    )
}