$(document).ready(function(){
    $("#click1").click(function(){
        $(this).hide() //单击
    })
    $("#click2").dblclick(function(){
        $(this).hide() //双击
    })
    $("#click3").mouseenter(function(){
        $(this).hide()
    })
    $("#click4").mouseleave(function(){
        $(this).hide()
    })
})