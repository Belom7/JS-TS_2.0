export const age = [10,30,50,41,24,78,66,90,100]

const predicate = (age:number) => {
    return age > 90
}

type CoursesType = {
    name:string
    price:number
}

export const curses = [
    {name:'HTML', price: 100},
    {name:'CSS', price: 150},
    {name:'JS', price: 200},
]

const chipPredicate = (curses:CoursesType) => {
    return curses.price < 170
}