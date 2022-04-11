// export var user = {
//     name: 'Maks',
//     age: 30,
//     address: {
//         city: {
//             title: 'Moscow'
//         }
//     }
// }
//
// const a = user.address.city.title
// const aa = user['address']['city']['title']
//
//
// export var userObj = {
//     '1' : 'Maks',
//     '2' : 'Dima',
//     '3' : 'Evgen',
//     '4' : 'Egor',
// }
//
// const b = userObj['1']
// const bb = userObj[1] //приводит число к строке



import {users} from "./08.test";

const user = {id: 100500, name: 'Igor'}

const a = users[4].name //нашел сразу
users[user.id] = user
delete users[user.id]
users[user.id].name = 'Viktor'


export const usersArray = [
    {id: 100, name: 'Maks'},
    {id: 200, name: 'Dima'},
    {id: 300, name: 'Evgen'},
    {id: 400, name: 'Egor'},
]

// const b = usersArray.find(u => u.id === 400) // начал пробегать по каждому эл массива пока не найдет нужное значение (долго и затратно)
// const usersCopy = [...usersArray, user]//если такое объект уже был то он сделает копию, чтобы не было копии нужно пробежать по массиву фильтром и перезаписать объект
// const usersArray = usersArray.filter(f=>f.id !== id) // для удаления нужно взять массив и отфильтровать его