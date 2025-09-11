

window.onload = () => {
    setTimeout(scrollDown, 1000)
}

// window.innerHeight + document.documentElement.scrollTop + 5 >= document.body.scrollHeight
// document.documentElement.scrollTop >= window.innerHeight * 0.33
//                     document.querySelector("nav").style.top = "9.1258vw";
// document.documentElement.scrollTop >= ( window.innerWidth / window.innerHeight ) * 146
// cursor shit
// document.documentElement.scrollTop ===( Math.max( document.body.scrollHeight, document.body.offsetHeight, document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight) - window.innerHeight )
// document.documentElement.scrollTop >= window.innerHeight * 0.312
 window.onpageshow = (event) => {
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
        if( document.documentElement.scrollTop ===
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
                   // document.querySelector("nav").style.top = "5.29vh";
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
    
    
    clearInterval(intervalID);
    intervalID = setInterval(() => {
        if( document.documentElement.scrollTop ===
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
