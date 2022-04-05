import {age, curses} from "./04";

test('should return people over 90 years old',()=>{

    const oldMan = age.filter(f=>f>90)

    expect(oldMan.length).toBe(1)
    expect(oldMan[0]).toBe(100)
})

test('courses cheaper than 170',()=>{
    const filterCurses = curses.filter(f=>f.price<170)

    expect(filterCurses.length).toBe(2)
    expect(filterCurses[0].price).toBe(100)
    expect(filterCurses[1].price).toBe(150)
})