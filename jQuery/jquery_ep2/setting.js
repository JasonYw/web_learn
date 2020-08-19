$(document).ready(function(){
    $("#btn1").click(function(){
        //text函数可以用来修改函数，text()里面的参数就是修改的内容
        $("#p1").text("baidu")
    })
    $("#btn2").click(function(){
        //text函数可以用来修改函数，还可以增加子标签,及子标签内的属性
        $("#p2").html('<a href="http://wwww.baidu.com">baidu</a>')
    })
    $("#btn3").click(function(){
       //text函数可以用来修改输入框的内容
        $("#i3").val("baidu.com")
    })
    $("#btn4").click(function(){
        //text函数可以用来修改输入框的内容
        $("#aid").text("index.html")
        //attr可以用来修改标签内的属性的值，attr(指定属性,修改值)
        $("#aid").attr("href","index.html")
    })

    $("#btn5").click(function(){
        //text函数可以用来修改输入框的内容
        $("#aid").text("index.html")
        //attr还可以修改多个属性
        $("#aid").attr({
            "href":"index.html",
            "title":"hello",
        })
    })

    $("#btn6").click(function(){
        $("#p5").text(function(i,ot){
            return "old:"+ot+" new:这是新的内容"+(i) 
        })
    })
})