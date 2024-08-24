let num = prompt("entre the value");
 

if(num>0 && num%2==0){
    document.write("positive and even number")
}else if(num>0 && num%2!=0){
    document.write("positive odd number")
}else if(num<0 && num%2==0){
    document.write("nagative even number ")
}else if(num<0 && num%2!=0){
    document.write("negative odd number")
}else{
    document.write("this is neutral number")
}