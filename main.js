const getResult=()=>{
    let math=document.getElementById('math').value;
    let physics=document.getElementById('physics').value;
    let chemistry=document.getElementById('chemistry').value;
    let programing=document.getElementById('programing').value;

    let total=parseFloat(math)+parseFloat(physics)+parseFloat(chemistry)+parseFloat(programing);
    let percentage=(total*100)/400;

    if(percentage>=90){
        document.getElementById('grade').innerHTML='A+'
    }
    else if(percentage>=80){
        document.getElementById('grade').innerHTML='A'
    }
    else if(percentage>=70){
        document.getElementById('grade').innerHTML='B+'
    }
    else if(percentage>=60){
        document.getElementById('grade').innerHTML='B'
    }
    else if(percentage>=50){
        document.getElementById('grade').innerHTML='C+'
    }
    else if(percentage>=40){
        document.getElementById('grade').innerHTML='C'
    }    else if(percentage>=30){
        document.getElementById('grade').innerHTML='D+'
    }
    else if(percentage>=20){
        document.getElementById('grade').innerHTML='D'
    }
    else{
        document.getElementById('grade').innerHTML='failed !'
    }

    document.getElementById('total').innerHTML=total;
    document.getElementById('percentage').innerHTML=percentage;

    if (percentage<=30){
        document.getElementById('msg').innerHTML='congratulations you failed !'
    }
    else if (percentage<=40){
        document.getElementById('msg').innerHTML='you"er doing well but keep improving'
    }
    else if (percentage<=50){
        document.getElementById('msg').innerHTML='you"er kiling it'
    }
    else if (percentage<=60){
        document.getElementById('msg').innerHTML='you"re definitly the best'
    }
    else if (percentage<=70){
        document.getElementById('msg').innerHTML='your"er smart, congratulations!'
    }
}
