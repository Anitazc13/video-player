
        const $play= document.querySelector("#play");
        const $pause= document.querySelector("#pause");
        const $video= document.querySelector("#video");
        const $backward= document.querySelector("#backward");
        const $fordward= document.querySelector("#fordward");
        $play.addEventListener('click',handlePlay)
        $pause.addEventListener('click',handlePause)
        $backward.addEventListener('click',handleBackward)
        $fordward.addEventListener('click',handleFordward)

        function handlePlay(){
            $video.play();
            $play.hidden=true;
            $pause.hidden=false;
        }

        function handlePause(){
            $video.pause();
            $play.hidden=false;
            $pause.hidden=true;
        }

        function handleBackward(){
            $video.currentTime -= 10;
        }

        function handleFordward(){
            $video.currentTime += 10;
        }

        const $progress= document.querySelector("#progress")
        $video.addEventListener('loadedmetadata', handleLoad)
        $video.addEventListener('timeupdate', handleTimeUpdate)



        function handleLoad(){
            $progress.max=$video.duration;
        }

        function handleTimeUpdate(){
            $progress.value=$video.currentTime;
        }
    
        $progress.addEventListener('input', handleInput)
        
        function handleInput(){
            $video.currentTime= $progress.value
        }