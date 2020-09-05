<!-- PROJECT SHIELDS -->

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/thiago-rezende/docker4noobs">
    <!-- <img src="assets/horus_software_logo.png" alt="Logo" width="100" height="100"> -->
    <img src="docs/.vuepress/public/images/4noobs.svg" alt="Logo" width="60%">
  </a>

  <h3 align="center">Docker 4 Noobs</h3>

  <p align="center">
    Guia completo de Docker, Docker Compose, Swarm e Kubernetes
    <br />
    <strong>Este curso ainda está sendo desenvolvido.</strong>
    <br />
    <a href="https://thiago-rezende.github.io/docker4noobs/"><strong>Explore o Projeto »</strong></a>
    <br />
    <br />
    <a href="https://github.com/thiago-rezende/docker4noobs/issues">Informe um Bug</a>
    ·
    <a href="https://github.com/thiago-rezende/docker4noobs/issues">Solicite uma Feature</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->

## Índice

- [Sobre o projeto](#sobre-o-projeto)
- [Começando](#come%c3%a7ando)
  - [Pré-requisitos](#pr%c3%a9-requisitos)
  - [Instalação](#instala%c3%a7%c3%a3o)
- [Como Usar](#como-usar)
- [Roteiro](#roteiro)
- [Contribuindo](#contribuindo)
- [Licença](#licen%c3%a7a)
- [Contato](#contato)

<!-- SOBRE O PROJETO -->

## Sobre o projeto
Este curso tem como objetivo trazer conhecimentos do básico ao avançado sobre Docker, Docker Compose, Swarm e Kubernetes.

No decorrer deste projeto, você encontrará exemplos de código e comandos em todas as seções e tópicos para três sistemas operacionais, sendo eles:

- [ArchLinux](https://www.archlinux.org/)
- [CentOS](https://www.centos.org/)
- [Ubuntu](https://ubuntu.com/)

<!-- COMEÇANDO -->

## Começando
Em suma, não existem pré-requisitos que o impedem de fazer este curso, mas listarei alguns que o ajudarão no processo de aprendizagem.

### Pré-requisitos

- Checimento básico em sistemas baseados em **Linux**.
- Checimento básico sobre controle de versão de código com [**Git**](https://git-scm.com/).
- [**NodeJS**](https://nodejs.org/).
- [**Yarn**](https://yarnpkg.com/).
- [**Git**](https://git-scm.com/).

### Instalação

  **NodeJS**
  ```sh
    # Ubuntu/Debian
    apt-get install nodejs
    # Arch
    pacman -S nodejs
    # CentOS
    yum install nodejs
  ```

  **Yarn**
  ```sh
    # Ubuntu/Debian
    apt-get install yarn
    # Arch
    pacman -S yarn
    # CentOS
    curl --silent --location https://dl.yarnpkg.com/rpm/yarn.repo | sudo tee /etc/yum.repos.d/yarn.repo
    rpm --import https://dl.yarnpkg.com/rpm/pubkey.gpg
    yum install yarn
  ```

  **Git**
  ```sh
    # Ubuntu/Debian
    apt-get install git
    # Arch
    pacman -S git
    # CentOS
    yum install git
  ```

<!-- COMO USAR -->

## Como Usar
Para usar este curso, você tem três opções:

- Utiliziando o deploy feito no GitHub Pages [Docker 4 Noobs](https://thiago-rezende.github.io/docker4noobs/).
- Acompanhando os arquivos dentro da pasta `docs`.
- Construindo o projeto por conta própria.

### Construindo o Projeto
Depois de instalar todas as dependências, basta executar estes comandos:

```sh
  # Clone o repositório
  git clone https://github.com/thiago-rezende/docker4noobs.git
  # Entre no diretório do projeto
  cd docker4noobs
  # Instale as dependências
  yarn
  # Inicie o servidor de desenvolvimento [localhost:8080]
  yarn docs:dev
```

Caso você queira fazer o deploy em seu próprio servidor, execute estes comandos:

```sh
  # Depois disso, os arquivos estáticos estarão em docs/.vuepress/dist
  yarn docs:build
```

<!-- ROTEIRO -->

## Roteiro
Um pequeno índice das seções e tópicos que já foram feitos no curso.

- Instalação
  - [Preparando a Máquina](https://thiago-rezende.github.io/docker4noobs/1-instalacao/0-preparando-a-maquina)
  - [Git](https://thiago-rezende.github.io/docker4noobs/1-instalacao/1-git)
  - [Docker](https://thiago-rezende.github.io/docker4noobs/1-instalacao/2-docker)
  - [Docker Compose](https://thiago-rezende.github.io/docker4noobs/1-instalacao/3-docker-compose)
  - [Kubernetes](https://thiago-rezende.github.io/docker4noobs/1-instalacao/4-kubernetes)
  - [Packer](https://thiago-rezende.github.io/docker4noobs/1-instalacao/5-packer)
- 🚧 **Em Construção**: As próximas seções estão em construção

<!-- CONTRIBUIÇÃO -->

## Contribuindo

Contribuições são o que tornam a comunidade de código aberto um lugar incrível para aprender, inspirar e criar. Todas as contribuições que você fizer são **muito apreciadas**.

1. Crie um **Fork** o Projeto
2. Crie uma **Branch** para sua feature (`git checkout -b feature/amazing-feature`)
3. Faça o **Commit** de suas mudanças (`git commit -m 'feat: added my amazing feature'`)
4. Faça o **Push** para o **GitHub** (`git push origin feature/amazing-feature`)
5. Faça o **Pull Request** e aguarde a aprovação

<!-- LICENÇA -->

## Licença

MIT License

> Copyright (c) 2020 Thiago Rezende
>
> Permission is hereby granted, free of charge, to any person obtaining a copy
> of this software and associated documentation files (the "Software"), to > deal
> in the Software without restriction, including without limitation the rights
> to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
> copies of the Software, and to permit persons to whom the Software is
> furnished to do so, subject to the following conditions:
>
> The above copyright notice and this permission notice shall be included in > all
> copies or substantial portions of the Software.
>
> THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
> IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
> FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
> AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
> LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING > FROM,
> OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN > THE
> SOFTWARE.

<!-- CONTATO -->

## Contato

Thiago Rezende (Horus) - [@HorusHe4rt](https://twitter.com/HorusHe4rt) - horus.he4rt@gmail.com

Link do projeto: [https://thiago-rezende.github.io/docker4noobs/](https://thiago-rezende.github.io/docker4noobs/)

Link do repositório: [https://github.com/thiago-rezende/docker4noobs](https://github.com/thiago-rezende/docker4noobs)

<p align="center">Made with 💜</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[horus-software-logo]: assets/horus_software_logo.png
