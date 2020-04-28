# Docker
Nesta seção, estaremos instalando o docker e configurando seu usuário para usá-lo.
> Explicações mais detalhadas sobre o docker serão fornecidas nas próximas seções.

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
```sh
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
Usando o método de instalação automatizada, o comando será o mesmo para todas as distros abordadas neste tutorial exceto para o `Arch`, infelizmente este script ainda não suporta o `Arch Linux` restando para ele a instalação `[MANUAL]` como  único método.

### Comando
```sh
  curl -fsSL https://get.docker.com | bash
```
