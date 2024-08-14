import Editora from "../modelo/Editora";

const editoras: Array<Editora> = [
    {
        codEditora: 1,
        nome: "Addison Wesley"
    },
    {
        codEditora: 2,
        nome: "Pearson"
    },
    { 
        codEditora: 3, 
        nome: "Alta Books" 
    }
];

class ControleEditora {

    public getNomeEditora(codEditora: number): string | undefined {
        const editora = editoras.filter(e => e.codEditora === codEditora);
        return editora[0].nome;
    }

    public getEditoras() {
        return editoras;
    }
}

export default ControleEditora;

