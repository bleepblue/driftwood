let currentVideo;

const videoArray = ["/assets/videos/Harbour_Lights_Short.mp4", "/assets/videos/Hawkhurst_Gang_SHORT.mp4"]

const thumbnailRef = {
    "harbour_lights_thumbnail.png":"/assets/videos/Harbour_Lights_Short.mp4",
    "hawkhurst_gang_thumbnail.png":"/assets/videos/Hawkhurst_Gang_SHORT.mp4"
}

function openVideo (event)
{
    document.querySelector(".modal").style.display="flex";
    let videoSource = thumbnailRef[event.target.src.split("thumbnails/")[1]];
    document.querySelector(".modalContent").src = videoSource;
    currentVideo = videoArray.indexOf(videoSource);
    window.addEventListener("keydown", arrowCycle);
}

function closeVideo ()
{
    document.querySelector(".modal").style.display="none";
    window.removeEventListener("keydown", arrowCycle);
}

window.onclick=function(event)
{
    if(event.target.className == "modal")
        {
            closeVideo();
        }
}

function previousVideo(event)
{
    if(currentVideo === 0)
        {
            currentVideo = videoArray.length - 1;
            document.querySelector(".modalContent").src = videoArray[currentVideo];            
        }
    else
        {
            currentVideo -=1;
            document.querySelector(".modalContent").src = videoArray[currentVideo];
        }
}


function nextVideo()
{
    if(currentVideo === videoArray.length - 1)
        {
            currentVideo = 0;
            document.querySelector(".modalContent").src = videoArray[currentVideo];            
        }
    else
        {
            currentVideo +=1;
            document.querySelector(".modalContent").src = videoArray[currentVideo];
        }
}

function arrowCycle(event)
    {
        if(event.key == "ArrowLeft")
            {
                previousVideo()
            }
        else if(event.key == "ArrowRight")
            {
                nextVideo()
            }
    }

document.querySelectorAll(".thumbnail").forEach(element => {
    element.addEventListener('click', openVideo)
});

document.querySelector(".close").addEventListener('click', closeVideo);
document.querySelector(".previous").addEventListener('click', previousVideo);
document.querySelector(".next").addEventListener('click', nextVideo);
