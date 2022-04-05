export type PeopleType = {
    name: string
    age: number
}

export const people:PeopleType[] = [
    {name: 'Iliya Byshmelev', age: 35},
    {name: 'Yuriy Boyko', age: 23},
    {name: 'Timur Urgant', age: 46},
]

export const transformator = (people: PeopleType) => {
    return(
        {
            stack: ['HTML', 'CSS', 'JS', 'TDD', 'React'],
            firstName: people.name.split(' ')[0],
            lastName: people.name.split(' ')[1],
        }
    )
}

transformator(people[0])