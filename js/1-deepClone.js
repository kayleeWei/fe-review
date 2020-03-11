function deepClone (obj) {
  var res;
  if (obj instanceof Array) {
    res = [];
    var i = obj.length;
    while(i--) { // 先判断i是否为0能否进入循环，再--
      res[i] = deepClone(obj[i]);
    }
    return res;
  } else if (obj instanceof Object) {
    res = {};
    for(var k in obj) {
      res[k] = deepClone(obj[k])
    }
    return res;
  }
  return obj;
}

// console.log(deepClone({ a: { c: 1 }, b: 2 }))
console.log(deepClone([{ a: { c: 1 }, b: 2 }, 7, { v: 1 }]))