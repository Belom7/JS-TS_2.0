import React from "react";

test('1. Simple object', () => {
    let man = {
        name: 'John',
        age: 28
    };

    let manFullCopy = {...man}
    manFullCopy.name = 'Maks'

    expect(man).not.toBe(manFullCopy)
    expect(man.name).toBe('John')
    expect(manFullCopy.name).toBe('Maks')
})
test('2. Array of primitives', () => {
    let numbers = [1, 2, 3];
    let numbersFullCopy = [...numbers]
    numbersFullCopy[0] = 4

    expect(numbers).not.toBe(numbersFullCopy)
    expect(numbers[0]).toBe(1)
    expect(numbersFullCopy).toBe(4)
})
test('3. Object inside an object', () => {
    let man1 = {
        name: 'John',
        age: 28,
        mother: {
            name: 'Kate',
            age: 50
        }
    };

    let man1FullCopy = {...man1, mother: {...man1.mother}}
    man1FullCopy.mother.age = 51

    expect(man1).not.toBe(man1FullCopy)
    expect(man1.mother.age).toBe(50)
    expect(man1FullCopy.mother.age).toBe(51)

})
test('4. Array of primitives inside an object', () => {
    let man2 = {
        name: 'John',
        age: 28,
        friends: ["Peter", "Steven", "William"]
    };

    let man2FullCopy = {...man2, friends: [...man2.friends]}
    man2FullCopy.friends[1] = 'Maks'

    expect(man2).not.toBe(man2FullCopy)
    expect(man2.friends[1]).toBe("Steven")
    expect(man2FullCopy.friends[1]).toBe('Maks')
})
test('5 Array of objects', () => {
    let people = [
        {name: "Peter", age: 30},
        {name: "Steven", age: 32},
        {name: "William", age: 28}
    ];

    let peopleFullCopy = people.map((i) => ({...i}))
    peopleFullCopy[2].age = 38

    expect(people).not.toBe(peopleFullCopy)
    expect(people[2].age).toBe(28)
    expect(peopleFullCopy[2].age).toBe(38)
})
test('6 Array of objects inside object', () => {
    let man3 = {
        name: 'John',
        age: 28,
        friends: [
            {name: "Peter", age: 30},
            {name: "Steven", age: 32},
            {name: "William", age: 28}
        ]
    };

    let man3FullCopy = {...man3, friends: man3.friends.map(m => ({...m}))}
    man3FullCopy.friends[1].age = 35

    expect(man3).not.toBe(man3FullCopy)
    expect(man3.friends[1].age).toBe(32)
    expect(man3FullCopy.friends[1].age).toBe(35)

})
test('7 Object inside an object, inside an object', () => {
    let man4 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            }
        }
    };

    let man4FullCopy = {...man4, mother: {...man4.mother, work: {...man4.mother.work}}}
    man4FullCopy.mother.work.experience = 22

    expect(man4).not.toBe(man4FullCopy)
    expect(man4.mother.work.experience).toBe(15)
    expect(man4FullCopy.mother.work.experience).toBe(22)
})
test('8 Array of objects inside object -> object', () => {
    let man5 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {name: "Kevin", age: 80},
                {name: "Jennifer", age: 78},
            ]
        }
    };

    let man5FullCopy = {
        ...man5,
        mother: {...man5.mother, work: {...man5.mother.work}, parents: man5.mother.parents.map(m => ({...m}))}
    }
    man5FullCopy.mother.age = 51
    man5FullCopy.mother.work.experience = 21
    man5FullCopy.mother.parents[0].age = 100


    expect(man5).not.toBe(man5FullCopy)
    expect(man5.mother.age).toBe(50)
    expect(man5FullCopy.mother.age).toBe(51)
    expect(man5.mother.work.experience).toBe(15)
    expect(man5FullCopy.mother.work.experience).toBe(21)
    expect(man5.mother.parents[0].age).toBe(80)
    expect(man5FullCopy.mother.parents[0].age).toBe(100)
})
test('9 Object inside an object -> array -> object ->  object', () => {
    let man6 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht"
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi"
                    }
                },
            ]
        }
    };

    let man6FullCopy = {
        ...man6,
        mother: {
            ...man6.mother,
            work: {...man6.mother.work},
            parents: man6.mother.parents.map(m => ({...m, favoriteDish: {...m.favoriteDish}}))
        },
    }
    man6FullCopy.mother.name = 'Elena'
    man6FullCopy.mother.work.experience = 32
    man6FullCopy.mother.parents[0].name = 'SUZUKI'
    man6FullCopy.mother.parents[0].favoriteDish.title = 'escort'
    man6FullCopy.mother.parents[1].favoriteDish.title = 'baton'


    expect(man6).not.toBe(man6FullCopy)
    expect(man6.mother.name).toBe('Kate')
    expect(man6FullCopy.mother.name).toBe('Elena')
    expect(man6.mother.work.experience).toBe(15)
    expect(man6FullCopy.mother.work.experience).toBe(32)
    expect(man6.mother.parents[0].name).toBe('Kevin')
    expect(man6FullCopy.mother.parents[0].name).toBe('SUZUKI')
    expect(man6.mother.parents[0].favoriteDish.title).toBe("borscht")
    expect(man6FullCopy.mother.parents[0].favoriteDish.title).toBe('escort')
    expect(man6.mother.parents[1].favoriteDish.title).toBe("sushi")
    expect(man6FullCopy.mother.parents[1].favoriteDish.title).toBe("baton")
})
test('10 Array of objects inside an object -> object -> array -> object ->  object', () => {
    let man7 = {
        name: 'John',
        age: 28,
        mother: {
            name: "Kate",
            age: 50,
            work: {
                position: "doctor",
                experience: 15
            },
            parents: [
                {
                    name: "Kevin",
                    age: 80,
                    favoriteDish: {
                        title: "borscht",
                        ingredients: [
                            {title: "beet", amount: 3},
                            {title: "potatoes", amount: 5},
                            {title: "carrot", amount: 1},
                        ]
                    }
                },
                {
                    name: "Jennifer",
                    age: 78,
                    favoriteDish: {
                        title: "sushi",
                        ingredients: [
                            {title: "fish", amount: 1},
                            {title: "rise", amount: 0.5}
                        ]
                    }
                },
            ]
        }
    };

    let man7FullCopy = {
        ...man7,
        mother: {
            ...man7.mother,
            work: {...man7.mother.work},
            parents: man7.mother.parents.map(m => ({
                ...m,
                favoriteDish: {
                    ...m.favoriteDish,
                    ingredients: m.favoriteDish.ingredients.map(m => ({...m}))
                }
            }))
        }
    }
    man7FullCopy.mother.age = 55
    man7FullCopy.mother.work.position = 'secyrity'
    man7FullCopy.mother.parents[0].age = 100
    man7FullCopy.mother.parents[0].favoriteDish.title = 'lol'
    man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].amount = 25
    man7FullCopy.mother.parents[1].name = 'Klever'
    man7FullCopy.mother.parents[1].favoriteDish.title = 'bylka'
    man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title = 'rom'


    expect(man7).not.toBe(man7FullCopy)
    expect(man7.mother.age).toBe(50)
    expect(man7FullCopy.mother.age).toBe(55)
    expect(man7.mother.work.position).toBe('doctor')
    expect(man7FullCopy.mother.work.position).toBe('secyrity')
    expect(man7.mother.parents[0].age).toBe(80)
    expect(man7FullCopy.mother.parents[0].age).toBe(100)
    expect(man7.mother.parents[0].favoriteDish.title).toBe('borscht')
    expect(man7FullCopy.mother.parents[0].favoriteDish.title).toBe('lol')
    expect(man7.mother.parents[0].favoriteDish.ingredients[1].amount).toBe(5)
    expect(man7FullCopy.mother.parents[0].favoriteDish.ingredients[1].amount).toBe(25)
    expect(man7.mother.parents[1].name).toBe('Jennifer')
    expect(man7FullCopy.mother.parents[1].name).toBe('Klever')
    expect(man7.mother.parents[1].favoriteDish.title).toBe('sushi')
    expect(man7FullCopy.mother.parents[1].favoriteDish.title).toBe('bylka')
    expect(man7.mother.parents[1].favoriteDish.ingredients[1].title).toBe('rise')
    expect(man7FullCopy.mother.parents[1].favoriteDish.ingredients[1].title).toBe('rom')
})

