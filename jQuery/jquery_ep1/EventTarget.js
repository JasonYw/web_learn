$(document).ready(function(){
    $("body").on("click",bodyhandler)
    $("div").on("click",divhandler1)
    $("div").on("click",divhandler2)
})

function bodyhandler(event){
    //不一定是所有游览器都支持console
    //console.log(event)
    conlog(event)
}

function divhandler1(event){
    //不一定是所有游览器都支持console
    //console.log(event)
    conlog(event)
    //阻止父级body事件冒泡
    //event.stopPropagation()
    //阻止所有事件冒泡，不光父级body被阻止,divhandler2也被阻止
    event.stopImmediatePropagation()

}
function divhandler2(event){
    conlog(event)
}


function conlog(event){
    //当遇到不支持console()浏览器 把此方法注销即可
    console.log(event)
}