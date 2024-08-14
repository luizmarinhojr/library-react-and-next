import Livro from "../modelo/Livro";

var livros: Array<Livro> = [
    {
        codigo: 1,
        codEditora: 3,
        titulo: "Use a cabeça: Java",
        resumo: "Use a cabeça! Java é uma experiência completa de aprendizado em programação orientada a objetos (OO) e Java.",
        autores: ["Bert Bates", "Kathy Sierra"]
    },
    {
        codigo: 2,
        codEditora: 2,
        titulo: "Java, como Programar",
        resumo: "Milhões de alunos e profissionais aprenderam programação e desenvolvimento de software com os livros Deitel",
        autores: ["Paul Deitel", "Harvey Deitel"]
    },
    {
        codigo: 3,
        codEditora: 1,
        titulo: "Core Java for the Impatient",
        resumo: "Modern Java introduces major enhancements that impact the core Java technologies and APIs at the heart of the Java platform",
        autores: ["Cay Horstmann"]
    }
];

class ControleLivros {

    public obterLivros() {
        return livros;
    }

    public incluir(livro: Livro) {
        livro.codigo = livros[livros.length - 1].codigo + 1;
        livros.push(livro);
    }

    public excluir(codigo: number) {
        console.log(livros);
        livros = livros.filter(livro => livro.codigo !== codigo);
        console.log(livros);
    }
}

export default ControleLivros;

