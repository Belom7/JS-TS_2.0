import {ManType} from "./Destructing_07";

let man:ManType;

beforeEach(()=>{
    man = {
        name:'Maks',
        age:30,
        lessons: [
            {title:'1'},
            {title:'2'}
        ],
        address:{
            street:{
                title: 'Lenina'
            }
        }
    }
})

test('destructing obj',()=>{
    // const age = man.age
    const {age,name,lessons } = man
    const {title} = man.address.street

    expect(age).toBe(30)
    expect(name).toBe('Maks')
    expect(lessons.length).toBe(2)
    expect(title).toBe('Lenina')


})

test('destructing arr',()=>{
    const ls1 = man.lessons[0]
    const ls2 = man.lessons[1]

    const [ ,lss2] = man.lessons

    expect(ls1.title).toBe('1')
    expect(ls2.title).toBe('2')

    expect(lss2.title).toBe('2')
})