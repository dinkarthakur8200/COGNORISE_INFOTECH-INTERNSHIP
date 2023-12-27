let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');

let string = "";
let arr = Array.from(buttons);
arr.forEach(button => {
    button.addEventListener('click',(e)=>{
        if(e.target.innerHTML == '='){
            string = eval(string);
            input.value = string;
        }

        else if(e.target.innerHTML == 'AC'){
            string = "";
            input.value = string;
        }

        else if(e.target.innerHTML == 'DEL'){
            string = string.substring(0, string.length-1);
            input.value = string;
        }

        else{
            string += e.target.innerHTML;
            input.value = string;
        }
    })
}


)

// for hover calculator text which is on the top...

const h1 = document.querySelector('#h1');
const span = document.querySelector('#span');

span.addEventListener('mouseover', () => {
  h1.style.color = 'red';
});

span.addEventListener('mouseout', () => {
  h1.style.color = '#807f7f';
});


h1.addEventListener('mouseover', () => {
    span.style.color = 'orange';
  });
  
  h1.addEventListener('mouseout', () => {
    span.style.color = '#807f7f';
  });
  