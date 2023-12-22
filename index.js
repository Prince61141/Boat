import {boatItem} from './item.js'

function displayItems(){
    var airpods= document.getElementById('airpods');
    var newlaunches=  document.getElementById('newlaunches');
    var accessories=  document.getElementById('accessories');
    var soundbars=  document.getElementById('soundbars');
    var topWatches=  document.getElementById('top-watches');

    
    const airpodsData= boatItem.filter((item)=>item.category=='airpods');
    const newlaunchesData= boatItem.filter((item)=>item.category=='newlaunches');
    const accessoriesData= boatItem.filter((item)=>item.category=='accessories');
    const soundbarsData= boatItem.filter((item)=>item.category=='soundbars');
    const watchesData= boatItem.filter((item)=>item.category=='top watches');
    airpodsData.map(item=>{
        
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating + ' ';

        var badge= document.createElement('i');
        badge.setAttribute('class','fas fa-badge-check fa-xs');

        var AddtoCart= document.createElement('button');
        AddtoCart.setAttribute('class','add-to-cart');
        AddtoCart.setAttribute('id',item.id)
        AddtoCart.innerText= 'Add to cart';

        cardTop.appendChild(AddtoCart);

        var img= document.createElement('img');
        img.src=item.img;

        var playback= document.createElement('p');
        playback.setAttribute('id','play-back');
        playback.innerText= item.hours;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '₹' + item.price;

        var originalPrice= document.createElement('p');
        originalPrice.setAttribute('class','originalprice');
        originalPrice.innerText= '₹' +  item.originalprice;

        var offers= document.createElement('p');
        offers.setAttribute('class','offer');
        offers.innerText= item.offer + '%' + ' off';

        itemCard.appendChild(img);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(playback);
        itemCard.appendChild(itemName);
        itemPrice.appendChild(originalPrice);
        itemPrice.appendChild(offers);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(star);
        itemCard.appendChild(badge);

        airpods.appendChild(itemCard);
        
    })


    newlaunchesData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating + ' ';

        var badge= document.createElement('i');
        badge.setAttribute('class','fas fa-badge-check fa-xs');

        var AddtoCart= document.createElement('button');
        AddtoCart.setAttribute('class','add-to-cart');
        AddtoCart.setAttribute('id',item.id)
        AddtoCart.innerText= 'Add to cart';

        cardTop.appendChild(AddtoCart);

        var img= document.createElement('img');
        img.src=item.img;

        var playback= document.createElement('p');
        playback.setAttribute('id','play-back');
        playback.innerText= item.hours;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '₹' + item.price;

        var originalPrice= document.createElement('p');
        originalPrice.setAttribute('class','originalprice');
        originalPrice.innerText= '₹' +  item.originalprice;

        var offers= document.createElement('p');
        offers.setAttribute('class','offer');
        offers.innerText= item.offer + '%' + ' off';

        itemCard.appendChild(img);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(playback);
        itemCard.appendChild(itemName);
        itemPrice.appendChild(originalPrice);
        itemPrice.appendChild(offers);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(star);
        itemCard.appendChild(badge);

        newlaunches.appendChild(itemCard)

    })


    accessoriesData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating + ' ';

        var badge= document.createElement('i');
        badge.setAttribute('class','fas fa-badge-check fa-xs');

        var AddtoCart= document.createElement('button');
        AddtoCart.setAttribute('class','add-to-cart');
        AddtoCart.setAttribute('id',item.id)
        AddtoCart.innerText= 'Add to cart';

        cardTop.appendChild(AddtoCart);

        var img= document.createElement('img');
        img.src=item.img;

        var playback= document.createElement('p');
        playback.setAttribute('id','play-back');
        playback.innerText= item.hours;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '₹' + item.price;

        var originalPrice= document.createElement('p');
        originalPrice.setAttribute('class','originalprice');
        originalPrice.innerText= '₹' +  item.originalprice;

        var offers= document.createElement('p');
        offers.setAttribute('class','offer');
        offers.innerText= item.offer + '%' + ' off';

        itemCard.appendChild(img);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(playback);
        itemCard.appendChild(itemName);
        itemPrice.appendChild(originalPrice);
        itemPrice.appendChild(offers);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(star);
        itemCard.appendChild(badge);
        
        accessories.appendChild(itemCard)
    
    })

    soundbarsData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating + ' ';

        var badge= document.createElement('i');
        badge.setAttribute('class','fas fa-badge-check fa-xs');

        var AddtoCart= document.createElement('button');
        AddtoCart.setAttribute('class','add-to-cart');
        AddtoCart.setAttribute('id',item.id)
        AddtoCart.innerText= 'Add to cart';

        cardTop.appendChild(AddtoCart);

        var img= document.createElement('img');
        img.src=item.img;

        var playback= document.createElement('p');
        playback.setAttribute('id','play-back');
        playback.innerText= item.hours;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '₹' + item.price;

        var originalPrice= document.createElement('p');
        originalPrice.setAttribute('class','originalprice');
        originalPrice.innerText= '₹' +  item.originalprice;

        var offers= document.createElement('p');
        offers.setAttribute('class','offer');
        offers.innerText= item.offer + '%' + ' off';

        itemCard.appendChild(img);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(playback);
        itemCard.appendChild(itemName);
        itemPrice.appendChild(originalPrice);
        itemPrice.appendChild(offers);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(star);
        itemCard.appendChild(badge);

        
        soundbars.appendChild(itemCard)
        
    })

    watchesData.map(item=>{
        var itemCard= document.createElement('div');
        itemCard.setAttribute('id','item-card')

        var cardTop= document.createElement('div');
        cardTop.setAttribute('id','card-top');

        var star= document.createElement('i');
        star.setAttribute('class','fa fa-star');
        star.setAttribute('id','rating');
        star.innerText= ' ' + item.rating + ' ';

        var badge= document.createElement('i');
        badge.setAttribute('class','fas fa-badge-check fa-xs');

        var AddtoCart= document.createElement('button');
        AddtoCart.setAttribute('class','add-to-cart');
        AddtoCart.setAttribute('id',item.id)
        AddtoCart.innerText= 'Add to cart';

        cardTop.appendChild(AddtoCart);

        var img= document.createElement('img');
        img.src=item.img;

        var playback= document.createElement('p');
        playback.setAttribute('id','play-back');
        playback.innerText= item.hours;

        var itemName= document.createElement('p');
        itemName.setAttribute('id','item-name');
        itemName.innerText= item.name;

        var itemPrice= document.createElement('p');
        itemPrice.setAttribute('id','item-price');
        itemPrice.innerText= '₹' + item.price;

        var originalPrice= document.createElement('p');
        originalPrice.setAttribute('class','originalprice');
        originalPrice.innerText= '₹' +  item.originalprice;

        var offers= document.createElement('p');
        offers.setAttribute('class','offer');
        offers.innerText= item.offer + '%' + ' off';

        itemCard.appendChild(img);
        itemCard.appendChild(cardTop);
        itemCard.appendChild(playback);
        itemCard.appendChild(itemName);
        itemPrice.appendChild(originalPrice);
        itemPrice.appendChild(offers);
        itemCard.appendChild(itemPrice);
        itemCard.appendChild(star);
        itemCard.appendChild(badge);

        topWatches.appendChild(itemCard)

    })
}
displayItems();


const vegData= [...new Map(boatItem.map(item=> [item['category'],item])).values()];
console.log(vegData);

function selectTaste(){
    var categoryList= document.getElementById('category-list');

    vegData.map(item=>{
        console.log(item)
        var listCard= document.createElement('div');
        listCard.setAttribute('class','list-card');
    
        var listImg= document.createElement('img');
        listImg.src= item.img;
    
        var listName= document.createElement('a');
        listName.setAttribute('class','list-name');
        listName.innerText= item.category;
        listName.setAttribute('href','#'+item.category)
    
        listCard.appendChild(listImg);
        listCard.appendChild(listName);

        var cloneListCard= listCard.cloneNode(true);
        categoryList.appendChild(listCard);

    })
}
selectTaste();


document.querySelectorAll('.add-to-cart').forEach(item=>{
    item.addEventListener('click',addToCart)
})

var cartData= [];
function addToCart(){
    
    var itemToAdd= this.parentNode.nextSibling.nextSibling.innerText;
    var itemObj= boatItem.find(element=>element.name==itemToAdd);

    var index= cartData.indexOf(itemObj);
    if(index=== -1){
        document.getElementById(itemObj.id).classList.add('toggle-heart');
        cartData= [...cartData,itemObj];
    }
    else if(index > -1){
        alert("Added to cart!");
    }
    
    document.getElementById('cart-plus').innerText=
    ' ' + cartData.length;
    totalAmount();
    cartItems();
}


function cartItems(){
    var tableBody=  document.getElementById('table-body');
    tableBody.innerHTML= '';

    cartData.map(item=> {
        var tableRow= document.createElement('div');
        tableRow.setAttribute('class','cart-detail');
        
        var rowData1= document.createElement('div');
        var img= document.createElement('img');
        img.src= item.img;
        rowData1.appendChild(img);
    
        var rowData2= document.createElement('div');
        rowData2.innerText= item.name ;
        
        
        var rowData3= document.createElement('div');
        var btn1= document.createElement('button');
        btn1.setAttribute('class','decrease-item');
        btn1.innerText= '-';
        var span= document.createElement('span');
        span.innerText= item.quantity;
        var btn2= document.createElement('button');
        btn2.setAttribute('class','increase-item');
        btn2.innerText= '+';
        
        rowData3.appendChild(btn1);
        rowData3.appendChild(span);
        rowData3.appendChild(btn2);
    
        var rowData4= document.createElement('div');
        rowData4.innerText= '₹' + item.price;
    
        tableRow.appendChild(rowData1);
        tableRow.appendChild(rowData2);
        
        tableRow.appendChild(rowData3);
        tableRow.appendChild(rowData4);
        
    
        tableBody.appendChild(tableRow);
    })
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}


function incrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    console.log(itemToInc)
    var incObj= cartData.find(element=>element.name==itemToInc);
    incObj.quantity+=1;
    
    currPrice= (incObj.price*incObj.quantity - incObj.price*(incObj.quantity-1))/(incObj.quantity-1);
    incObj.price= currPrice*incObj.quantity;
    totalAmount()
    cartItems();
}

var currPrice= 0;
function decrementItem(){
    let itemToInc= this.parentNode.previousSibling.innerText;
    let decObj= cartData.find(element=>element.name==itemToInc);
    let ind= cartData.indexOf(decObj);
    if(decObj.quantity >1){
        currPrice= (decObj.price*decObj.quantity - decObj.price*(decObj.quantity-1))/(decObj.quantity);
        decObj.quantity-= 1;
        decObj.price= currPrice*decObj.quantity;
    }
    else{
        document.getElementById(decObj.id).classList.remove('toggle-heart')
        cartData.splice(ind,1);
        document.getElementById('cart-plus').innerText= ' ' + cartData.length + ' Items';
        if(cartData.length < 1 && flag){
            document.getElementById('cart-page').classList.toggle('cart-toggle');
            
            document.getElementById('checkout').classList.toggle('cart-toggle');
            flag= false;
            alert("Currently no item in cart!");
            console.log(flag)
        }
    }
    totalAmount()
    cartItems()
}

function totalAmount(){
    var sum=0;
    cartData.map(item=>{
        sum+= item.price;
    })
    document.getElementById('total-item').innerText= 'Total Item : ' + cartData.length;
    document.getElementById('total-price').innerText= '₹' + sum;
    document.getElementById('m-total-amount').innerText= ' ₹' + sum;
    document.getElementById('payment-total-price').innerText= '₹ ' + sum;
}

document.getElementById('cart-plus').addEventListener('click',cartToggle);

var flag= false;
function cartToggle(){
    if(cartData.length > 0){
      
        
        document.getElementById('cart-page').classList.toggle('cart-toggle');
        document.getElementById('checkout').classList.toggle('cart-toggle');
        flag= true;
        console.log(flag)
    }
    else{
        alert("Currently no item in cart!");
    }
}

function addEvents(){
    document.querySelectorAll('.add-to-cart').forEach(item=>{
        item.addEventListener('click',addToCart)
    });
    document.querySelectorAll('.increase-item').forEach(item=>{
        item.addEventListener('click',incrementItem)
    })

    document.querySelectorAll('.decrease-item').forEach(item=>{
        item.addEventListener('click',decrementItem)
    })
}