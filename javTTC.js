var ref=document.querySelector('#b');

var elements=document.querySelectorAll('td');

function refreshpage(){
	for(var i=0;i<elements.length;i++){
		elements[i].textContent = ' ';
	}
}

ref.addEventListener('click',refreshpage);
function chkmarker(){
	if(this.textContent === ' '){
	 this.textContent='X';
  }
  else if(this.textContent === 'X'){
	 this.textContent='O';
  }
  else{
	 this.textContent='';
  }

}
for(var i=0;i<elements.length;i++){
	elements[i].addEventListener('click',chkmarker);
}