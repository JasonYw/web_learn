/*
    append 被选中内容的结尾来填充内容
    prepend 被选中内容开头填充内容
    before 被选中内容之前填充内容
    after 被选中内容之后填充内容
*/

$(document).ready(function(){
    $("#btn1").click(function(){
        $("#pid1").append(" this is append")
        $("#pid1").prepend("this is prepend ")
    })
    //上下两者区别，append，prepend不会换行
    //before after会先换行在添加
    $("#btn2").click(function(){
        $("#pid2").before("before")
        $("#pid2").after("after")
    })
})

function appendText(){
    /*
        可添加三种内容
        HTML
        jquery
        js指的是DOM
    */
   var text1 ="<p>iwen</p>"
   var text2 =$("<p></p>").text("ime")
   var text3 =document.createElement("p")
   text3.innerHTML="acely"
   $("body").append(text1,text2,text3)
}

