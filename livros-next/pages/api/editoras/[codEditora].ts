/* eslint-disable import/no-anonymous-default-export */
import { NextApiRequest, NextApiResponse } from 'next'
import {controleEditora} from '.'

export default (req: NextApiRequest, res: NextApiResponse) => {
    try {
        if (req.method === 'GET') {
            // h) Implementar o tratamento de requisições para GET
            const codEditora = parseInt(req.query.codEditora as string);
            const nomeEditora = controleEditora.getNomeEditora(codEditora);
            
            if (nomeEditora) {
                res.status(200).json({ nome: nomeEditora });
            } else {
                res.status(404).json({ message: 'Editora não encontrada' });
            }
        } else {
            // i) Tratar status 405 para métodos não permitidos
            res.status(405).json({ message: 'Método não permitido' });
        }
    } catch (error) {
        // i) Tratar status 500 para exceções no servidor
        res.status(500).json({ message: 'Erro interno do servidor' });
    }
}