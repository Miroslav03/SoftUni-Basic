function Time(input){

    let time1=Number(input[0])
    let time2=Number(input[1])
    let time3=Number(input[2])

    let sum=time1+time2+time3;
    let minutes = Math.trunc(sum/60);
    let seconds = sum%60;

    if (seconds<10){
        console.log(minutes + ":0"+ seconds);

    }else {
        console.log(minutes + ":" + seconds );
    }


}
Time(["50","50","49"])
