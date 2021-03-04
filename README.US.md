<div align="right">
  <a href="README.md">
    <img alt="Ler em Portugês do Brasil" src="https://img.shields.io/static/v1?label=&message=🇧🇷 Ler em Português do Brasil&color=green&style=for-the-badge" />
  </a>
</div>

<table>
  <tr>
    <td><img src="https://i.ibb.co/6ryTrMq/birth-range-by-age.png"></td>
    <td>  
      <h1>@desco/birth-range-by-age</h1>
      NPM package that allows, given an age, to obtain a range of dates on which birth / creation is possible.
      <br /><br />
      <div align="center">
        <img alt="MIT License" src="https://img.shields.io/static/v1?label=License&message=MIT&color=green&style=for-the-badge">
        <img alt="Version 1.0.2" src="https://img.shields.io/static/v1?label=Version&message=1.0.2&color=blue&style=for-the-badge">
      </div>
      <h4 align="center"> 
        🚀 Ready to use! 🚀
      </h4>
    </td>
  </tr>
</table>

> <a href="https://github.com/desco-npm" target="_blank">See other NPM projects here.</a>

> <a href="https://github.com/descoifica" target="_blank">See other projects here.</a>

---

## 📋 Table of Contents

* [🛠️ Technology](#Technology)
* [⚙️ Installation](#Installation)
* [📦 Import](#Import)
* [📚 How to use](#How-to-use)

---

<a name="Technology"></a>


## 🛠️ Technology

The following technologies are used:

* [NodeJS](https://nodejs.org/en/);
* [Moment](https://www.npmjs.com/package/moment);

---

<a name="Installation"></a>

## ⚙️ Installation

```bash
npm install --save @desco/birth-range-by-age
```

> Note that it will be necessary to have **NPM** installed for the command to work.

---

<a name="Import"></a>

## 📦 Import

### Node

`const birthRangeByAge = require('@desco/birth-range-by-age')`

### Browse

`import birthRangeByAge from '@desco/birth-range-by-age`

---

<a name="How-To-Use"></a>

## 📚 How to use

### Simple Use

Just call the function passing the desired age:

**Code:** 
```js
birthRangeByAge(34)
```

**Result:** 
```
[ '1985-08-06', '1986-08-06', ]
```

The returned value is an array containing, respectively, the smallest and largest data.

### Formatting

You can format the date returned, see:

**Code:** 
```js
birthRangeByAge(34, { format: 'DD/MM/YYYY', })
```

**Result:** 
```
[ '06/08/1985', '06/08/1986', ]
```

Note that **birthRangeByAge** uses **moment** for formatting, so [see official **moment** formatting documentation](https://momentjs.com/docs/#/displaying/) to find out all the possibilities.

### Quotation Marks

Sometimes we may want dates to come in quotation marks (for consultation in the database, for example), and ** birthRangeByAge ** does this easily, see:

**Code:** 
```js
birthRangeByAge(34, { quotes: true, })
```

**Result:** 
```
[ '"1985-08-06"', '"1986-08-06"', ]
```

---

## Author

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
        <img alt="GitHub Overview @descodifica" src="https://img.shields.io/static/v1?label=GitHub Overview&message=@descodifica&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://github.com/desco-npm" target="_blank">
        <img alt="GitHub NPM @desco-npm" src="https://img.shields.io/static/v1?label=GitHub NPM&message=@desco-npm&color=black&logo=github&style=for-the-badge">
      </a>
      <a href="https://www.npmjs.com/org/desco" target="_blank">
        <img alt="NPM @desco" src="https://img.shields.io/static/v1?label=NPM&message=@desco&color=red&logo=npm&style=for-the-badge">
      </a>
    </td>
  </tr>
</table>