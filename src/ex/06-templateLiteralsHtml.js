const article = {
  title: 'Aprendendo Templante String',
  intro: 'Uma breve explicação de como se utilizar template string ES6 em código hoje.',
  body: 'Lorem Ipsum é simplesmente uma simulação de texto da indústria tipográfica e de impressos, e vem sendo utilizado desde o século XVI, quando um impressor desconhecido pegou uma bandeja de tipos e os embaralhou para fazer um livro de modelos de tipos. Lorem Ipsum sobreviveu não só a cinco séculos, como também ao salto para a editoração eletrônica, permanecendo essencialmente inalterado. Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum, e mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker.',
  tags: ['es6','js','templa-leteral'],
  Author: 'Willian Justen'
  
};

function renderAuthor(name) {
  return (name) ? name : 'unknown';
};

// versão saindo a virgula
// ${article.tags.map((tag)=>`<li>${tag}</li>`)} 

const markUp = `
  <article>
    <header>
      <h1>${article.title}</h1>
    </header>
    <section>
      <p>${article.intro}</p>
      <p>${article.body}</p>
    </section>
    <footer>
      <ul>
        ${article.tags.map((tag)=>`<li>${tag}</li>`).join('')} 
      </ul>
      <p>Autor: ${renderAuthor(article.Author)} </p>
    </footer>
  </article>
`;

document.body.innerHTML = markUp;
