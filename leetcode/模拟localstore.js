/*
 * @Author: yangyuan
 * @Date: 2020-04-30 14:59:44
 * @Email: 1367511704@qq.com
 * @LastEditTime: 2020-04-30 15:06:08
 * @Description:
 */

const localStorageMock = (function () {
    let store = {};
    return {
        getItem: function (key) {
            return store[key] || null;
        },
        setItem: function (key, value) {
            store[key] = value.toString();
        },
        removeItem: function (key) {
            delete store[key];
        },
        clear: function () {
            store = {};
        },
    };
})();

Object.defineProperty(window, "localStorage2", {
    value: localStorageMock,
});
localStorage2.setItem("test", "test");
console.log(localStorage2.getItem("test")); //test
localStorage2.removeItem("test");
console.log(localStorage2.getItem("test")); //null
localStorage2.setItem("test", "test");
localStorage2.clear();
console.log(localStorage2.getItem("test")); //null
