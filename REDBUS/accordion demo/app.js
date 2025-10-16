const icon = document.getElementById('icon');
const cardContainer = document.getElementById('cardContainer');
const clicked = false;
icon.addEventListener('click', (card) => {
   cardContainer.innerHTML = '';
   cardContainer.classList.toggle('hidden');
   const contain = document.createElement('div');
   contain.innerHTML = `
   <p>Lorem lsnfljsnfjnfjnrrlnsdlmflkdsnfknfnlsfnd,m f,sdlmfmnslknflsnfln</p>
   `
   cardContainer.appendChild(contain);
})