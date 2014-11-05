# exemplo-phantomcss-palestra

Fork do repositório do PhantomCSS contendo exemplo de código para a palestra _Visual Regression Testing com PhantomCSS_, apresentada na trilha de Testes do evento [The Developer's Conference 2014 São Paulo](http://www.thedevelopersconference.com.br/tdc/2014/saopaulo/trilha-testes) e no [Agile Brazil 2014](http://www.agilebrazil.com/2014/)

## Setup

### Instalar PhantomJS

  - Windows: Baixar o .zip do PhantomJS (http://phantomjs.org/download.html), extrair para um diretório de sua preferência (ex: C:\phantomjs) e colocar esse diretório na variável PATH.
  - Ubuntu: Seguir instruções desse link http://codecuriosity.com/blog/2013/01/30/install-phantomjs-on-ubuntu/, pois a versão trazida pelo apt-get não é a mais atualizada.
  - Mac OS X: A forma mais simples é usando o Homebrew (http://brew.sh/). Após instalá-lo, basta ìnformar o comando ```brew update && brew install phantomjs```.

### Instalar CasperJS

  - Windows: Baixar o .zip da versão 1.1-beta3, extrair para um diretório de sua preferência (ex: C:\casperjs) e colocar o diretório ```bin``` na veriável PATH (ex: C:\casperjs\bin).
  - Ubuntu: Seguir instruções desse link http://mariehogebrandt.se/articles/installing-phantomjs-and-casperjs-on-ubuntu/
  - Mac OS X: Usando o Homebrew, basta informar o comando ```brew update && brew install casperjs --devel```.

## Como rodar?

O script de teste está no diretório ```testes```. Para executá-lo, abra um Terminal, navegue até o diretório do projeto e digite ```casperjs test testes/teste.js```.
