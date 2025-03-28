/**
 * Módulo de funciones utilitarias.
 * Este archivo contiene funciones auxiliares que serán utilizadas y llamadas
 * desde el archivo principal para realizar varias operaciones.
 */

export function cateCards(items, elements) {
    elements.forEach(element => {
        element.innerHTML = "";
        for (let i = 0; i < items.length; i++) {
            const item = items[i];
            let superHost = "";
            let contador = items.length;
            document.querySelector('#count').textContent = contador >= 12 ? `12+ stays` : `${contador} Stays`;
            if (item.superHost) {
                superHost = '<span class="px-1 border-2 border-black rounded-3xl text-black">SUPERHOST</span>';
            }
            if (item.beds === null) {
                item.beds = "N/E";
            }
            const template = `
                <div class="flex flex-col w-88 h-76" id="cards">
                    <div class="w-88 h-58 border-hidden rounded-3xl overflow-hidden">
                        <img src="${item.photo}" class="object-cover w-full h-full">
                    </div>
                    <div class=" flex flex-row justify-between px-2 py-1">
                        <p class="text-gray-400 text-sm font-[450]">${superHost} ${item.type} . ${item.beds} beds</p>
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
            element.innerHTML += template;
        }
    });
}

export function contador(guestin, contaElem, contaElemChi, btnmasAdu, btnmenosAdu, btnmasChi, btnmenosChi) {
    let contador = 0;
    let contador1 = 0
    let contadorg = 0
    const displ = parseInt(guestin.textContent);

    btnmasAdu.addEventListener('click', () => {
        if (contador < 10 && guestin.value < 10) {
            contador++;
            contadorg++;
            guestin.textContent = displ + contadorg;
            guestin.value = contadorg
            contaElem.textContent = contador;
        }
    });

    btnmenosAdu.addEventListener('click', () => {
        if (contador > 0 && guestin.value > 0) {
            contador--;
            contadorg--;
            guestin.textContent = displ - contadorg;
            guestin.value = contadorg
            contaElem.textContent = contador;
        }
    });

    btnmasChi.addEventListener('click', () => {
        if (contador1 < 10 && guestin.value < 10) {
            contador1++;
            contadorg++;
            guestin.textContent = displ + contadorg;
            guestin.value = contadorg
            contaElemChi.textContent = contador1;
        }
    });

    btnmenosChi.addEventListener('click', () => {
        if (contador1 > 0 && guestin.value > 0) {
            contador1--;
            contadorg--;
            guestin.textContent = displ - contadorg;
            guestin.value = contadorg
            contaElemChi.textContent = contador1;
        }
    });
}

export function toggle(mod, varopen, close) {
    varopen.addEventListener('click', () => {
        mod.classList.toggle('hidden');
    });

    close.addEventListener('click', () => {
        mod.classList.toggle('hidden');
    });

    mod.addEventListener('click', (e) => {
        if (e.target.id === "modal") {
            mod.classList.toggle('hidden');
        }
    });
}

export function cyco(array, element) {
    element.innerHTML = "";
    const uniqueCities = new Set();
    array.forEach(item => {
        const key = `${item.city},${item.country}`;
        if (!uniqueCities.has(key) && uniqueCities.size < 4) {
            uniqueCities.add(key);
            const template = `
                <li class="cursor-pointer py-2 px-3">
                    ⚲ ${item.city} , ${item.country}
                </li>
                `
            element.innerHTML += template;
        }
    });
}

export function searchEle(stays, locatin, guestin, targetas) {
    let locatinValue = (locatin.value).toLowerCase();
    let guestinValue = parseInt(guestin.value) || 0;
    let filtered = stays;
    if (locatinValue !== "" && guestinValue === 0) {
        filtered = stays.filter((stay) => stay.city.toLowerCase() === locatinValue);
    }
    else if (locatinValue === "" && guestinValue > 0) {
        filtered = stays.filter((stay) => stay.maxGuests >= guestinValue);
    }
    else if (locatinValue !== "" && guestinValue >= 0) {
        filtered = stays.filter((stay) => stay.city.toLowerCase() === locatinValue && stay.maxGuests >= guestinValue);
    }
    cateCards(filtered, targetas);
}