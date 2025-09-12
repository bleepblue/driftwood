let currentPhoto;

function openImage (event)
{
    document.querySelector(".modal").style.display="flex";
    document.querySelector(".modalContent").src=event.target.src;
    currentPhoto = event.target;
    window.addEventListener("keydown", arrowCycle);
}

function closeImage ()
{
    document.querySelector(".modal").style.display="none";
    window.removeEventListener("keydown", arrowCycle);
}

window.onclick=function(event)
{
    if(event.target.className == "modal")
        {
            closeImage();
        }
}

function previousImage(event)
{
    if(!currentPhoto.previousElementSibling)
        {
            currentPhoto = currentPhoto.parentElement.lastElementChild.previousElementSibling;
            document.querySelector(".modalContent").src = currentPhoto.src;
            
        }
    else
        {
            currentPhoto = currentPhoto.previousElementSibling;
            document.querySelector(".modalContent").src = currentPhoto.src;
        }
}


function nextImage()
{
    if(currentPhoto.nextElementSibling.id == "greenMan")
        {
            currentPhoto = currentPhoto.parentElement.firstElementChild;
            document.querySelector(".modalContent").src = currentPhoto.src;
            
        }
    else
        {
            currentPhoto = currentPhoto.nextElementSibling;
            document.querySelector(".modalContent").src = currentPhoto.src;
        }
}

function arrowCycle(event)
    {
        if(event.key == "ArrowLeft")
            {
                previousImage()
            }
        else if(event.key == "ArrowRight")
            {
                nextImage()
            }
    }

document.querySelectorAll(".thumbnail").forEach(element => {
    element.addEventListener('click', openImage)
});

document.querySelector(".close").addEventListener('click', closeImage);
document.querySelector(".previous").addEventListener('click', previousImage);
document.querySelector(".next").addEventListener('click', nextImage);
