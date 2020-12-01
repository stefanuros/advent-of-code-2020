const {input} = require('./input')

const values = input
  .split('\n')
  .filter(val => {
    return val.length > 0
  })
  .map(val => parseInt(val))
  .sort((a, b) => {
    return a - b
  })

const part1 = (values) => {
  let l = 0
  let h = values.length - 1
  
  let result = 2020
  
  while (l < h) {
    const low = values[l]
    const high = values[h]
  
    if(low + high > result) {
      h--
    }
    else if(low + high < 2020) {
      l++
    }
    else {
      console.log(`(${low} * ${high}) = ${low * high}`)
      return
    }
  }

  console.log("No answer found")
}

const part2 = (values) => {
  // let l = 0
  let h = values.length - 1
  
  let result = 2020

  for(let i = 0; i < values.length; i++) {
    const cur = values[i]
    let l = i + 1
    
    while (l < h) {
      const low = values[l]
      const high = values[h]

      if(low + high + cur > result) {
        h--
      }
      else if(low + high + cur < 2020) {
        l++
      }
      else if (i !== l && i !== h) {
        console.log(`(${low} * ${high} * ${cur}) = ${low * high * cur}`)
        return
      }
    }
  }

  console.log("No answer found")
}

part1(values)
part2(values)

