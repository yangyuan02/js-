https://juejin.im/post/5c03500e6fb9a049d37ed754

let callbacks = [];
let pending = false;

function nextTick(cb) {
  callbacks.push(cb);
  if (!pending) {
    pending = true;
    setTimeout(flushCallback,0);
  }
}

function flushCallback() {
  pending = false;
  let copies = callbacks.slice();
  callbacks.length = 0;
  copies.forEach(copy => {
    copy()
  })
}