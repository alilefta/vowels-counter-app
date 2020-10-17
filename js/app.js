const form = document.querySelector('#form');
const input = document.querySelector('input');
const btnForm = document.querySelector('#btn');
const modal = document.querySelector('.modal');
const modalCls = document.querySelectorAll('#close');
const modalReset = document.querySelector('#reset');
const modalNum = document.querySelector('.modal-body');
let c = 0;
form.addEventListener('submit', (e)=>{
	e.preventDefault();
	let val = input.value;
	let vowels = 'aioeu';

	for(let i of val){
		// console.log(i)
		if(vowels.indexOf(i) !== -1 ){
			c+=1;
		}
	}
	modalNum.innerText = c;
	modal.style.display = 'block';
})

modalCls.forEach((btn)=>btn.addEventListener('click', (e)=> modal.style.display = 'none'));
modalReset.addEventListener('click', ()=> {
	modal.style.display = 'none';
	c = 0;
	modalNum.innerText = 0;
	input.value = '';
})