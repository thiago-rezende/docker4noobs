# Docker
Nesta seção, estaremos instalando o docker e configurando seu usuário para usá-lo.

> Explicações mais detalhadas sobre o docker serão fornecidas nas próximas seções.

[[toc]]

# Instalação
Uma variedade de métodos de instalação está disponível nos sistemas linux. Nesta seção, abordarei dois métodos, um deles fazendo uma instalação manual e outro usando um script `bash` para automatizar a instalação.

## Primeiro método `[MANUAL]`
Execute os comandos para a sua distro:

### Ubuntu
> Instale as dependências do `Docker`
```sh
apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
> Adicione a chave `GPG` oficial do `Docker`
```sh
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -
```
> Adicione o repositório `Docker`
```sh
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"
```
> Instale o `Docker Engine`
```sh
  apt-get update
  apt-get install docker-ce docker-ce-cli containerd.io
```

### Debian
> Instale as dependências do `Docker`
```sh
apt-get install \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common
```
> Adicione a chave `GPG` oficial do `Docker`
```sh
curl -fsSL https://download.docker.com/linux/debian/gpg | sudo apt-key add -
```
> Adicione o repositório `Docker`
```sh
add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/debian \
   $(lsb_release -cs) \
   stable"
```
> Instale o `Docker Engine`
```sh
  apt-get update
  apt-get install docker-ce docker-ce-cli containerd.io
```

### Arch
> Como o pacote `Docker` já está nos repositórios do `Arch Linux`, você só precisa executar o comando de instalação.
```sh
  pacman -S docker
```

### CentOS
> Instale as dependências do `Docker`
```sh
  yum install -y yum-utils

```
> Adicione o repositório `Docker`
```sh
yum-config-manager \
    --add-repo \
    https://download.docker.com/linux/centos/docker-ce.repo
```
> Instale o `Docker Engine`
```sh
  yum install docker-ce docker-ce-cli containerd.io
```
> Inicie o serviço do `Docker`
```sh
  systemctl start docker
```

## Segundo método `[AUTOMÁTICO]`
Usando o método de instalação automatizada, o comando será o mesmo para todas as distros abordadas neste tutorial exceto para o `Arch`, Este script não suporta o `Arch Linux` pois o pacote `Docker` já está disponível em seus repositórios.

### Comando
```sh
  curl -fsSL https://get.docker.com | bash
```

# Etapas pós-instalação `[OPCIONAL]`
Se você precisar executar o comando `docker` como outro usuário que não o `root`, será necessário adicionar esse usuário ao grupo de usuários `docker`.

⚠️ __CUIDADO__: Faça isso apenas no seu servidor de teste. Nenhum usuário pode ter permissões equivalentes ao `root` no servidor de produção.

> O comando de gerenciamento de grupo de usuários é o mesmo para todas as distribuições abordadas neste tutorial.

> Substitua o `$USER` para o nome de usuário desejado.
```sh
  usermod -aG docker $USER
```
