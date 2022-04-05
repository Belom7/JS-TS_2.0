import {people, transformator} from "./05";

test('transformation people', ()=>{
    const dev1 = transformator(people[0])
    const dev2 = transformator(people[1])
    const dev3 = transformator(people[2])

    expect(dev1.firstName).toBe('Iliya')
    expect(dev2.firstName).toBe('Yuriy')
    expect(dev3.firstName).toBe('Timur')
})