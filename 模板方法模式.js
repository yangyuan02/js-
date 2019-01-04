var Beverage = function (param) {
    var boilWater = function () {
        console.log('把水烧开')
    }
    var brew = param.brew || function () {
        throw new Error('必须传递brew方法')
    }
    var pourInCup = param.pourInCup || function () {
        throw new Error('必须传递pourIncup方法')
    }
    var addCondiments = param.addCondiments || function () {
        throw new Error('必须传递addCondiments方法')
    }
    var F = function () {};
    F.prototype.init = function () {
        boilWater();
        brew();
        pourInCup();
        addCondiments();
    }
    return F;
}

var Coffee = Beverage({
    brew: function () {
        console.log('用沸水冲泡咖啡')
    },
    pourInCup: function () {
        console.log('把咖啡倒进被子')
    },
    addCondiments: function () {
        console.log('加糖和牛奶')
    }
})
var Tea = Beverage({
    brew: function () {
        console.log('用沸水浸泡茶叶')
    },
    pourInCup: function () {
        console.log('把茶叶倒进杯子')
    },
    addCondiments: function () {
        console.log('加柠檬')
    }
})

var coffee = new Coffee()
coffee.init();
var tea = new Tea()
tea.init() 