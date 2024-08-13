import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import { useState, useEffect } from "react";


const controleLivro = new ControleLivros();

const controleEditora = new ControleEditora();

function LinhaLivro(props) {
    let nomeEditora = controleEditora.getNomeEditora(props.livro.codEditora);

    return (
        <>
            <tr>
                <td className="d-flex flex-column align-items-start">{props.livro.titulo}<button className="btn btn-danger" onClick={() => props.excluir(props.livro.codigo)}>Excluir</button></td>
                <td>{props.livro.resumo}</td>
                <td>{nomeEditora}</td>
                <td><ul>{props.livro.autores.map((autor, index) => <li key={index}>{autor}</li>)}</ul></td>
            </tr>
        </>
    )
}

const LivroLista = () => {
    const [livros, setLivros] = useState([]);
    const [carregado, setCarregado] = useState(false);

    useEffect(() => {
        if (!carregado) {
          const livrosObtidos = controleLivro.obterLivros();
          setLivros(livrosObtidos);
          setCarregado(true);
        }
      }, [carregado]);
    
    const excluir = (codigo) => {
        controleLivro.excluir(codigo);
        console.log(codigo);
        setCarregado(false); 
    };

    return (
        <>
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
                                excluir={excluir}
                            />
                        ))}
                    </tbody>
                </table>
            </main>
        </>
    )
}

export default LivroLista;
