
function check(){
    const H=document.querySelector('#Height').value
    const W=document.querySelector('#Weight').value
    let bmi=(W/(H*H)).toFixed(2)
    let lw=((18.6-bmi)*(H*H)).toFixed(2)
    let ow=((bmi-24.9)*(H*H)).toFixed(2)
    if(bmi<18.6){
        document.querySelector('.output').innerHTML=`Your BMI is ${bmi}<br><br> You are Under Weight<br><br> You have to Gain ${lw} Kg Weight to get Normal Weight`
    }else if(bmi>=18.6 && bmi<24.9){
        document.querySelector('.output').innerHTML=`Your BMI is ${bmi} <br><br> You are Normal Weighted`
    }
    else if(bmi>24.9){
        document.querySelector('.output').innerHTML=`Your BMI is ${bmi} <br><br> You are OverWeight <br><br> You have to Lose ${ow} Kg Weight to get Normal Weight`
    }
}