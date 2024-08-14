import ControleLivros from '@/classes/controle/ControleLivros';
import { NextApiRequest, NextApiResponse } from 'next'
// import {controleLivro} from '.'; 

const controleLivro: ControleLivros = new ControleLivros();

// eslint-disable-next-line import/no-anonymous-default-export
export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'DELETE') {
            let codigoLivro = parseInt(req.query.codigo as string);
            controleLivro.excluir(codigoLivro);
            res.status(200).json({message: 'Livro excluido com sucesso!', codigo: codigoLivro});
        } else {
            res.status(405).json({message: 'Método não permitido'});
        }
    } catch(error) {
        res.status(500).json({message: 'Erro interno do servidor'});
    }
}