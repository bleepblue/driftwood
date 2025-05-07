window.onpageshow = scrollToTop;
let border = false;
let maxScroll = false;
function scroll()
{
    if (document.documentElement.scrollTop > (window.innerWidth * 0.157))
        {
            
            if(maxScroll)
                {
                    return;
                }
            else
                {
                    console.log(document.documentElement.scrollTop)
                    maxScroll = true;
                    document.querySelector("header").style.overflow = "hidden";
                    document.querySelector("header").style.zIndex = 1;
                    document.querySelector("main").style.zIndex = 0;
                    document.querySelector("nav").style.position = "sticky";
                    document.querySelector("nav").style.top = "9.1258vw";
                    document.querySelector("main").style.cursor ="";
                    document.querySelector("nav").style.cursor = "";
                    document.querySelector('nav').removeEventListener("click", clickScroll);
                    document.querySelector('main').removeEventListener("click", clickScroll);
                }

        }
    else
        {
            if(maxScroll)
                {
                    maxScroll = false;
                    document.querySelector("header").style.overflow = "visible";
                    document.querySelector("header").style.zIndex = 0;
                    document.querySelector("main").style.zIndex = 1;
                    document.querySelector("nav").style.position = "relative";
                    document.querySelector("nav").style.top = "0px";
                    document.querySelector("main").style.cursor ="pointer";
                    document.querySelector("nav").style.cursor = "pointer";
                    document.querySelector('nav').addEventListener("click", clickScroll);
                    document.querySelector('main').addEventListener("click", clickScroll);

                }
            if(hoverEnd)
                {
                    if(document.documentElement.scrollTop >= window.innerWidth / 20 + 10)
                        {
                            hoverEnd = false;
                            activated = false;
                        }
                   
                }
            let num = (window.innerWidth * 0.157) - document.documentElement.scrollTop;
            document.querySelector("nav").style.top = num + "px";
            document.querySelector("main").style.top = num + "px";
            if (document.documentElement.scrollTop <= window.innerWidth * 0.14)
                {
                    document.getElementById("greenMan").style.opacity = document.documentElement.scrollTop / (window.innerWidth * 0.14);
                }
                


                    let opacity = document.documentElement.scrollTop / (window.innerWidth * 0.04);
                    if(opacity <= 1)
                        {  
                            document.getElementById("nav").style.borderTop = `2px solid rgba(255, 255, 255, ${opacity})`;
                        }
                    let textOpacity = opacity -1.5;
                    if (textOpacity <=1)
                        {
                            document.querySelector(".textContainer").style.borderLeft = `2px solid rgba(255, 255, 255, ${textOpacity})`;
                            document.querySelector(".textContainer").style.borderRight= `2px solid rgba(255, 255, 255, ${textOpacity})`;
                        }

                    

                
            
        }
}



window.onscroll = scroll;




let hoverEnd = false;
let intervalID;
let activated = false;

function navUp()
{
    if(document.documentElement.scrollTop != 0)
        {
            return;
        }
    if(activated)
        { 
            return;
        }
   

            
           
                activated = true;
                intervalID = setInterval(function()
                {
                if(document.documentElement.scrollTop >= window.innerWidth / 20)
                    {
                        clearInterval(intervalID);
                        hoverEnd = true;
                        return;
                        
                        
                    }
                else
                    {
                        document.documentElement.scrollTop += 1;
                    }

                }, 2)
                
        
}

function navDown()
{
    if(!activated)
        {
            return;
        }
    else
        {
            clearInterval(intervalID);
            activated = false;
            intervalID = setInterval(function()
                {
                        if(document.documentElement.scrollTop == 0)
                            {
                                clearInterval(intervalID);
                                return;
                            }
                        else
                            {
                                document.documentElement.scrollTop -= 1;
                            }
                }, 2)
        }
}

function clickScroll()
{
    activated = false;
    clearInterval(intervalID);
    intervalID = setInterval(function(){
        if(document.documentElement.scrollTop >= window.innerWidth * 0.157)
            {
                clearInterval(intervalID);
                return;
            }
        else
            {
                document.documentElement.scrollTop += 3;
            }
    }, 2)
    
}

function scrollToTop()
{
    clearInterval(intervalID);
    intervalID = setInterval(function(){
        if(document.documentElement.scrollTop == 0)
            {
                clearInterval(intervalID);
                return;
            }
        else
            {
                document.documentElement.scrollTop -= 100;
            }
    }, 1)
    
}

document.getElementById("banner").addEventListener('mouseenter', navDown);
document.querySelector("main").addEventListener('click', clickScroll);
document.querySelector("main").addEventListener('mouseenter', navUp);
document.getElementById("nav").addEventListener('click', clickScroll);
