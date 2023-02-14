// 返回数组中最大的数
function getMax(arr) {
    var a = arr[1]; // 最大
    for (var i = 0; i < arr.length; ++i) {
        if (a <= arr[i]) {
            a = arr[i];
        }
    }
    return a;
}

// 返回数组中最小的数
function getMin(arr) {
    var b = arr[1]; // 最小
    for (var i = 0; i < arr.length; ++i) {
        if (b >= arr[i]) {
            b = arr[i];
        }
    }
    return b;
}

// 对数组进行简单排序
function jianDanPaiXv(arr) {
    /** 
     * 由最右边的数开始，
     * 每次便利数组都是
     * 为了找到一个最小的数
     * 
     * 
    */
    // 数组循环
    for (var i = 0; i < arr.length; i++) {
        // 遍历循环
        for (var j = i + 1; j < arr.length; j++) {
            // 找到最小值
            if (arr[i] >= arr[j]) {
                var a = arr[i];
                arr[i] = arr[j];
                arr[j] = a;
            }
        }
    }
    return arr;
}

// 冒泡排序
function maoPaoPaiXv(arr) {
    for (var i = 0; i < arr.length; ++i) {
        for (var j = 0; j < arr.length - i - 1; ++j) {
            if (arr[j] > arr[j + 1]) {
                var a = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = a;
            }
        }
    }
}

// 打印数组
function daYing(arr) {
    for (var k = 0; k < ARR_LENGTH; ++k) {
        if (k == 0) {
            document.writeln("[" + arr[k]);
        } else if (k != ARR_LENGTH - 1) {
            document.writeln("," + "&nbsp" + arr[k]);
        } else {
            document.writeln("," + "&nbsp" + arr[k] + "]" + "<br>")
        }
    }
}

// 生成指定长度随机数组
function shuZhu(a) {
    var arr = new Array();
    // 数组长度
    ARR_LENGTH = a;
    // 获取随机数组
    for (var j = 0; j < ARR_LENGTH; ++j) {
        // 获取随机数
        arr[j] = Math.floor(Math.random() * 100 + 1);
    }

    return arr;
}

// 查找指定元素，返回索引
function chaZhao(arr, a) {
    for (var i = 0; i < arr.length; ++i) {
        if (a == arr[i]) {
            return i;
        }
    }
    return "未查找到指定元素";
}

// 数组反转
function fanZhuan(arr) {
    var arr2 = new Array(arr.length);
    for (var i = 0; i < arr.length; ++i) {
        arr2[arr.length - i - 1] = arr[i];
    }

    return arr2;
}