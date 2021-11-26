function changet(){
    word=document.getElementById("input").value;
    document.getElementById("text2").innerHTML=word;
}
function add(){
    num1=document.getElementById("add").value;
    num2=document.getElementById("add2").value;
    answer=parseInt(num1)+parseInt(num2);
    document.getElementById("answer").innerHTML=answer;
}
function subtract(){
    num1=document.getElementById("minus").value;
    num2=document.getElementById("minus2").value;
    answer=parseInt(num1)-parseInt(num2);
    document.getElementById("answerS").innerHTML=answer;
}
function times(){
    num1=document.getElementById("times").value;
    num2=document.getElementById("times2").value;
    answer=parseInt(num1)*parseInt(num2);
    document.getElementById("answerM").innerHTML=answer;
}
function divide(){
    num1=document.getElementById("div").value;
    num2=document.getElementById("div2").value;
    answer=parseInt(num1)/parseInt(num2);
    document.getElementById("answerD").innerHTML=answer;
}