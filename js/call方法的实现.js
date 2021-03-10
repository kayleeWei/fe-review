Function.prototype.myCall = function (context, ...args) {
  if (context === null) {
    context = window;
  }

  if (typeof context !== 'object' && typeof context !== 'function') {
    context = new context.constructor(context);
  }

  let key = Symbol('key');
  context[key] = this;

  let res = context[key](...args);
  delete context[key];
  return res;
}
var a = 1;
function test () {
  console.log(this.a)
}
// console.log(test.myCall({ a: 2}))
// test.myCall({ a: 2});
test.myCall('s');