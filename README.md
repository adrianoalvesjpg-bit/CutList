# CutCable

Aplicação web para gestão de materiais, catálogo de componentes e criação visual de diagramas de cabos e harnesses em um editor interativo.

## Visão geral

O CutCable é uma solução em desenvolvimento para facilitar o acompanhamento de itens de eletrônica e cablagem, com foco em:

- visualização de produtos e materiais em catálogo;
- organização por categoria e filtros;
- criação de diagramas de cabos e conexões em interface visual;
- adição de nós e conexões para representar pontos, derivações, terminais, emendas, diodos e resistores;
- uso de uma interface moderna em Next.js com React Flow para desenho interativo.

A aplicação combina navegação por telas com um ambiente de desenho de harness, permitindo expandir a lógica de montagem e documentação de sistemas elétricos.

## Principais funcionalidades

- Catálogo de produtos com informações como código, descrição, número de peça, cor, pinos, dimensões e status;
- Filtros laterais para navegação por categoria de produtos;
- Tela de materiais e registros para expansão futura da base de componentes;
- Editor gráfico de cabos com React Flow;
- Tipos de nós disponíveis:
  - saída;
  - derivação;
  - terminação;
  - emenda;
  - diodo;
  - resistor;
- Conexões automáticas entre nós com estilos visuais e controles de zoom e ajuste de viewport.

## Stack tecnológica

- Next.js 16
- React 19
- React Flow (@xyflow/react)
- CSS Modules
- ESLint

## Estrutura do projeto

```bash
cutcable/
├── public/
├── src/
│   └── app/
│       ├── components/
│       │   ├── ReactFlow/
│       │   └── ui/
│       ├── screens/
│       ├── style/
│       ├── globals.css
│       ├── layout.js
│       └── page.js
├── eslint.config.mjs
├── jsconfig.json
├── next.config.mjs
├── package.json
├── README.md
└── .gitignore
```

## Requisitos

Antes de iniciar, certifique-se de ter instalado:

- Node.js 18+
- npm ou outro gerenciador de pacotes

## Instalação

1. Clone o repositório:

```bash
git clone https://github.com/seu-usuario/cutcable.git
cd cutcable
```

2. Instale as dependências:

```bash
npm install
```

## Como executar

### Ambiente de desenvolvimento

```bash
npm run dev
```

Acesse no navegador:

```text
http://localhost:3000
```

### Build de produção

```bash
npm run build
```

### Iniciar build pronto

```bash
npm start
```

## Scripts disponíveis

```bash
npm run dev     # inicia o servidor em modo desenvolvimento
npm run build   # gera a versão de produção
npm run start   # executa a aplicação já compilada
npm run lint    # valida o código com ESLint
```

## Fluxo de uso

1. A tela inicial exibe o catálogo de produtos.
2. A navegação lateral/superior permite alternar entre módulos do sistema.
3. Na área de desenho, é possível adicionar nós do tipo desejado e conectar os elementos visualmente.
4. O conjunto de nós e ligações pode servir como base para documentação de projetos elétricos, montagem de cabos e organização de materiais.

## Status do projeto

Este projeto está em fase de desenvolvimento inicial, com foco em interface e protótipo funcional de visualização e desenho de diagramas.

## Próximos passos sugeridos

- implementar persistência de dados para catálogo e diagramas;
- salvar e carregar projetos de cablagem;
- melhorar a lógica de conexão entre nós;
- adicionar edição de atributos dos componentes;
- criar exportação para PDF, imagem ou JSON;
- expandir a tela de materiais e registro de itens.

## Contribuição

Contribuições são bem-vindas. Para colaborar:

1. Faça um fork do projeto;
2. Crie uma branch para sua funcionalidade;
3. Faça o commit das alterações;
4. Abra um pull request.

## Licença

Este projeto ainda não foi definido com uma licença específica. Caso queira publicar em GitHub público, recomenda-se definir uma licença como MIT ou Apache 2.0.

## Observação

O README foi adaptado ao estado atual do software e reflete a estrutura e as funcionalidades visualmente presentes no código do projeto.
