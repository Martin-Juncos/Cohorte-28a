'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  // var num = STRNG
  // digito * base(2) ** pos
  // pos str[i]  0 1 2
  // digito     '1 1 0'
  // pos form    2 1 0
  // base   -->    2
  // 0*2**0 + 1*2**1 + 1*2**2

  var res= 0;
  var pos = 0;
  for (let i = num.length-1; i >= 0; i--) {
    res = res + num[i] * 2 ** pos
    pos ++    
  }
  return res;
}

function DecimalABinario(num) {
  // tu codigo aca
  // num = NUMBER
  // 11 -- 11/2 -- 5.5 -- 5 | 1
  // 5  -- 5/2  -- 2.5 -- 2 | 1
  // 2  -- 2/2  -- 1   -- 1 | 0
  // 1  -- 1/2  -- 0.5 -- 0 | 1  --- 1 0 1 1
  // 1 + '' -->  1 + '1' --> 0 + '11' --> 1 + '011' --> '1011' 
  var res = ''; 
while(num !== 0){
  res =   num % 2 + res  ;
  num = Math.floor(num/2)
}
return res;
}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}