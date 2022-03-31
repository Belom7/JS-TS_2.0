export type studentType = {
    id:number
    name:string
    age:number
    isActive:boolean
    address: addressType
    technologies: technologiesType[]
}
type addressType = {
    streetTitle:string
    city:localCityType
}
type localCityType = {
    title:string
    countryTitle:string
}
type technologiesType = {
    id:number
    title:string
}

export const student:studentType = {
    id: 1,
    name: 'Maks',
    age: 30,
    isActive: true,
    address: {
        streetTitle: 'Lenina',
        city: {
            title: 'Moscow',
            countryTitle: 'Russia',
        }
    },
    technologies: [
        {
            id: 1,
            title: 'HTML'
        },
        {
            id: 2,
            title: 'CSS'
        },
        {
            id: 3,
            title: 'JS'
        },
        {
            id: 4,
            title: 'REACT'
        },
    ]
}