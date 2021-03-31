<div align="right">
  <a href="README.US.md">
    <img alt="Read in American English" src="https://img.shields.io/static/v1?label=&message=Read+in+American+English&color=red&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/6ryTrMq/birth-range-by-age.png"></td>
    <td>  
      <h1>@desco/birth-range-by-age</h1>
      Pacote NPM que permite que, dada uma idade, obter uma faixa de datas nas quais é possível o nascimento / a criação.
      <br /><br />
      <div align="center">
        <img alt="Licença MIT" src="https://img.shields.io/static/v1?label=Licen%C3%A7a&message=MIT&color=green&style=for-the-badge">
        <img alt="Versão 1.0.2" src="https://img.shields.io/static/v1?label=Vers%C3%A3o&message=1.0.2&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Pronto para uso! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">Veja outros projetos NPM aqui.</a>

> <a href="https://github.com/descoifica" target="_blank">Veja outros projetos aqui.</a>

---

## 📋 Tabela de conteúdos

- [🛠️ Tecnologias](#Tecnologias)
- [⚙️ Instalação](#Instalação)
- [📦 Importação](#Importação)
- [📚 Como Usar](#Como-Usar)

---

<a name="Tecnologias"></a>

## 🛠️ Tecnologias

As seguintes tecnologias são utilizadas:

- [NodeJS](https://nodejs.org/en/);
- [Moment](https://www.npmjs.com/package/moment);

---

<a name="Instalação"></a>

## ⚙️ Instalação

```bash
npm install --save @desco/birth-range-by-age
```

> Note que será necessário ter o **NPM** instalado para o comando funcionar.

---

<a name="Importação"></a>

## 📦 Importação

### Node

`const birthRangeByAge = require('@desco/birth-range-by-age')`

### Browse

`import birthRangeByAge from '@desco/birth-range-by-age`

---

<a name="Como-Usar"></a>

## 📚 Como Usar

### Uso simples

Basta chamar a função passando a idade desejada:

**Código:**

```js
birthRangeByAge(34);
```

**Resultado:**

```
[ '1985-08-06', '1986-08-06', ]
```

O valor retornado é um array contendo, respectivamente, a menor e maior data.

### Formatação

É possível formatar a data retornada, veja:

**Código:**

```js
birthRangeByAge(34, { format: "DD/MM/YYYY" });
```

**Resultado:**

```
[ '06/08/1985', '06/08/1986', ]
```

Note que o **birthRangeByAge** utiliza o **moment** para a formatação, sendo assim [consulte a documentação oficial de formatação do **moment**](https://momentjs.com/docs/#/displaying/) para saber todas as possíbilidades.

### Aspas

As vezes podemos querer que as datas venham entre aspas (para consulta no banco de dados, por exemplo), e **birthRangeByAge** faz isso facilmente, veja:

**Código:**

```js
birthRangeByAge(34, { quotes: true });
```

**Resultado:**

```
[ '"1985-08-06"', '"1986-08-06"', ]
```

---

## Autor

<table>
  <tr>
    <td width="150px">
      <img src="https://scontent.fsdu1-1.fna.fbcdn.net/v/t1.0-9/539886_235546170253505_5977326689811409130_n.jpg?_nc_cat=106&ccb=3&_nc_sid=174925&_nc_eui2=AeGgFWn_fWInwRkTo3mHSP993TbQ0TzG0Y3dNtDRPMbRjS-eZL1tr4I5maqz6O-jva9qWnIxKOsD3UtSm9CTeCys&_nc_ohc=Qw6NaDGrtIgAX9uFF2c&_nc_ht=scontent.fsdu1-1.fna&oh=5ebac9874d7a24e157c8c99fd965c2a4&oe=606539CE" width="100px;" alt=""/>
      <b>Rafael A. R. Dias</b>
    </td>
    <td>  
      <a href="mailto:eu@diasrafael.com.br" target="_blank" >
        <img alt="Email eu@diasrafael.com.br" src="https://img.shields.io/static/v1?label=Email&message=eu@diasrafael.com.br&color=red&logo=gmail&style=for-the-badge">
      </a>
      <a href="https://www.linkedin.com/in/diasrafael/" target="_blank">
        <img alt="Linkedin @diasrafael" src="https://img.shields.io/static/v1?label=Linkedin&message=@diasrafael&color=blue&logo=linkedin&style=for-the-badge">
      </a>
      <a href="https://www.facebook.com/eudiasrafael" target="_blank">
        <img alt="Facebook @eudiasrafael" src="https://img.shields.io/static/v1?label=Facebook&message=@eudiasrafael&color=blue&logo=facebook&style=for-the-badge">
      </a>
      <a href="https://github.com/descodifica" target="_blank">
        <img alt="GitHub Geral @descodifica" src="https://img.shields.io/static/v1?label=GitHub+Geral&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub+NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>
