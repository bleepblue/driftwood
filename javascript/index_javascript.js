

window.onload = () => {
    setTimeout(scrollDown, 1000)
}


 window.onpageshow = (event) => {
    if (window.innerWidth <= 800) return
    if (document.documentElement.scrollTop > 10)
        {
            document.getElementById("greenMan").style.opacity = 1;
            document.getElementById("nav").style.borderTop = `2px solid rgba(255, 255, 255, 1)`;
            document.querySelector(".textContainer").style.borderLeft = `2px solid rgba(255, 255, 255, 1)`;
            document.querySelector(".textContainer").style.borderRight= `2px solid rgba(255, 255, 255, 1)`;
        } 

        console.log(event)

            setTimeout(scrollDown, 1000)
};

let border = false;
let maxScroll = false;
function scroll()
{
        if (window.innerWidth <= 800) return
        if( document.documentElement.scrollTop >= window.innerWidth * 0.158 ||
            document.documentElement.scrollTop ===
                ( Math.max( document.body.scrollHeight, 
                document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, 
                document.documentElement.offsetHeight) - 
                    window.innerHeight ) 
                )
        {
            
            if(maxScroll)
                {
                    return;
                }
            else
                {

                    maxScroll = true;
                    document.querySelector("header").style.overflow = "hidden";
                    document.querySelector("header").style.zIndex = 1;
                    document.querySelector("main").style.zIndex = 0;
                    document.querySelector("main").style.top = 0;
                    document.querySelector("nav").style.position = "sticky";
                    document.getElementById("greenMan").style.opacity = 1;
                    document.getElementById("nav").style.borderTop = `2px solid rgba(255, 255, 255, 1)`;
                    document.querySelector(".textContainer").style.borderLeft = `2px solid rgba(255, 255, 255, 1)`;
                    document.querySelector(".textContainer").style.borderRight= `2px solid rgba(255, 255, 255, 1)`;
                    document.querySelector("nav").style.top = "9vw";
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

                }
            let num = window.innerWidth / 100 * 15.8 - document.documentElement.scrollTop;

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

let intervalID;

function scrollDown()
{
    
    if (window.innerWidth <= 800) return
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        if( document.documentElement.scrollTop >= window.innerWidth * 0.158 ||
            document.documentElement.scrollTop ===
                ( Math.max( document.body.scrollHeight, 
                document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, 
                document.documentElement.offsetHeight) - 
                    window.innerHeight 
                )
)
            {
                clearInterval(intervalID);
                return;
            }
        else
            {
                document.documentElement.scrollTop += 4;
            }
    }, 20)
}
