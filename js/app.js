'use strict';

let myForm=document.getElementById('myForm');
let myTable=document.getElementById('myTable');


let myFood=[];

function FoodLovers(name,food){
this.name=name;
this.food=food;
this.min=5;
this.max=100;
this.img='img/burger.jpg';
this.img1='img/pitzaa.jpg';
this.img2='img/shawerma.jpg';
this.price=getRandomInt(this.min,this. max);

myFood.push(this);
setItem();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); //The maximum is exclusive and the minimum is inclusive
  }

  function setItem(){
      let data=JSON.stringify(myFood);
      localStorage.setItem('foodLove',data);
  }

  function getItem(){
      let stringObj=localStorage.getItem('foodLove');
      let normalObj=JSON.parse(stringObj);
      if(normalObj!==null){
        myFood=normalObj;
        render();

      }
  }
  
  function render(){
    myTable.textContent="";
    let tr =document.createElement('tr');
    myTable.appendChild(tr);

    let th1=document.createElement('th');
    tr.appendChild(th1);
    th1.textContent="Order Detalis";
    let th2=document.createElement('th');
    tr.appendChild(th2);
    th2.textContent="Order Image";

    for (let i=0;i<myFood.length;i++){
    let trEl=document.createElement('tr');
    myTable.appendChild(trEl);

    let td=document.createElement('td');
    trEl.appendChild(td);
     if (myFood[i].food==="shawerma"){
         let imgEl1=document.createElement('img');
         trEl.appendChild(imgEl1);
         imgEl1.setAttribute('src',myFood[i].img2);
         imgEl1.style.width='60px';
     }else if(myFood[i].food==="burger"){
        let imgEl2=document.createElement('img');
        trEl.appendChild(imgEl2);
        imgEl2.setAttribute('src',myFood[i].img);
        imgEl2.style.width='60px';
     }else if (myFood[i].food==="pitzaa"){
        let imgEl3=document.createElement('img');
        trEl.appendChild(imgEl3);
        imgEl3.setAttribute('src',myFood[i].img1);
        imgEl3.style.width='60px';
     }

     let td2=document.createDocumentFragment('td');
     trEl.appendChild(td2);
     let pEl1=document.createDocumentFragment('p');
     td2.appendChild(pEl1);
      td.textContent=`Custumer Name: ${myFood[i].name} Food Type: ${myFood[i].food} Food Price: ${myFood[i].price}`
    
  


      
    }



  }

  myForm.addEventListener('submit',handelSubmit);

  function handelSubmit(event){
    event.preventDefault();

      let name=event.target.name.value;
      let food=event.target.food.value;
      
      new FoodLovers(name,food);
      render();
   
  }
  getItem()