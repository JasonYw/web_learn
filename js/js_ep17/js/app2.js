//隐藏式写法
(function(){
    var n="ime"
    function person(name){
        var _this ={}
        _this._name =name
        _this.sayhello =function(){
            alert("phello"+_this._name+n)
        }
        return _this
    }
    window.person =person
}())

/*function person(name){
    var _this ={}
    _this._name =name
    _this.sayhello =function(){
        alert("phello"+_this._name)
    }
    return _this
}*/

function teacher(name){
    var _this =person(name)
    var suppersay =_this.sayhello
    _this.sayhello =function(){
        suppersay.call(_this)
        alert("thello"+_this._name)
    }
    return _this
}
var t =teacher("iwen")
t.sayhello()