/*
 * @Author: yangyuan
 * @Date: 2019-07-25 14:30:26
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-05-14 14:48:24
 */
//juejin.im/post/5c03500e6fb9a049d37ed754
https: Vue源码解析之nextTick;

let callbacks = [];
let pending = false;

function nextTick(cb) {
    callbacks.push(cb);
    if (!pending) {
        pending = true;
        setTimeout(flushCallback, 0);
    }
}

function flushCallback() {
    pending = false;
    let copies = callbacks.slice();
    callbacks.length = 0;
    copies.forEach((copy) => {
        copy();
    });
}

// nexttick在vue里的执行机制，对应事件循环的哪一步
