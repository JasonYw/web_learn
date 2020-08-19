$(document).ready(function(){
    /*
    $("#btn1").click(function(){
        //text函数获取标签内的内容，包含子标签内的内容，但是无法获取子标签的标签名
        alert("text:"+$("#text").text())
    })
    */
    /*
    $("#btn1").click(function(){
        //html函数获取标签内容，但是子标签的标签的标签名也算作内容
        alert("text:"+$("#text").html())
    })
    */

    $("#btn1").click(function(){
        //val函数获取输入框内的内容
        alert($("#it").val())
    })
    
    $("#btn2").click(function(){
        //attr函数获取标签内指定的属性的值
        alert($("#aid").attr("href"))
    })
    $("#btn2").click(function(){
        //attr函数获取标签内指定的属性的值
        alert($("#aid").attr("id"))
    })


})