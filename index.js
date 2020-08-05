const moment = require('moment')
const { AgeFromDate, } = require('age-calculator')

// Calcula idade dada uma data
function calcAge (_date) {
  return new AgeFromDate(new Date(_date)).age
}

// Detecta data máxima ou mínima
function detect (_age, _type, _format) {
  // Data base (Data atual, porém com ano subtraído da idade)
  const date = moment(new Date()).subtract(_age, 'years')

  // Método de manipulação a ser usado no laço
  const loopMethod = _type === 'min' ? 'subtract' : 'add'

  // Método de manipulação a ser usado no final
  const finalMethod = _type === 'min' ? 'add' : 'subtract'

  // Valor a ser retornado
  let val

  // Percorre todas as datas da base para o passado ou futuro
  // até achar uma em que daria uma idade diferente da passada
  for (let cDate = date.clone(); calcAge(cDate) === _age; cDate[loopMethod](1, 'days')) {
    val = cDate
  }

  // Retorna a data
  return val[finalMethod](1, 'days').format(_format).toString()
}

const birthRangeByAge = (_age, _params = {}) => {
  const format = _params.format || 'YYYY-MM-DD'

  // Retorna o range
  return [ detect(parseInt(_age), 'min', format), detect(parseInt(_age), 'max', format), ]
    .map(i => _params.quotes ? `"${i}"` : i)
}

module.exports = birthRangeByAge