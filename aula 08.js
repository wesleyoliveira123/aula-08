class Livro {
  constructor(titulo, autor, ano) {
    this.titulo = titulo;
    this.autor = autor;
    this.ano = ano;
  }

  exibirInfo() {
    return `"${this.titulo}" de ${this.autor}, publicado em ${this.ano}`;
  }
}

const biblioteca = [];

function adicionarLivro(titulo, autor, ano) {
  const livro = new Livro(titulo, autor, ano);
  biblioteca.push(livro);
  console.log(`Livro adicionado: ${livro.exibirInfo()}`);
}

function buscarLivro(titulo) {
  const livroEncontrado = biblioteca.find(livro => livro.titulo.toLowerCase() === titulo.toLowerCase());
  if (livroEncontrado) {
    console.log(`Livro encontrado: ${livroEncontrado.exibirInfo()}`);
  } else {
    console.log(`Livro com título "${titulo}" não encontrado.`);
  }
}

function listarLivros() {
  console.log("Livros na biblioteca:");
  for (const livro of biblioteca) {
    console.log(livro.exibirInfo());
  }
}

function calcularMediaIdade() {
  const anoAtual = new Date().getFullYear();
  if (biblioteca.length === 0) {
    console.log("Não há livros na biblioteca para calcular a média.");
    return;
  }

  const somaIdades = biblioteca.reduce((total, livro) => {
    return total + (anoAtual - livro.ano);
  }, 0);

  const media = somaIdades / biblioteca.length;
  console.log(`A idade média dos livros é: ${media.toFixed(2)} anos.`);
}

adicionarLivro("1984", "George Orwell", 1949);
adicionarLivro("Dom Casmurro", "Machado de Assis", 1899);
adicionarLivro("O Senhor dos Anéis", "J.R.R. Tolkien", 1954);

listarLivros();

buscarLivro("1984");
buscarLivro("O Pequeno Príncipe");

calcularMediaIdade();
