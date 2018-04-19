# Como testar esse app

Tenha certeza de que o node e npm estejam instalados corretamente.
```
$ node -v
$ npm -v
```
O comando acima deve retornar a versão do node e do npm.

Em seguida, clone esse repo.
```
$ git clone https://github.com/Fconstant/rn-weather-demo.git
$ cd rn-weather-demo
```

E por fim, dentro da diretório do projeto:

>Tenha certeza de que um celular android esteja conectado no seu computador, ou algum emulador rodando.

```
$ npm i # Isso instala as dependencias locais
$ npm i -g react-native-cli # Esse é o CLI do react-native, para poder rodar o projeto
$ react-native run-android # Comando para rodar o app em android
```
