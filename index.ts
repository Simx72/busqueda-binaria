
interface Respuesta<T> {
    res: T | null;
    i: number;
}

interface BuscadorI<T> {
    order(): void;
    lineal: (query: T) => Respuesta<T>;
    binaria: (query: T) => Respuesta<T>;
}

/**
 * Un array que puede ejecutar busquedas
 */
class BuscadorParent<T> extends Array<T> {
    constructor(items: Iterable<T>) {
        super(...items);
        this.order()
    }

    order() { };
}

class BuscadorNumber<T extends number> extends BuscadorParent<T> implements BuscadorI<T> {
    order() {
        this.sort((a, b) => a - b)
    }

    /**
     * Busqueda lineal
     * @param query - la consulta o numero buscado
     */
    lineal(query: number): Respuesta<T> {
        let i = 1;
        while (i < this.length) {
            if (this[i] == query)
                return { res: this[i], i };
            i++;
        }
        return { res: null, i };
    }

    /**
     * Busqueda binaria
     * @param query - la consulta o numero buscado
     */
    binaria(query: number): Respuesta<T> {
        let n = this.length,
            max = n,
            min = 0,
            diff = () => max - min,
            mi = () => Math.floor((max + min) / 2),
            current = mi(),
            i = 1;
        while (this[current] != query) {
            i++;
            // console.log(current);
            // console.log(this[current]);
            // console.log(max);
            // console.log(min);
            // console.log(mi());
            // console.log(this[mi()]);
            if (diff() <= 0) {
                return { res: null, i };
            }
            if (query > this[current]) {
                min = current + 1;
                current = mi();
            } else if (query < this[current]) {
                max = current - 1;
                current = mi();
            }
        }

        return { res: this[current], i };
    }

}

class BuscadorString<T extends string> extends BuscadorParent<T> implements BuscadorI<T> {
    order() {
        this.sort()
    }

    /**
     * Busqueda lineal
     * @param query - la consulta o numero buscado
     */
    lineal(query: T): Respuesta<T> {
        let i = 0;
        let currentQuery = String.fromCharCode(0);

        let mayorPuntaje = { puntos: 0, palabra: '' as T };



        pasaPalabra: while (i < this.length) {
            const palabra = this[i];
            let puntos = 0;
            i++;

            pasaLetra: for (let charI = 0; charI < query.length; charI++) {
                const char = palabra.charCodeAt(charI),
                    queryChar = query.charCodeAt(charI);

                if (char == NaN) continue pasaPalabra;
                if (char < queryChar) {
                    puntos = charI;
                    if (puntos > mayorPuntaje.puntos) {
                        mayorPuntaje.puntos = puntos;
                        mayorPuntaje.palabra = palabra;
                    }
                    continue pasaPalabra;
                }
                if (char > queryChar) break pasaPalabra;
            }
            if (palabra == query) return { res: palabra, i }
        }

        return { res: mayorPuntaje.palabra, i }
    }

    /**
     * Busqueda binaria
     * @param query - la consulta o numero buscado
     */
    binaria(query: T): Respuesta<T> {
        let n = this.length,
            max = n,
            min = 0,
            // diff = () => max - min,
            mi = () => Math.floor((max + min) / 2),
            current = mi(),
            i = 1,
            ultima = '';
        pasaPalabra: while (this[current] != query) {
            const palabra = this[current];
            i++;
            // console.log(current);
            // console.log(this[current]);
            // console.log(max);
            // console.log(min);
            // console.log(mi());
            // console.log(this[mi()]);
            /* if (diff() <= 0) {
                return { res: null, i };
            } */

            if (ultima == palabra)
                break;
            else
                ultima = palabra;

            let { length: nLetras } = (palabra.length > query.length) ? palabra : query
            pasaLetra: for (let charI = 0; charI < nLetras; charI++) {
                const char = palabra.charCodeAt(charI),
                    queryChar = query.charCodeAt(charI);

                if (char == queryChar)
                    continue pasaLetra
                else {
                    if (char < queryChar || char == NaN) {
                        min = current + 1;
                    } else if (char > queryChar || queryChar == NaN) {
                        max = current - 1;
                    }
                    current = mi();
                    continue pasaPalabra;
                }


            }
            if (palabra == query) return { res: palabra, i }
        }

        return { res: this[current], i };
    }

}

export { BuscadorNumber, BuscadorString };