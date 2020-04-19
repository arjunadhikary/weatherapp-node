const submit = document.querySelector('form');
const search = document.querySelector('input');
const pOne = document.querySelector('#dataOne');
const pTwo = document.querySelector('#dataTwo');
console.log("%cLET'S UNITE TO FIX THE BUG!!!","color: red; font-family:monospace; font-size: 30px");





submit.addEventListener('submit',(e)=>{
    e.preventDefault();
    const location = search.value;
    pOne.textContent="Loading..."
    pTwo.textContent="";
    console.log(location)
    fetch('http://localhost:3000/weather?location='+location).then((response)=>{
        response.json().then((data)=>{
            if(data.error)
            pOne.textContent="Please Provide A Valid Location!";
            else{
                pOne.textContent=data.location;
                pTwo.textContent=data.temp
            }
        })
        
        
        
        })
})

