function clock(input){

    for(i=0;i<=23;i++){
        for(j=0;j<=59;j++){
            if(j<10){
                console.log(i+":0"+j);
            }else
            console.log(i+":"+j);
        }
    }



}
clock()