// 牌的数组
var arr1 = new Array(); // 牌1
var arr2 = new Array(); // 牌2
var arr3 = new Array(); // 牌3

// 获取牌
function pai() {
    var arr = [
        "♣A", "♣2", "♣3", "♣4", "♣5", "♣6", "♣7", "♣8", "♣9", "♣10", "♣J", "♣Q", "♣K",
        "♠A", "♠2", "♠3", "♠4", "♠5", "♠6", "♠7", "♠8", "♠9", "♠10", "♠J", "♠Q", "♠K",
        "♥A", "♥2", "♥3", "♥4", "♥5", "♥6", "♥7", "♥8", "♥9", "♥10", "♥J", "♥Q", "♥K",
        "♦A", "♦2", "♦3", "♦4", "♦5", "♦6", "♦7", "♦8", "♦9", "♦10", "♦J", "♦Q", "♦K",
        "大王", "小王"
    ]

    return arr;
}

// 打乱牌，返回新的牌
function daLuan(arr) {
    var a = arr.length;
    var arr0 = new Array(arr.length);

    for (var i = 0; i < a; i++) {
        // 随机抽取一张牌
        var b = Math.floor(Math.random() * (a - i));
        // 将抽取的牌放到新数组上
        arr0[i] = arr[b];
        // 数组缩小
        arr = jian(arr, b);
    }

    return arr0;
}

// 按照每个人一张的顺序发牌
function faPai(arr) {
    var a = 1; // 计数器

    for (var i = 0; i < arr.length - 2; i++) {
        if (a >= 52) {
            // 地主牌
            diZhu(arr);
        } else if (a % 3 == 1) {
            // 发牌1
            faPaiXinWei(arr1, arr[i]);
            a++;
        } else if (a % 3 == 2) {
            // 发牌2
            faPaiXinWei(arr2, arr[i]);
            a++;
        } else if (a % 3 == 0) {
            // 发牌3
            faPaiXinWei(arr3, arr[i]);
            a++;
        } else {
            document.writeln("洗牌出问题了！！！");
        }
    }
}



// 数组减容
function jian(arr, a) {
    var arr0 = new Array(arr.length - 1);

    for (var i = 0; i < a; ++i) {
        arr0[i] = arr[i];
    }
    for (var i = a; i < arr0.length; i++) {
        arr0[i] = arr[i + 1];
    }
    return arr0;
}

// 地主牌
function diZhu(arr) {
    var a = 51;
    var b = Math.floor(Math.random() * 3 + 1);

    if (b == 1) {
        // 地主给1
        for (var i = a; i < 54; i++) {
            faPaiXinWei(arr1, arr[i]);
        }
    } else if (b == 2) {
        // 地主给2
        for (var i = a; i < 54; i++) {
            faPaiXinWei(arr2, arr[i]);
        }
    } else if (b == 3) {
        // 地主给3
        for (var i = a; i < 54; i++) {
            faPaiXinWei(arr3, arr[i]);
        }
    } else {
        document.writeln("判断地主出问题了！！！");
    }
}

// 发牌行为
function faPaiXinWei(arr, a) {
    var b = arr.length;

    arr[b] = a;
}

// // 发地主牌
// function faPaiDiZhu(arr, arrDi) {
//     var a = arr.length;
//     var b = arrDi.length;
//     var arr0 = arr;
//     for (var i = 0; i < b; i++) {
//         arr0[a + i] = arrDi[i];
//     }
//     return arr0;
// }

// 输出牌
function shuChu(arr) {
    var a = 0;
    for (var i = 0; i < arr.length; i++) {
        a++;
        if (i == 0) {
            document.writeln("{" + arr[i] + ",")
        } else if (i == arr.length - 1) {
            document.writeln(arr[i] + "}" + "<br>" + "<hr>");
        } else if (a % 8 == 0) {
            document.writeln(arr[i] + "<br>");
        } else {
            document.writeln(arr[i] + ",");
        }
    }
}

// 展示发好的牌
function wanQuanPai3() {
    shuChu(arr1);
    shuChu(arr2);
    shuChu(arr3);
}