# Busqueda binaria
----------

Una busqueda binaria es un tipo de busqueda que facilita el trabajo para una maquina de encontrar un elemento en una lista

> Mas información: https://es.khanacademy.org/computing/computer-science/algorithms/binary-search/a/binary-search



----------
## Utilización

Para utilizarlo primero compile la aplicación con 
```bash
npm run build
```
luego puede importar las funciones del archivo `index.js`

El archivo exporta 2 funciones constructoras `BuscadorNumber` y `BuscadorString`. Ambas son listas que tienen los metodos `.lineal(query)` y `.binaria(query)` para hacer una consulta de un valor de forma lineal o binaria (donde `query` que es 'consulta' en ingles es el valor que deseas encontrar).