const tarjetas = document.getElementById('tarjetas');

fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?i=Sprite')
    .then(response => response.json())
    .then(data => {
        data.drinks.forEach(drink => {
            const tarjeta = document.createElement('div');
            tarjeta.classList.add('tarjeta');

            const imagen = document.createElement('img');
            imagen.src = drink.strDrinkThumb;

            const nombre = document.createElement('h3');
            nombre.textContent = drink.strDrink;

            const descripcion = document.createElement('p');
            descripcion.textContent = '$' + drink.idDrink;

            const boton = document.createElement('button');
            boton.textContent = 'Seleccionar';
            boton.addEventListener('click', () => {
                tarjeta.classList.toggle('seleccionada');
            });

            tarjeta.appendChild(imagen);
            tarjeta.appendChild(nombre);
            tarjeta.appendChild(descripcion);
            tarjeta.appendChild(boton);

            tarjetas.appendChild(tarjeta);
        });
    })
    .catch(error => {
        console.error('Error al obtener los datos:', error);
    });
