const blacKeys=document.querySelectorAll(".black_key");
const whiteKeys=document.querySelectorAll(".white_key");

blacKeys.forEach(function(black,index){
    black.addEventListener('click',function(){
        let sound = new Audio(`./black-keys-sound/${index}.mp3`);
        playSound(sound);      

    })
});

whiteKeys.forEach(function(white,index){
    white.addEventListener('click',function(){
        let sound = new Audio(`./white-keys-sound/${index}.mp3`);
        playSound(sound);      

    })
});

function playSound(sound){
    sound.pause();
    sound.currentTime=0;
    sound.play();
}




