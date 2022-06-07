var counter = 60;
var idleTime = 0;
var countdown;
var idleInterval;
var progressBardWidth = 1.66
var progBar = document.getElementById("myBar");
var progressPercent = document.getElementById("progressPercent");

$(document).ready(function(){
    $(window).click(function(){
        idleTime = 0;
        progressBardWidth = 1.66;
        progBar.style.width = progressBardWidth + "%";
        progressPercent.innerText = progressBardWidth.toFixed(0)+"%";
        clearInterval(idleInterval);
        idleInterval = setInterval(timerIncrement, 60000);
    });

    $(window).keyup(function(){
        idleTime = 0;
        progressBardWidth = 1.66;
        progBar.style.width = progressBardWidth + "%";
        progressPercent.innerText = progressBardWidth.toFixed(0)+"%";
        clearInterval(idleInterval);
        idleInterval = setInterval(timerIncrement, 60000);
    });

    idleInterval = setInterval(timerIncrement, 60000);

    $("#keepSession").click(function(){
        idleTime = 0;
        counter = 60;
        progressBardWidth = 1.66;
        clearInterval(countdown);
        $("#timeOutWarningOverlay").hide();
    })
})

function timerIncrement(){
    idleTime = idleTime + 1;
    if(idleTime >= 1){
        $("#timeOutWarningOverlay").show();
        startTimer();
        
    }
    console.log("idleTime" + idleTime);
}

function startTimer(){
    countdown = setInterval(countDownClock, 1000);
    console.log(countdown);
}

function countDownClock(){
    counter = counter +1;
    if(counter<10){
        $("#time").text("0"+ counter);
    }else{
        $("#timer").text(counter+"s");
    }

    if(counter=0){
        counter = 60;
        clearInterval(countdown);
        alert("Your session has expired due to no activity, You will be redirected to home page.");
        window.location.href = "localhost:8080";
    }

    progressBardWidth += 1.66;
    if(progressBardWidth>=100){
        progressBardWidth = 100;
    
    }
    progBar.style.width = progressBardWidth + "%";
    progressPercent.innerText = progressBardWidth.toFixed(0)+"%";
}