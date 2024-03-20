const app = document.querySelector('#recorrer')

taskList = [
    {title: 'hacer cama' , state: 'complete' },
    {title: 'Duolingo', state: 'complete' },
    {title: 'Leer' , state: 'pending' },
    {title: 'cena', state: 'in progress'},
    {title: 'clean', state: 'cancel'},
]

taskList.forEach(task => {
    app.innerHTML += `<li>${task.title} - ${task.state}</li>`
})
