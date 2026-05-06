# 🌌 BingoLoot: O Despertar do Sistema

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

> *"O Fundo de Expedição exige sacrifícios equivalentes de energia. O Sistema convoca o Jogador."*

## 📜 Sobre o Projeto

O **BingoLoot** é uma aplicação Full Stack criada para gamificar a organização financeira. O objetivo? Transformar o processo monótono de guardar dinheiro para uma meta de longo prazo em uma verdadeira **Missão Diária de RPG**.

Inspirado em mecânicas de jogos *Gacha* e obras como *Solo Leveling*, o usuário é tratado como um "Jogador". Em vez de depositar um valor fixo, o Sistema exige que o jogador gire a roleta diária para descobrir qual será o valor do seu depósito. Cada valor está atrelado a um "Tier de Raridade" (do Ferro ao Lendário), com um Dashboard completo para acompanhar a evolução do Rank do jogador e a barra de progresso até a meta final.

`![GoDrinking!](https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZTN1amlicWY5M2ZlOWgycHJ1dmhuYnRxdjlrMHk5N3BrYzR0aTVnbiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/57XmIhxWMoedVJJxnQ/giphy.gif)`

---

## ✨ Features (Módulos do Sistema)

- 🎬 **Cinemática de Despertar:** No primeiro acesso, o sistema apresenta um vídeo imersivo que transiciona perfeitamente para a tela de registro de Caçador (usando animações CSS para simular o HUD do sistema abrindo).
- 🎲 **Motor Gacha 3D:** Roleta diária com física matemática precisa (calculada via Angular e SCSS). As cartas possuem faces misteriosas e revelam seu valor girando no próprio eixo (Efeito 3D Flip) com iluminação em neon dependendo da raridade.
- 📊 **Dashboard Dinâmico:** Monitoramento de Status em tempo real. A barra de "HP" enche conforme os depósitos avançam para os R$ 20.100,00, e o Rank do jogador sobe (E ao S) conforme ele sobrevive à Masmorra.
- 💾 **Persistência Inteligente:** Uma API Java Spring Boot que gerencia os 200 slots de depósito no banco de dados SQLite (Zero-config, ideal para uso local sem precisar subir containers ou servidores extras).

---

## 🛠️ Arquitetura e Tecnologias

Este repositório é um **Monorepo**, contendo tanto o back-end quanto o front-end isolados em suas respectivas pastas.

### 💻 Front-end (`/bingoloot-front`)
- **Angular 17+**: Utilizando a nova sintaxe de controle de fluxo (`@if`, `@for`) e componentes Standalone.
- **SCSS Avançado**: Mixins dinâmicos para geração de temas (Iron, Bronze, Legendary), Glassmorphism, Keyframes e propriedades de perspectiva 3D.
- **TypeScript & RxJS**: Consumo assíncrono da API Rest.

### ⚙️ Back-end (`/bingoloot-api`)
- **Java 17+ & Spring Boot 3**: Criação rápida e estruturada da API RESTful.
- **Spring Data JPA**: Mapeamento Objeto-Relacional (ORM) para a entidade `Deposit`.
- **SQLite**: Banco de dados relacional baseado em arquivo, garantindo que o projeto rode em qualquer máquina instantaneamente sem dependências externas.

---

## 🚀 Como iniciar o Sistema (Setup Local)

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (Para rodar o Angular)
- [Angular CLI](https://angular.io/cli)
- [Java JDK 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/)

### 1. Inicializando a Masmorra (Back-end)
Abra um terminal e navegue até a pasta da API:
```bash
cd bingoloot-api
# Inicie o servidor Spring Boot
mvn spring-boot:run

O Hibernate criará automaticamente o arquivo bingoloot.db na raiz da pasta. O servidor rodará na porta 8080.

2. Conectando a Interface (Front-end)
Abra um segundo terminal e navegue até a pasta do Front:

cd bingoloot-front
# Instale as dependências
npm install
# Rode o servidor de desenvolvimento
ng serve

O Sistema estará ativo e aguardando o Caçador em http://localhost:4200/.

👨‍💻 O Arquiteto

Com certeza, Lucca! Um projeto com essa temática de "Sistema" e "Despertar" merece um README que pareça a tela de status de um caçador de Rank S.

Como é um repositório Full Stack (Monorepo), nós vamos destacar a arquitetura das pastas e focar muito na sua criatividade em transformar um problema chato (guardar dinheiro) em uma experiência imersiva.

Copie o código abaixo e cole no seu arquivo README.md na raiz da pasta bingoloot-fullstack.

Markdown
# 🌌 BingoLoot: O Despertar do Sistema

![Angular](https://img.shields.io/badge/Angular-DD0031?style=for-the-badge&logo=angular&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)
![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)
![SQLite](https://img.shields.io/badge/SQLite-07405E?style=for-the-badge&logo=sqlite&logoColor=white)
![SCSS](https://img.shields.io/badge/SCSS-CC6699?style=for-the-badge&logo=sass&logoColor=white)

> *"O Fundo de Expedição exige sacrifícios equivalentes de energia. O Sistema convoca o Jogador."*

## 📜 Sobre o Projeto

O **BingoLoot** é uma aplicação Full Stack criada para gamificar a organização financeira. O objetivo? Transformar o processo monótono de guardar dinheiro para uma meta de longo prazo (Expedição Espanha 2027) em uma verdadeira **Missão Diária de RPG**.

Inspirado em mecânicas de jogos *Gacha* e obras como *Solo Leveling*, o usuário é tratado como um "Caçador". Em vez de depositar um valor fixo mensal, o Sistema exige que o jogador gire a roleta diária para descobrir qual será o valor do seu depósito. Cada valor está atrelado a um "Tier de Raridade" (do Ferro ao Lendário), com um Dashboard completo para acompanhar a evolução do Rank do jogador e a barra de progresso até a meta final.

*(Cole aqui um GIF ou Print do seu sistema rodando!)*
`![Demonstração do Sistema](link-para-sua-imagem-ou-gif-aqui)`

---

## ✨ Features (Módulos do Sistema)

- 🎬 **Cinemática de Despertar:** No primeiro acesso, o sistema apresenta um vídeo imersivo que transiciona perfeitamente para a tela de registro de Caçador (usando animações CSS para simular o HUD do sistema abrindo).
- 🎲 **Motor Gacha 3D:** Roleta diária com física matemática precisa (calculada via Angular e SCSS). As cartas possuem faces misteriosas e revelam seu valor girando no próprio eixo (Efeito 3D Flip) com iluminação em neon dependendo da raridade.
- 📊 **Dashboard Dinâmico:** Monitoramento de Status em tempo real. A barra de "HP" enche conforme os depósitos avançam para os R$ 20.100,00, e o Rank do jogador sobe (E ao S) conforme ele sobrevive à Masmorra.
- 💾 **Persistência Inteligente:** Uma API Java Spring Boot que gerencia os 200 slots de depósito no banco de dados SQLite (Zero-config, ideal para uso local sem precisar subir containers ou servidores extras).

---

## 🛠️ Arquitetura e Tecnologias

Este repositório é um **Monorepo**, contendo tanto o back-end quanto o front-end isolados em suas respectivas pastas.

### 💻 Front-end (`/bingoloot-front`)
- **Angular 17+**: Utilizando a nova sintaxe de controle de fluxo (`@if`, `@for`) e componentes Standalone.
- **SCSS Avançado**: Mixins dinâmicos para geração de temas (Iron, Bronze, Legendary), Glassmorphism, Keyframes e propriedades de perspectiva 3D.
- **TypeScript & RxJS**: Consumo assíncrono da API Rest.

### ⚙️ Back-end (`/bingoloot-api`)
- **Java 17+ & Spring Boot 3**: Criação rápida e estruturada da API RESTful.
- **Spring Data JPA**: Mapeamento Objeto-Relacional (ORM) para a entidade `Deposit`.
- **SQLite**: Banco de dados relacional baseado em arquivo, garantindo que o projeto rode em qualquer máquina instantaneamente sem dependências externas.

---

## 🚀 Como iniciar o Sistema (Setup Local)

### Pré-requisitos
Certifique-se de ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (Para rodar o Angular)
- [Angular CLI](https://angular.io/cli)
- [Java JDK 17+](https://www.oracle.com/java/technologies/javase/jdk17-archive-downloads.html)
- [Maven](https://maven.apache.org/)

### 1. Inicializando a Masmorra (Back-end)
Abra um terminal e navegue até a pasta da API:
```bash
cd bingoloot-api
# Inicie o servidor Spring Boot
mvn spring-boot:run
O Hibernate criará automaticamente o arquivo bingoloot.db na raiz da pasta. O servidor rodará na porta 8080.

2. Conectando a Interface (Front-end)
Abra um segundo terminal e navegue até a pasta do Front:

Bash
cd bingoloot-front
# Instale as dependências
npm install
# Rode o servidor de desenvolvimento
ng serve
O Sistema estará ativo e aguardando o Jogador em http://localhost:4200/.

👨‍💻 O Arquiteto
Lucca Lima

Desenvolvedor Full Stack & Jogador de Rank S

Linkedin: https://www.linkedin.com/in/lucca-lima-1b4439231/
