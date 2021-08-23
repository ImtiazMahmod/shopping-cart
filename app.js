//this is shopping cart
  //update case
    function updateProductCounter(product,price,isIncrease){
        const productInput = document.getElementById(product + '-counter');
        let productCounter = productInput.value;

        //input increase as value
       if(isIncrease == true){
        productInput.value = parseInt(productCounter) + 1;
       }
       else if(productCounter>0){
         productInput.value = parseInt(productCounter) - 1;
       }
       productCounter = productInput.value;

       const productAmount = document.getElementById(product + '-amount');

       productAmount.innerText = price * productCounter;       

      calculateTotal();
    }

    function getAmount(product){
        let productAmount = document.getElementById(product + '-amount');

        productAmount = parseInt(productAmount.innerText);

        return productAmount;
    }
    function calculateTotal(){
        const phoneAmount = getAmount('phone');
        // console.log(phoneAmount);
        const caseAmount = getAmount('case');

        const subtotal = phoneAmount + caseAmount;
        const tax = subtotal /10;
        const total = subtotal + tax;

        document.getElementById('sub-total').innerText = subtotal;
        document.getElementById('tax').innerText = tax;
        document.getElementById('total').innerText = total;


    }

  ////for phone
  document.getElementById('phone-plus').addEventListener('click',function(){

    updateProductCounter('phone',1219,true);
})

    document.getElementById('phone-minus').addEventListener('click',function(){
        updateProductCounter('phone',1219,false);
    })

   ///for casin
  //plus counter
document.getElementById('case-plus').addEventListener('click',function(){

    updateProductCounter('case',59,true);

})
  //minus counter
  document.getElementById('case-minus').addEventListener('click',function(){
    updateProductCounter('case',59,false);

  })
