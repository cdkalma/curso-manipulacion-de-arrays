//map(), es inmutable, no cambia nada, crea algo nuevo

const letters = ['a', 'b', 'c', 'd']
const list = letters.map((element) => element + '++')

console.log(list);

/**Cuando trabajamos con objetos .map() nos puede ser
 * de utilidar para extraer un dato en específico sin
 * la necesidad de modificar el array original
 */
const orders = [
    {
      customerName: "Nicolas",
      total: 60,
      delivered: true,
    },
    {
      customerName: "Zulema",
      total: 120,
      delivered: false,
    },
    {
      customerName: "Santiago",
      total: 180,
      delivered: true,
    },
    {
      customerName: "Valentina",
      total: 240,
      delivered: true,
    },
]

const onlyTotal = orders.map(item => item.total)
console.log('rta', onlyTotal);

/**Qué pasa si quiero agregar un item más a mi array
 * de objetos pero sin modificar el array original
 */
const newItemToArray = orders.map((item) => {
    return {
        ...item,
        tax: .19
    }
})

console.log('original', orders);
console.log('new', newItemToArray);
/**Debemos de hacerlo de esta forma, de lo contrario
 * se copiaran los datos en memoria y el  array original
 * también se verá afectado
 */