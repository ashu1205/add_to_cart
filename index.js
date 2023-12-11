let totalCount=document.querySelector('.totalCount');
let total=totalCount.innerHTML;

let addProducts=document.querySelector(".addProduct");

let functions=document.querySelector(".cartItems");

let reset=document.querySelector(".reset");

addProducts.addEventListener('click',addProduct);

functions.addEventListener('click',userFunction);

reset.addEventListener('click',resetCart);

function addProduct(){
    console.log('added');
    
    wrap=document.createElement('div');
    wrap.classList.add('item');
    cnt=document.createElement('span');
    cnt.classList.add('itemCount','btn');
    add=document.createElement('button');
    add.classList.add('addItem','btn');
    dlt=document.createElement('button');
    dlt.setAttribute('disabled','true');
    dlt.classList.add('deleteItem','btn')
    remv=document.createElement('button');
    remv.classList.add('removeItem','btn');
    cnt.innerHTML='zero';
    add.innerHTML='+';
    dlt.innerHTML='-';
    remv.innerHTML='X';
    wrap.appendChild(cnt);
    wrap.appendChild(add);
    wrap.appendChild(dlt);
    wrap.appendChild(remv);
    document.querySelector('.cartItems').appendChild(wrap);
    
}

function userFunction(event){
    console.log('user-functions');
    
    if(event.target.classList.contains("removeItem")){
        let ct=event.target.parentNode.children[0].innerHTML;
        if(total-ct>=0){
            total-=ct;
            totalCount.innerHTML=total;
        }
        event.target.parentNode.remove();

        console.log('product-removed');
        
    }
    else if(event.target.classList.contains("addItem")){
        let initialCt=event.target.parentNode.children[0].innerHTML;
        if(initialCt==='zero' || initialCt==='0'){
            initialCt=0;
            event.target.parentNode.children[2].removeAttribute('disabled');
        }
        initialCt++;

        event.target.parentNode.children[0].innerHTML=initialCt;

        //update total count
        total++;
        totalCount.innerHTML=total;

        console.log('item-added');
        
    }
    else if(event.target.classList.contains("deleteItem")){
        
        let initialCt=event.target.parentNode.children[0].innerHTML;
        initialCt--;
        if(initialCt===0){
            event.target.setAttribute('disabled','true');
            event.target.parentNode.children[0].innerHTML='zero';
        }
        else
            event.target.parentNode.children[0].innerHTML=initialCt;
        
            console.log('item-removed');
            
        //update total count
        total--;
        totalCount.innerHTML=total;
    }
}
function resetCart(){
    total=0;
    totalCount.innerHTML=total;

    for(let i=0;i<functions.children.length;i++){
        functions.children[i].children[0].innerHTML='zero';
        functions.children[i].children[2].setAttribute('disabled','true');
    }
}