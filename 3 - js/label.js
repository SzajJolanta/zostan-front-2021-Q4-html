
labelTest: 
for(let i = 0; i <= 3; i++){
    for(let x = 0; x <= 3; x++){
        if(i + x == 3){
            console.log("Wyjscie z petli do labelki");
            
            continue labelTest;
        }
        console.log(`i=${i}, x=${x}`);
    }    
}


