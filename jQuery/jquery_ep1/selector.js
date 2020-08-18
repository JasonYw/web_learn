$(document).ready(function(){
    $("#btn0").click(function(){
        $("p").text("p元素被修改了") //元素选择器直接指定p元素进行修改
        $("#pid1").text("pid1被修改了") //元素选择器直接指定id进行修改
        $(".pclass1").text("pclass1被修改了") //元素选择器直接指定类进行修改
    })
    $("#btn1").click(function(){
        // var node =document.getElementsByTagName("body")
        // var link =document.createElement("a")
        // node.appendChild(link)
        // link.setAttribute("href","/jQuery/jquery_ep1/eventMethod.html")
        // link.appendChild(this)
        location.assign("/jQuery/jquery_ep1/eventMethod.html")
    })
})

