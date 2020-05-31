# Kubernetes
O [`Kubernetes`][kubernetes-site] (K8s) é um software `Open Source` utilizado para automatizar a implantação, o dimensionamento e o gerenciamento de aplicativos em contêiner.

O método de instalação padrão do kubernetes pode ser assustador para iniciantes, devido às várias etapas e configurações. Sabendo disso, escolhi outro software para ajudá-lo na instalação. O software é o [`k3d`][k3d-github], que automatiza a criação de clusters k3s.

O [k3s][k3s-github] é a distribuição Kubernetes mais leve criado, e mantido pela [Rancher][rancher-site].

O k3d cria clusters k3s em contêineres. Isso significa que você pode ativar um cluster k3s de vários nós em uma única máquina usando a janela de encaixe.

> Mais informações sobre `Kubernetes`, `k3d`, `k3s` e `clusters` serão fornecidas nas próximas seções.

# Instalação
A instalação do k3d é feita através de um script de instalação, o comando será o mesmo para todas as distribuições abordadas neste tutorial.

## Kubectl
Antes de instalar o `k3d`, precisamos da ferramenta `kubectl`, através desta ferramenta será possível acessar e controlar nosso cluster.

 Os comandos serão os mesmos para todas as distros abordadas neste tutorial.

### Commands
> Faça o download do binário
```sh
  curl -LO https://storage.googleapis.com/kubernetes-release/release/`curl -s https://storage.googleapis.com/kubernetes-release/release/stable.txt`/bin/linux/amd64/kubectl
```
> Torne executável
```sh
  chmod +x ./kubectl
```
> Mover para alguma pasta incluída no `PATH`
```sh
  mv ./kubectl /usr/local/bin/kubectl
```

# K3d
Os seguintes comandos vão instalar, configurar e testar um cluster k3d.

Os comandos serão os mesmos para todas as distros abordadas neste tutorial.

## Comandos
> Instale a última versão
```sh
  curl -s https://raw.githubusercontent.com/rancher/k3d/master/install.sh | bash
```
> Crie um cluster
```sh
  k3d create cluster mycluster
```
> Exportar a variável KUBECONFIG
```sh
  export KUBECONFIG="$(k3d get-kubeconfig --name='k3s-default')"
```
> Verifique o status do cluster
```sh
  kubectl cluster-info
```

# Pós-instalação
Como, provavelmente, você não usará esse cluster muito cedo no tutorial, recomendo excluir o cluster e recriá-lo apenas na seção em que você aprenderá sobre os kubernetes. Para fazer isso, execute o seguinte comando.

## Comando
```sh
  k3d delete mycluster
```

[kubernetes-site]: https://kubernetes.io/
[k3d-github]: https://github.com/rancher/k3d
[rancher-site]: https://rancher.com/
[k3s-github]: https://github.com/rancher/k3s
