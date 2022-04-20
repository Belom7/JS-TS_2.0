export type UserType = {
    name: string,
    hair: number,
    address: { title: string }
}
export type LaptopType = {
    title: string
}
export type SkillsType = {
    name: string
    level: number
}

export type userWithLaptopType = UserType & {
    laptop: LaptopType
}
export type userWithBooksType = userWithLaptopType & {
    books: string[]
}
export type userWithSkillsType = userWithBooksType & {
    level: SkillsType[]
}


export const hairdresser = (user: UserType, power: number) => {
    const copyUser = {...user, hair: user.hair / power}
    return copyUser
}

export const updateAddress = (user2: userWithLaptopType, title: string) => {
    return {...user2, address: {...user2.address, title}}
}

export const upgradeLaptopOnAcer = (user3: userWithLaptopType, title: string) => {
    return {...user3, laptop: {...user3.laptop, title}}
}

export const addBooks = (user4: userWithBooksType, book: string) => {
    return {...user4, books: [...user4.books, book]}
}

export const upgradeBooks = (user4: userWithBooksType, book1: string, book2: string) => {
    return {...user4, books: user4.books.map(book => book === book1 ? book2 : book)}
}

export const upgradeLevel = (user5: userWithSkillsType, name: string, level: number) => {
    return {...user5, level: [...user5.level.map(lev => lev.name === name ? {...lev, level} : lev)]}
}

export const removeBook = (user6:userWithSkillsType, book:string) => {
    return {...user6, books:[...user6.books.filter(filterBook => filterBook!==book)]}
}