type UsersType = {
    [key: string]: { id: number, name: string }
}

export let users: UsersType = { }

beforeEach(()=>{
    users = {
        '1': {id: 100, name: 'Maks'},
        '2': {id: 200, name: 'Dima'},
        '3': {id: 300, name: 'Evgen'},
        '4': {id: 400, name: 'Egor'},
    }
})

test('update username', ()=>{
    users[2].name = 'Dmitriy'

    expect(users[2].name).toBe('Dmitriy')
    expect(users[2]).toEqual({id: 200, name: 'Dmitriy'})
})

test('delete user',()=>{
    delete users[3]

    expect(users[3]).toBeUndefined()
})