let playingMusic = false;
let currentlyPlaying = false;
function play(event)
{

    if(!playingMusic)
        {
            if (event.target.nodeName === "svg")
                {
                    event.target.previousElementSibling.play();
                    currentlyPlaying = event.target.previousElementSibling.id;
                }
            else
                {
                    event.target.parentElement.previousElementSibling.play();
                    currentlyPlaying = event.target.parentElement.previousElementSibling.id;
                }
            playingMusic = true;
            event.target.parentElement.querySelector("polygon").style.display  = "none";
            event.target.parentElement.querySelector("rect").style.display = "block";           
        }

    else if(playingMusic)
        {
            if (event.target.nodeName === "svg")
                {
                    if (currentlyPlaying != event.target.previousElementSibling.id)
                        {
                            document.getElementById(currentlyPlaying).load();
                            document.getElementById(currentlyPlaying).parentElement.querySelector("polygon").style.display  = "block";
                            document.getElementById(currentlyPlaying).parentElement.querySelector("rect").style.display  = "none";
                            event.target.previousElementSibling.play();
                            event.target.parentElement.querySelector("polygon").style.display  = "none";
                            event.target.parentElement.querySelector("rect").style.display = "block";           
                            currentlyPlaying = event.target.previousElementSibling.id;
                            playingMusic = true;
                            return
                        }

                    else
                        {
                            event.target.previousElementSibling.load();
                            currentlyPlaying = false;
                        }

                }
            else
                {
                    if (currentlyPlaying != event.target.parentElement.previousElementSibling.id)
                        {
                            document.getElementById(currentlyPlaying).load();
                            document.getElementById(currentlyPlaying).parentElement.querySelector("polygon").style.display  = "block";
                            document.getElementById(currentlyPlaying).parentElement.querySelector("rect").style.display  = "none";
                            event.target.parentElement.previousElementSibling.play();
                            event.target.parentElement.querySelector("polygon").style.display  = "none";
                            event.target.parentElement.querySelector("rect").style.display = "block";           
                            currentlyPlaying = event.target.parentElement.previousElementSibling.id;
                            playingMusic = true;
                            return
                        }
                    else
                        {
                            event.target.parentElement.previousElementSibling.load();
                            currentlyPlaying = false;
                        }

                }
            playingMusic = false;
            event.target.parentElement.querySelector("polygon").style.display  = "block";
            event.target.parentElement.querySelector("rect").style.display = "none";
        }
  
}




document.querySelectorAll('svg').forEach(element => {
    element.addEventListener('click', play);
})

