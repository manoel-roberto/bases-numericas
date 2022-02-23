function divInt(n){
  if(n%2 === 0){
    return n/2
  }else{
    return (n-1)/2
  }
}

function binario(n){
  let v = ''
  let c = ''
  for(var i = n; i >= 1; i = divInt(i)){
    v += `${i%2}`
  }

  for(var i = v.length - 1; i >= 0; i--){
    c += v[i]
  }
  /* return v.split("").reverse().join("") */
  return c
}

console.log('inicio')
console.log(binario(19))
console.log('fim')