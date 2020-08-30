
function leave(){
    var manue_ =document.getElementById("manue-id");
    manue_.style.display="none";
    var a =document.getElementById("setting-text")
    //var a =manue_.parentElement.previousSibling;
    a.style="color: black;"
}

function over(){
    var manue_ =document.getElementById("manue-id");
    manue_.style.display="table-cell";
    var a =document.getElementById("setting-text")
    //var a =manue_.parentElement.previousSibling;
    a.style.color ="blue"
}

function manue_leave(obj){
    obj.style.color ="black";
}

function manue_over(obj){
    obj.style.color ="blue";
}
function border_out(obj){
    var a =document.getElementById("border");
    a.style.display="none";
    obj.src ="qrcode@2x-daf987ad02.png"
}
function border_over(obj){
    var a =document.getElementById("border");
    a.style.display="table-cell";
    obj.src ="qrcode-hover@2x-f9b106a848.png"
}

function content_focus(){
    var a =document.getElementById("search-table");
    a.style.borderColor="blue";
    var b=document.getElementById("searchimg")
    b.src="/pra_/pra_baidu/nicon-10750f3f7d1.png"
}

function content_blur(){
    var a =document.getElementById("search-table");
    a.style.borderColor="#c4c7ce";
    var b=document.getElementById("searchimg")
    b.src="/pra_/pra_baidu/nicon-10750f3f7d2.png"
}

function footer_on(obj){
    obj.style.color="black";
}
function footer_out(obj){
    obj.style.color="#9195a3";
}