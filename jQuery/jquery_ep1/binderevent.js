$(document).ready(function(){
    /*$("#clickmebutton").click(function(){
        //消耗内存
        alert("hello")
    })*/
    //可同时触发
    /*
    $("#clickmebutton").bind("click",clickhandler1)
    $("#clickmebutton").bind("click",clickhandler2)
    //解除全部click事件
    //$("#clickmebutton").unbind("click")
    //接触指定clickhandler2函数的click事件
    $("#clickmebutton").unbind("click",clickhandler2)
    */

    //jquery 1.7之后 on可代替bind off代替unbind
    $("#clickmebutton").on("click",clickhandler1)
    $("#clickmebutton").on("click",clickhandler2)
    //解除全部click事件
    //$("#clickmebutton").off("click")
    //接触指定clickhandler2函数的click事件
    $("#clickmebutton").off("click",clickhandler2)
})

function clickhandler1(e){
    console.log("clickhandler1")
}
function clickhandler2(e){
    console.log("clickhandler2")
}