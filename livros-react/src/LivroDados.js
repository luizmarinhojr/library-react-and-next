import ControleLivros from "./controle/ControleLivros";
import ControleEditora from "./controle/ControleEditora";
import Livro from "./modelo/Livro";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const controleLivro = new ControleLivros();
const controleEditora = new ControleEditora();


const LivroDados = () => {

    const opcoes = controleEditora.getEditoras().map(editora => ({
        value: editora.codEditora,
        text: editora.nome
    }))

    const [titulo, setTitulo] = useState('');
    const [resumo, setResumo] = useState('');
    const [autores, setAutores] = useState('');
    const [codEditora, setCodEditora] = useState(opcoes[0].value);

    const navigate = useNavigate();

    function tratarCombo(evento) {
        setCodEditora(Number(evento.target.value))
    }

    function incluir(evento) {
        evento.preventDefault();

        const novoLivro = new Livro(
            0,
            codEditora,
            titulo,
            resumo,
            autores.split("\n")
        );

        controleLivro.incluir(novoLivro);
        navigate("/")
    }

    return (
        <main className="container">
            <h1>Dados do Livro</h1>
            <form onSubmit={incluir}>
                <div className="titulo mb-3">
                    <label htmlFor="titulo" className="form-label">Título</label>
                    <input type="text" className="form-control" id="titulo" value={titulo} onChange={(e) => setTitulo(e.target.value)} required></input>
                </div>

                <div className="resumo mb-3">
                    <label htmlFor="resumo" className="form-label">Resumo</label>
                    <textarea className="form-control" id="resumo" value={resumo} onChange={(e) => setResumo(e.target.value)} required></textarea>
                </div>
                
                <div className="editora mb-3">
                    <label htmlFor="editora" className="form-label">Editora</label>
                    <select id="editora" className="form-select" value={codEditora} onChange={tratarCombo}>
                        {opcoes.map(opcao => (
                            <option key={opcao.value} value={opcao.value}>{opcao.text}</option>
                        ))}
                    </select>
                </div>
            
                <div className="autores mb-3">
                    <label htmlFor="autores" className="form-label">Autores (1 por linha)</label>
                    <textarea className="form-control mb-3" id="autores" value={autores} onChange={(e) => setAutores(e.target.value)} required></textarea>
                </div>

                <button type="submit" className="btn btn-primary">Salvar Dados</button>
            </form>
        </main>
    )
}

export default LivroDados;