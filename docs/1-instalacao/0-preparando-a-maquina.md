# Preparando a Máquina
Nesta seção, prepararemos nossa máquina para instalar todos os softwares necessários para as próximas seções.
> Distribuições Linux abordadas neste curso:
> - Ubuntu/Debian
> - Arch
> - CentOS

## Atualização de Repositórios
Para executar a instalação corretamente, precisamos atualizar os repositórios de software de nossa distribuição.

Execute os comandos para a sua distro:

### Ubuntu/Debian
```sh
  apt-get update
  apt-get upgrade
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

## Ferramentas essenciais
Para executar alguns comandos no decorrer do tutorial, você precisará instalar algumas ferramentas.

Execute os comandos para a sua distro:

### Ubuntu/Debian
```sh
  apt-get install curl wget
```

### Arch
```sh
  pacman -S curl wget
```

### CentOS
```sh
  yum install curl wget
```

## Ferramentas opcionais
Essas são apenas algumas ferramentas que eu recomendo.

#### VIM `[EDITOR DE TEXTOEXTO]`
O `VIM` é um editor de texto baseado em console, muito simples e fácil de usar.

Execute os comandos para a sua distro:

### Ubuntu/Debian
```sh
  apt-get install vim
```

### Arch
```sh
  pacman -S vim
```

### CentOS
```sh
  yum install vim
```
