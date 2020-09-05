# Docker Compose
O `Docker Compose` é uma ferramenta que facilita a criação, configuração e orquestração de `Docker Containers`

> Mais informações sobre o `Docker Compose` serão fornecidas nas próximas seções.

# Instalação
No Linux, você pode baixar o binário do Docker Compose direto do repositório do [Compose no GitHub][compose-github].

Usaremos o comando `curl` para fazer o download sem a necessidade de um navegador web.

> O comando é o mesmo para todas as distros abordadas neste tutorial.

```sh
  curl -L "https://github.com/docker/compose/releases/download/1.25.5/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
```

> Adicione as permissões de execução ao binário do Docker Compose.

```sh
  chmod +x /usr/local/bin/docker-compose
```

[compose-github]: https://github.com/docker/compose
