# Docker
Nesta seção, estaremos instalando o docker e configurando seu usuário para usá-lo.
> Explicações mais detalhadas sobre o docker serão fornecidas nas próximas seções.

# Instalação
Uma variedade de métodos de instalação está disponível nos sistemas linux. Nesta seção, abordarei dois métodos, um deles fazendo uma instalação manual e outro usando um script `bash` para automatizar a instalação.

## Primeiro método `[MANUAL]`
Execute os comandos para a sua distro:

### Ubuntu/Debian
```sh
  curl
```

### Arch
```sh
  pacman -Syu
```

### CentOS
```sh
  yum check-update
  yum update
```

## Segundo método `[AUTOMÁTICO]`
Usando o método de instalação automatizada, o comando será o mesmo para as três distros abordadas neste tutorial.

### Comando
```sh
  curl -fsSL https://get.docker.com | bash
```
