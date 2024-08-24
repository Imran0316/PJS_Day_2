// let per = prompt("enter the percentage") ;

// if(per>=85 && per<=100){
//     document.write("A+")
// }else if(per>=75 && per<85){
//     document.write("A")
// }else if(per>=60 && per<75){
//     document.write("B")
// }else if(per>=50 && per<60){
//     document.write("C")
// }else if(per<=50){
//     document.write("failed")
// }else{
//     document.write("incorrect")
// }

// let Tmarks = document.getElementById("#Tmarks");
// let Omarks = document.getElementById("#Omarks");

// let Result = Omarks/Tmarks*100

// document.write(`Your percentage is ${Result} <br>` )

// if(Result>=85 && Result<=100){
//     document.write("your grade is A+")
// }else if(Result>=75 && Result<85){
//     document.write("your grade is A")
// }else if(Result>=60 && Result<75){
//     document.write("your grade is B")
// }else if(Result>=40 && Result<60){
//     document.write("your grade is C")
// }else{
//     document.write("you are failed")
// }

function showInfo(){
    let Tmarks = document.getElementById("Tmarks").value;
    let Omarks = document.getElementById("Omarks").value;

    let Result = Omarks/Tmarks*100;

    if(Result>=85 && Result<=100){
     Result=(`your is percentege ${Result} <br> your grade is A+`)
    }else if(Result>=75 && Result<85){
    Result=(` percentege ${Result} <br> your grade is A`)
    }else if(Result>=60 && Result<75){
    Result=(` percentege ${Result} <br> your grade is B`)
    }else if(Result>=40 && Result<60){
    Result=(` percentege ${Result} <br> your grade is C`)
    }else{
    Result=(`you are failed`)
    }

    if(Result>90 && Result<90){
        Result=(`govt ${Result}`)
    }
    const output = document.getElementById('output');
    output.innerHTML = `<strong>result:</strong> <br> ${Result}`;
    

}
function collInfo(){
    let percentage = document.getElementById("percentage").value;

    if(percentage>=95 && percentage<=100){
        percentage=(`your can Enroll in: <br> govt.Adamjee college <br> govt. DJ science college <br> st. patric college`)
    }else if(percentage>=85 && percentage<95){
        percentage=(`your can Enroll in: <br> govt.islamia science college <br>govt.Dehli college <br> govt.formen college`)
    }else if(percentage>=50 && percentage<85){
        percentage=(`your can Enroll in: <br> govt.shipowner science college <br>govt.Dgree college <br> govt.city college`)
    }else{
        percentage=("you are not elligible your percentage is low");
    }

    const collOutpus = document.getElementById("colloutput");
    collOutpus.innerHTML = `${percentage}`
}
