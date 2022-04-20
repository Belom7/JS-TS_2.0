import {
    addBooks,
    hairdresser, removeBook,
    updateAddress, upgradeBooks,
    upgradeLaptopOnAcer, upgradeLevel,
    UserType,
    userWithBooksType,
    userWithLaptopType, userWithSkillsType
} from "./10_01";

test('change hair', () => {
    let user: UserType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'}
    }

    const awesome = hairdresser(user, 10)
    expect(awesome.hair).toBe(10)
    expect(user.hair).toBe(100)

})

test('change address', () => {
    let user2: userWithLaptopType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'},
        laptop: {title: 'MacBook'},
    }

    const awesome = updateAddress(user2, 'Kirov')

    expect(user2).not.toBe(awesome)
    expect(user2.address).not.toBe(awesome.address)
    expect(user2.laptop).toBe(awesome.laptop)
    expect(user2.address.title).toBe('Moscow')
    expect(awesome.address.title).toBe('Kirov')
})

test('upgrade laptop', () => {
    let user3: userWithLaptopType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'},
        laptop: {title: 'MackBook'},
    }

    const awesome = upgradeLaptopOnAcer(user3, 'Acer')

    expect(user3).not.toBe(awesome)
    expect(user3.laptop.title).toBe('MackBook')
    expect(awesome.laptop.title).toBe('Acer')
})

test('add books', () => {
    let user4: userWithBooksType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'},
        laptop: {title: 'MackBook'},
        books: ['html', 'css', 'js']
    }

    const awesome = addBooks(user4, 'ts')

    expect(user4).not.toBe(awesome)
    expect(user4.books.length).toBe(3)
    expect(awesome.books.length).toBe(4)
    expect(awesome.books[3]).toBe('ts')
})

test('upgrade books', () => {
    let user4: userWithBooksType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'},
        laptop: {title: 'MackBook'},
        books: ['html', 'css', 'js']
    }

    const awesome = upgradeBooks(user4, 'css', 'ts')

    expect(user4).not.toBe(awesome)
    expect(user4.books.length).toBe(3)
    expect(user4.books[1]).toBe('css')
    expect(awesome.books[1]).toBe('ts')

})

test('upgrade skills', () => {
    let user5: userWithSkillsType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'},
        laptop: {title: 'MackBook'},
        books: ['html', 'css', 'js'],
        level: [
            {name: 'htmlLevel', level: 50},
            {name: 'cssLevel', level: 55},
            {name: 'jsLevel', level: 40},
            {name: 'reactLevel', level: 60},
        ]
    }

    const awesome = upgradeLevel(user5, 'reactLevel', 100)

    expect(user5).not.toBe(awesome)
    expect(user5.level[3].level).toBe(60)
    expect(awesome.level[3].level).toBe(100)

})

test('remove book', () => {
    let user6: userWithSkillsType = {
        name: 'Maks',
        hair: 100,
        address: {title: 'Moscow'},
        laptop: {title: 'MackBook'},
        books: ['html', 'css', 'js'],
        level: [
            {name: 'htmlLevel', level: 50},
            {name: 'cssLevel', level: 55},
            {name: 'jsLevel', level: 40},
            {name: 'reactLevel', level: 60},
        ]
    }

    const awesome = removeBook(user6, 'css')

    expect(user6).not.toBe(awesome)
    expect(user6.books.length).toBe(3)
    expect(awesome.books.length).toBe(2)
    expect(awesome.books[0]).toBe('html')
    expect(awesome.books[1]).toBe('js')
})