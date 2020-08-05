# birthRangeByAge

Este pacote permite calcular, dada idade, o range de possível de datas de nascimento.

## Instalação

`npm i @desco/birth-range-by-age --save`

Note que será necessário ter o **NPM** instalado para o comando funcionar.

## Importação

### Node

`const birthRangeByAge = require('@desco/birth-range-by-age')`

### Browse

`import birthRangeByAge from '@desco/birth-range-by-age`

## Como usar

### Uso simples

Basta chamar a função passando a idade desejada:

**Código:** 
```
birthRangeByAge(34)
```

**Resultado:** 
```
[ '1985-08-06', '1986-08-06' ]
```

O valor retornado é um array contendo, respectivamente, a menor e maior data.

### Formatação

É possível formatar a data retornada, veja:

**Código:** 
```
birthRangeByAge(34, { format: 'DD/MM/YYYY' })
```

**Resultado:** 
```
[ '06/08/1985', '06/08/1986' ]
```

Note que o **birthRangeByAge** utiliza o **moment** para a formatação, sendo assim [consulte a documentação oficial de formatação do **moment**](https://momentjs.com/docs/#/displaying/) para saber todas as possíbilidades.

### Aspas

As vezes podemos querer que as datas venham entre aspas (para consulta no banco de dados, por exemplo), é **birthRangeByAge** faz isso facilmente, veja:

**Código:** 
```
birthRangeByAge(34, { quotes: true })
```

**Resultado:** 
```
[ '"1985-08-06"', '"1986-08-06"' ]
```