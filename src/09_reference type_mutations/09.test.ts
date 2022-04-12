type UserType = {
    name:string
    age:number
}

let user = {
    name: 'Maks',
    age: 30,
}

const updateAge = (user:UserType) => {
    user.age++
}

test('reference type test', () => {

    updateAge(user)

    expect(user.age).toBe(31)

    let superman = user
    superman.age=1000

    expect(user.age).toBe(1000)
})