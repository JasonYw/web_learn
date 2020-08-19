var clickmebutton;
$(document).ready(function(){
    clickmebutton =$("#clickmebutton")
    clickmebutton.click(function(){
        var e =jQuery.Event("myevent")
        clickmebutton.trigger(e)
    })

    clickmebutton.on("myevent",function(event){
        console.log(event)
    })
})