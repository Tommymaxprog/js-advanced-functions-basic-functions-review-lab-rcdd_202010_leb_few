// Your code here
function saturdayFun (activity="roller-skate")
{return `This Saturday, I want to ${activity}!` }
saturdayFun();
saturdayFun("bathe my dog");
function mondayWork (activity="go to the office")
{return`This Monday, I will ${activity}.` }
mondayWork();
function wrapAdjective(char="*"){
  return function(parameter="special"){
    return(`You are ${char}${parameter}${char}!`)
  }
}
mondayWork();
mondayWork("work from home");
wrapAdjective("%")("a dedicated programmer")
let Calculator={
  add:function(){return 1+3},
  subtract:function(){return 1-3},
  multiply:function(){return 1*3},
  divide:function(){return 10/5},
  
}
function mult(a){
  return a*2;
}
function addd(a){
  return a*+1000;
}
function modulo(a){
  return a%7;
}



let Calculator1=[mult, addd, modulo];
function actionApplyer(a, b){
  if (b==[])
  {return a;}
  else
  {
  let c=b[0](a);
  let d=b[1](c);
  return b[2](d);
  
  }
  
}
actionApplyer(13,Calculator1);