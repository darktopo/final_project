import { stays } from "./stays.js";
import { cateCards } from "./utils.js";
import { contador } from "./utils.js";
import { toggle } from "./utils.js";
import { cyco } from "./utils.js";
import { searchEle } from "./utils.js";
/**
 * Aquí estará la lógica principal de la aplicación.
 * Este bloque de código contiene la funcionalidad principal
 * que define el comportamiento del programa.
 */

const varopen = document.querySelector('#open1');
const mod = document.querySelector('#modal');
const close = document.querySelector('#close');
const search = document.querySelector('#search');
const contaElem = document.querySelector('#contAdu');
const btnmasAdu = document.querySelector('#masAdu');
const btnmenosAdu = document.querySelector('#menosAdu');
const contaElemChi = document.querySelector('#contChi');
const btnmasChi = document.querySelector('#masChi');
const btnmenosChi = document.querySelector('#menosChi');
const guestin = document.querySelector('#inGuest');//
const contemasmen = document.querySelector('#contemm');
const locatin = document.querySelector('#inlocat');//
const locatopt = document.querySelector('#inopt');
const targetas = document.querySelectorAll('#contCards');


// tarjetas
cateCards(stays, targetas)


// modal open-close
toggle(mod, varopen, close);


// location
locatin.addEventListener('click', () => {
    locatopt.classList.toggle('hidden');
});
locatopt.addEventListener('click', (e) => {
    const { target } = e;
    const { tagName } = target;
    if (tagName === "LI") {
        locatin.value = target.textContent.trim();
        locatopt.classList.toggle('hidden');
    }
});


// contador guest
guestin.addEventListener('click', () => {
    contemasmen.classList.toggle('hidden');
});
contador(guestin, contaElem, contaElemChi, btnmasAdu, btnmenosAdu, btnmasChi, btnmenosChi);


// ciudades unicas
cyco(stays, locatopt);


// filter
search.addEventListener('click', (e) => {
    searchEle(stays, locatin, guestin, targetas);
});
