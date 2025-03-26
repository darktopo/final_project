import { stays } from "./stays.js";
/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */
const contaElem = document.querySelector('#contAdu');
const btnmasAdu = document.querySelector('#masAdu');
const btnmenosAdu = document.querySelector('#menosAdu');
const contaElemChi = document.querySelector('#contChi');
const btnmasChi = document.querySelector('#masChi');
const btnmenosCHi = document.querySelector('#menosChi');
const targetas = document.querySelectorAll('#contCards');

cateCards(stays, targetas)


function cateCards(items, element) {
    element.innerHTML = ""
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        console.log(item.beds)
        const template = `
            <div class="" id="cards">
                <img src="${item.photo}"
                class="w-86 rounded-3xl">
                <div class=" flex flex-row justify-between px-2 py-1">
                    <p class="text-gray-400 text-sm font-[450]">${item.type} . ${item.beds} beds</p>
                    <div class="flex flex-row justify-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                        stroke="currentColor" class="w-4 fill-red-400 stroke-red-400">
                        <path stroke-linecap="round" stroke-linejoin="round"
                            d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                        </svg>
                        <p class="text-gray-400 text-sm font-[450] justify-center">${item.rating}</p>
                    </div>
                </div>
                <p class="px-2 pb-5 font-[500]">${item.title}</p>
            </div>
            `;
        element.innerHTML += template
    }

}







let contador = 0;

btnmasAdu.addEventListener('click', () => {
    if (contador < 10) {
        contador++;
        contaElem.textContent = contador;
    }
});
btnmenosAdu.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        contaElem.textContent = contador;
    }
});
btnmasChi.addEventListener('click', () => {
    if (contador < 10) {
        contador++;
        contaElemChi.textContent = contador;
    }
});
btnmenosCHi.addEventListener('click', () => {
    if (contador > 0) {
        contador--;
        contaElemChi.textContent = contador;
    }
});