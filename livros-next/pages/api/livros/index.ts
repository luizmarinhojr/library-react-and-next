import ControleLivros from "@/classes/controle/ControleLivros";
import { NextApiRequest, NextApiResponse } from "next";


export const controleLivro: ControleLivros = new ControleLivros();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            let livros = controleLivro.obterLivros();
            res.status(200).json(livros);
        } else if (req.method === 'POST') {
            const novoLivro = req.body;
            controleLivro.incluir(novoLivro);
            res.status(200).json({message: 'Livro adicionado com sucesso!'});
        } else {
            res.status(405).json({message: 'Método não permitido'});
        }
    } catch(error) {
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}