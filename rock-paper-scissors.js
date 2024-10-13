let score=JSON.parse(localStorage.getItem('score')) || {
  win:0,
  loss:0,
  tie:0
};
const DataElement3= document.querySelector('.Data3');
DataElement3.innerHTML= `Wins: ${score.win} , Losses: ${score.loss} , Ties: ${score.tie}`;


function Game(UserChoice){
   const computerChoice=compchoice();
   let result='';
  if(UserChoice==='Rock'){
    if(computerChoice==='Rock'){
      result='Tie';
    
    }
    else if(computerChoice==='Paper'){
      result='You lose';
    }
    else if(computerChoice==='Scissors'){
      result='You win';
    }

  }
  else if(UserChoice==='Paper'){
    if(computerChoice==='Paper'){
      result='Tie';
    }
    else if(computerChoice==='Scissors'){
      result='You lose';
    }
    else if(computerChoice==='Rock'){
      result='You win';
    }

  }
  else if(UserChoice==='Scissors'){
    if(computerChoice==='Scissors'){
      result='Tie';
    }
    else if(computerChoice==='Rock'){
      result='You lose';
    }
    else if(computerChoice==='Paper'){
      result='You win';
    }

  }

  if(result==='Tie'){
     score.tie+=1;
  }
  else if(result==='You win'){
    score.win+=1;
  }
  else if(result==='You lose'){
    score.loss+=1;
  }

 localStorage.setItem('score',JSON.stringify(score));
 const DataElement1= document.querySelector('.Data1');
 const DataElement2= document.querySelector('.Data2');
 const DataElement3= document.querySelector('.Data3');


 DataElement1.innerHTML= `${result}` 
 DataElement2.innerHTML= `You chose <img src="images/${UserChoice}-emoji.png" class="move-icon"> , Computer chose <img src="images/${computerChoice}-emoji.png" class="move-icon">`;
DataElement3.innerHTML= `Wins: ${score.win} , Losses: ${score.loss} , Ties: ${score.tie}`;


}
function compchoice(){
  let comp='';
  const numi=Math.random();
  if(numi>=0 && numi<1/3){
    comp='Rock';
  }
  else if(numi>=1/3 && numi<2/3){
    comp='Paper';
  }
  else if(numi>=2/3 && numi<1){
    comp='Scissors';
  }
  return comp;
}
 
function Resetting(){
  score={ win:0 ,loss:0 ,tie:0};
localStorage.removeItem('score');

const DataElement1= document.querySelector('.Data1');
 const DataElement2= document.querySelector('.Data2');
const DataElement3= document.querySelector('.Data3');

DataElement1.innerHTML= `` 
 DataElement2.innerHTML= ``
DataElement3.innerHTML= `Wins: ${score.win} , Losses: ${score.loss} , Ties: ${score.tie}`;

}
