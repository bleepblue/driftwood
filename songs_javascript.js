const samples = {};
let open = false;
function openInfo(event)
{
    

    if(event.target.nodeName === "svg" || event.target.nodeName === "circle" || event.target.nodeName === "polygon" || event.target.nodeName === "rect")
        {
            return;
        }
    let sampleName;
    let dropdown;
    
    if(event.target.nodeName == "SPAN")
        {
            sampleName = event.target.nextElementSibling.src;
            dropdown = event.target.parentElement.nextElementSibling;
        }
    else
        {
            sampleName = event.target.querySelector("audio").src;
            dropdown = event.target.nextElementSibling;
        }
    if(samples[sampleName] == null)
        {
            samples[sampleName] = false;
        }
    

    if(!samples[sampleName])
        {
            dropdown.style.height = dropdown.scrollHeight + "px";
            samples[sampleName] = true;
           
        
 
        }
    else if (samples[sampleName])
        {
            dropdown.style.height = 0;
            samples[sampleName] = false;
           
 
        } 
    
}
let playingMusic = false;
function play(event)
{
    if(event.target.nodeName == "svg")
        {
            return;
        }

    if(!playingMusic)
        {
            event.target.parentElement.previousElementSibling.play();
            playingMusic = true;
            event.target.parentElement.querySelector("polygon").style.display  = "none";
            event.target.parentElement.querySelector("rect").style.display = "block";
            event.target.parentElement.style.opacity = "65%"

        }
    else if(playingMusic)
        {
            event.target.parentElement.previousElementSibling.load();
            playingMusic = false;
            event.target.parentElement.querySelector("polygon").style.display  = "block";
            event.target.parentElement.querySelector("rect").style.display = "none";
            event.target.parentElement.style.opacity = "100%";
        }
  
}

function svgHover(event)
    {
        if(event.type === "mouseenter")
            {
                if(!playingMusic)
                    {
                        event.target.style.opacity = "65%";
                    }
                if(playingMusic)
                    {
                        event.target.style.opacity = "80%";
                    }
            }
        if(event.type === "mouseleave")
        {
            if(!playingMusic)
                    {
                        event.target.style.opacity = "100%";
                    }
            if(playingMusic)
                    {
                        event.target.style.opacity = "65%";
                    }
            }
    }

document.querySelectorAll('.song').forEach(element => {
    element.addEventListener('click', openInfo)
});

document.querySelectorAll('svg').forEach(element => {
    element.addEventListener('click', play);
    element.addEventListener('mouseenter', svgHover);
    element.addEventListener('mouseleave', svgHover);
})

