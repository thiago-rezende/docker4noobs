# Packer
Nesta seção, estaremos instalando o Packer.
O Paker é uma ferramenta open source, utilizado para criar imagens de máquinas, essas imagens contém um sistema operacional pré-configurado e software instalado que é usado para criar rapidamente novas máquinas

# Instalação
Existem dois métodos principais de instalação do packer, usando um binário pré-compilado e instalando da fonte. Vou explicar o método do binário pré-compilado


# download o binário 
Entre no link do packer e baixe o pacote apropriado para o seu sistema.


> [https://www.packer.io/downloads.html](https://www.packer.io/downloads.html)

<br />
<div align="center">

  <a href="https://github.com/ManuelSVDuarte/docker4noobs">
    <img src="/assets/instalacao-packer-01.png">
  </a>


</div>


# Extraindo o arquivo 

Na pasta onde realizou o download execute o comando para extrair os arquivos da pasta .zip
> nota: o nome do arquivo pode mudar.

```
unzip packer_1.6.2_linux_amd64.zip
```

# Copiar o arquivo para a pasta /usr/local/bin

Antes de copiar o arquivo para essa pasta, entre como root digitando o comando abaixo
> nota: depois de digitar o comando, vai ser solicitado a senha do usuário root.

```
su
```

Na pasta onde se encontra o arquivo extraído execute

```
cp ./packer /usr/local/bin
```

# Verificando a instalação


Execute o comando a seguir 

```
packer
```

Veja um exemplo do comando

<br />
<div align="center">

  <a href="https://github.com/ManuelSVDuarte/docker4noobs">
    <img src="/assets/instalacao-packer-02.png">
  </a>


</div>










 
