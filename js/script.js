const divList = document.getElementsByClassName('div');
const outSpice = document.getElementsByTagName('body');
console.log(outSpice);
console.log(divList);
outSpice[0].addEventListener('click', () => {
  document.getElementById('selected').innerHTML = '';
});

for (let div of divList) {
  div.addEventListener('click', (event) => {
    /* console.log(div.getAttribute('div-name')) */
    console.log(div.getAttribute('div-name'));

    const html = `<div>${div.getAttribute('div-name')}</div>`;
    document.getElementById('selected').innerHTML = html;
    event.stopPropagation();
  });
}
function onFirstButtonHendler(event) {
  const html = `<div>${event.target.getAttribute('button-name')}</div>`;
  document.getElementById('selected').innerHTML = html;
  event.stopPropagation();
}
function onSecondButtonHendler(event) {
  const html = `<div>${event.target.getAttribute('button-nam')}</div>`;
  document.getElementById('selected').innerHTML = html;
  event.stopPropagation();
}

function check() {
  let input = document.getElementById('inp');
  document.getElementById('send').disabled = input.value ? false : 'disabled';
}
let reg = /[A-Z]/g;

inp.oninput = function () {
  this.value = this.value.replace(reg, '');
};

function showAlertHendler() {
  alert(document.getElementById('inp').value);
}
