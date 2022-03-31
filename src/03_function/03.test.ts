import {studentType} from "../02_obj/02";
import {addSkill, liveFromRussia, reverseIsActive} from "./03";

let student : studentType
beforeEach(()=>{
    student = {
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
})


test('became a skill to a student', ()=>{

    addSkill(student, 'MONK')
    expect(student.technologies.length).toBe(5)
    expect(student.technologies[4].title).toBe('MONK')
})

test('reverse Is Active', ()=> {
    reverseIsActive(student)

    expect(student.isActive).toBe(false)
})

test('is from Russia ? ', ()=>{
    const result1 = liveFromRussia(student,'Russia')
    const result2 = liveFromRussia(student,'Belarus')

    expect(result1).toBe(true)
    expect(result2).toBe(false)
})