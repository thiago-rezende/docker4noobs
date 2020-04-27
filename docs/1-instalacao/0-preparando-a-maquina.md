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

## Arch
```sh
  pacman -Syu
```

## CentOS
```sh
  yum check-update
  yum update
```