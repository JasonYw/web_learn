window.onload =function(){
    imagelocation("container","box")
    var imgData={"data":[{"src":"1.jpg"},{"src":"2.jpg"},{"src":"1.jpg"},{"src":"2.jpg"}]}
    window.onscroll =function(){
        if (checkflag){
            var cparent =document.getElementById("container")
            for(var i=0;i<imgData.data.length;i++){
                var ccontent =document.createElement("div")
                ccontent.className="box"
                cparent.appendChild(ccontent)
                var boximg =document.createElement("div")
                boximg.id ="box_img"
                ccontent.appendChild(boximg)
                var img =document.createElement("img")
                img.src =imgData.data[i].src
                boximg.appendChild(img)
            }
            imagelocation("container","box")
        }
    }
}
function checkflag(){
    var cpparent =document.getElementById("container")
    var ccontnet =getChildElement(cpparent,"box")
    var lastconlastcontentheight =ccontnet[ccontnet.length-1].offsetTop
    var scrolltop =document.documentElement.scrollTop||document.body.scrollTop
    var pageheight =document.documentElement.clientHeight || document.body.clientHeight
    // 
    if(lastconlastcontentheight<scrolltop+pageheight){
        return true
    }
}

function imagelocation(parent,content){
    //将父级空间的parent有的内容全部取出
    var cparent =document.getElementById(parent)
    var ccontent =getChildElement(cparent,content)
    // console.log(ccontent.length)
    var imgWidth =ccontent[0].offsetWidth;
    var cols =Math.floor(document.documentElement.clientWidth/ imgWidth)
    cparent.style.cssText ="width:"+imgWidth*cols+"px;margin:0 auto"
    console.log(cparent)
    
    var boxHeightarr =[]
    for(var i=0;i<ccontent.length;i++){
        if(i<cols){
            boxHeightarr[i] =ccontent[i].offsetHeight
            console.log(boxHeightarr[i])
        }else{
            var minheight =Math.min.apply(null,boxHeightarr)
            var minindex =getminheightlocation(boxHeightarr,minheight)
            ccontent[i].style.position="absolute"
            ccontent[i].style.top =minheight+"px"
            ccontent[i].style.left =ccontent[minindex].offsetLeft+"px"
            boxHeightarr[minindex] =boxHeightarr[minindex]+ccontent[i].offsetHeight
        }
    }
}
function getminheightlocation(boxheight,minheight){
    for(var i in boxheight){
        if (boxheight[i] ==minheight){
            return i
        }
    }
}
function getChildElement(parent,content){
    var containerArt =[]
    var allcontent =parent.getElementsByTagName("*")
    for (var i=0;i<allcontent.length;i++){
        if(allcontent[i].className==content){
            containerArt.push(allcontent[i])
        }
    }
    return containerArt
}