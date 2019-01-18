var timer = null;
window.onload = function () {
    var mDiv = document.getElementsByTagName('div');
    mDiv[0].onmouseover = function () {
        StartMove(this, 'width', 300)
    }
    mDiv[1].onmouseover = function () {
        StartMove(this, 'height', 150)
    }
    mDiv[2].onmouseover = function () {
        StartMove(this, 'fontSize', 100)
    }
    mDiv[3].onmouseover = function () {
        StartMove(this, 'opacity', 500)
    }
}
function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    }
    else {
        return getComputedStyle(obj, false)[attr];
    }
}
function StartMove(obj, attr, target) {
    clearInterval(obj, timer);
    obj.timer = setInterval(function () {
        var mCur = 0;
        if (attr == 'opacity') {
            mCur = parseInt(parseFloat(getStyle(obj, attr)) * 100);//把不透明度化为整数，因为后面都是按照整数处理的
        }
        else {
            mCur = parseInt(getStyle(obj, attr));
        }
        var mCur = parseInt(getStyle(obj, attr));
        var mSpeed = (target - mCur) / 8;
        mSpeed = mSpeed > 0 ? Math.ceil(mSpeed) : Math.floor(mSpeed);
        if (mCur == target) {
            clearInterval(obj.timer)
        }
        else {
            if (attr == 'opacity') {
                obj.style.opacity = (mCur + mSpeed) / 100;
            }
            else {
                obj.style[attr] = mCur + mSpeed + 'px';
            }

        }
    }, 30)
}