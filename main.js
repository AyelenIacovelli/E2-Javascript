// LLAMO ELEMENTOS DEL DOM
const input = document.querySelector("#input");
const form = document.querySelector("#form");
const render = document.querySelector(".text-render");

// ARRAY PIZZAS
const pizzas = [
    {
        nombre: 'Muzzarella',
        id: 1,
        precio: 1700,
        ingredientes: ['salsa de tomate', 'muzzarella', 'aceitunas'],
    },
    {
        nombre: 'Fugazza con queso',
        id: 2,
        precio: 1800,
        ingredientes: ['muzzarella', 'cebolla', 'aceitunas'],
    },
    {
        nombre: 'Especial',
        id: 3,
        precio: 1900,
        ingredientes: ['salsa de tomate', 'muzzarella', 'jamon cocido', 'aceitunas'],
    },
    {
        nombre: 'Calabresa',
        id: 4,
        precio: 2000,
        ingredientes: ['salsa de tomate', 'muzzarella', 'longaniza'],
    },
    {
        nombre: 'Provolone',
        id: 5,
        precio: 2100,
        ingredientes: ['muzzarella', 'provolone', 'aceitunas'],
    },
    {
        nombre: 'Americana',
        id: 6,
        precio: 2200,
        ingredientes: ['salsa de tomate', 'muzzarella', 'cheddar', 'panceta', 'huevo frito'],
    },   
    
];

// CHECKEO INPUT
const checkId = () =>{

    let valid = false;
    const idValue = input.value.trim();
    if(isEmpty(idValue)){
        showError(input,"Slot vacío. Ingrese un número");
    }else if (!isInputValid(idValue)){
        showError(input,"Número inválido. Ingrese un número del 1 al 6");
    }else{
        renderPizza(idValue);
        valid = true;
        clearError(idValue);
    }
    return valid;
}

// INPUT VACIO
const isEmpty = (value) => value === "";

// INPUT VALIDO
const isInputValid = (value) => value < 1 || value > 6 ? false : true;

// RENDER PIZZA
const renderPizza = (value) =>{

    const h2 = document.querySelector(".nombre");
    const h3 = document.querySelector(".precio");

    pizzas.forEach((pizza) => {
        if(pizza.id == value){
            h2.textContent = pizza.nombre;
            h3.textContent = `$${pizza.precio}`;
        }
    });
}

// MOSTRAR ERROR
const showError = (input, mensaje) =>{

    const error = document.querySelector(".small");
    const formField = input.parentElement;
    const h2 = document.querySelector(".nombre");
    const h3 = document.querySelector(".precio");

    formField.classList.add('error');
    error.textContent = mensaje;
    h2.textContent = "";
    h3.textContent = "";
}

// BORRAR ERROR
const clearError = (input) =>{

    const error = document.querySelector('.small');
    const formField = input.parentElement;

    formField.classList.remove('error');
    error.textContent = "";
}

// ESCUCHADOR DE EVENTO
form.addEventListener('submit',(e) => {
    e.preventDefault();
    checkId();
    form.reset();
})