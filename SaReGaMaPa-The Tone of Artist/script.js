console.log("welcome to spotify");
let masterPlay=document.getElementById('masterPlay');
let songIndex = 0;
let myProgressBar= document.getElementById('myProgressBar');
let audioElement = new Audio('./1.mp3');
let gif= document.getElementById('gif');
let masterSongName=document.getElementById('masterSongName');
let author=document.getElementById('author');
let songs = [
    {songName: "We Don't Talk Anymore-", filePath:"./1.mp3",coverPath :"./charlie puth.jpg",authorName:"Charlie Puth" },
    {songName: "Let Me Down Slowly-", filePath:"./2.mp3",coverPath :"./alec benjamin.jpg",authorName:"Alec Benjamin"},
    {songName: "Stitches-", filePath:"./3.mp3",coverPath :"./shawn mendes.webp",authorName:"Shawn Mendes" },
    {songName: "Blank space-", filePath:"./4.mp3",coverPath :"Tylor swift.webp",authorName:"Tylor swift" },
    {songName: "Night changes-", filePath:"./5.mp3",coverPath :"./one direction.jpg",authorName:"One Direction" },
    {songName: "Stay-", filePath:"./6.mp3",coverPath :"./justin beiber.webp",authorName:"Justin Beiber" },
    {songName: "Perfect-", filePath:"./7.mp3",coverPath :"./ed sheeran.jpg",authorName:"Ed Sheeran" },
    {songName: "Apna Bana Le Piya-", filePath:"./8.mp3",coverPath :"./Arijit Singh.jpg",authorName:"Arijit Singh" },
    {songName: "Agar Tum Sath ho-", filePath:"./9.mp3",coverPath :"./arijit singh.jpg",authorName:"arijit singh" },

]

masterPlay.addEventListener('click',()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
        
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
        
    }
})

audioElement.addEventListener('timeupdate',()=>{
    let progress= parseInt((audioElement.currentTime/audioElement.duration)*100);
    console.log(progress);
    myProgressBar.value=progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = (myProgressBar.value * audioElement.duration)/100;
})

const makeAllPlay = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
     element.classList.remove('fa-pause-circle');
      element.classList.add('fa-play-circle');
    })
}


Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlay();
        if(audioElement.paused || audioElement.currentTime<=0){
        songIndex=parseInt(e.target.id);   
      e.target.classList.remove('fa-play-circle');
      e.target.classList.add('fa-pause-circle');
      audioElement.src=`./${songIndex+1}.mp3`;
      masterSongName.innerText=songs[songIndex].songName;
      author.innerText=songs[songIndex].authorName;
      audioElement.currentTime =0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
        } 
        else{
            audioElement.pause();
            e.target.classList.remove('fa-pause-circle');
            e.target.classList.add('fa-play-circle'); 
           gif.style.opacity = 0;
           masterPlay.classList.remove('fa-pause-circle');
           masterPlay.classList.add('fa-play-circle');
        
        }   
    })

})


document.getElementById('next').addEventListener('click',()=>{
 if(songIndex>=8){
    songIndex=0;
 }
 else{
    songIndex+=1;
 }
    audioElement.src=`./${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    author.innerText=songs[songIndex].authorName;
    audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
 
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0){
       songIndex=0;
    }
    else{
       songIndex-=1;
    }
    audioElement.src=`./${songIndex+1}.mp3`;
    masterSongName.innerText=songs[songIndex].songName;
    author.innerText=songs[songIndex].authorName;
    audioElement.currentTime=0;
      audioElement.play();
      gif.style.opacity = 1;
      masterPlay.classList.remove('fa-play-circle');
      masterPlay.classList.add('fa-pause-circle');
   })


