import {difference, multiplication, splitIntroWord, sum} from "./01";

let a:number
let b:number
let c:number

beforeEach(() => {
    a = 1
    b = 2
    c = 3
})

test('sum must be correct', ()=>{


    const result = sum(a,b)

    expect(result).toBe(50)
})

test('difference must be correct', ()=>{
    const result = difference(a,b)
    expect(result).toBe(-30)
})

test('multiplication must be correct', ()=>{
    const result = multiplication(a,b)
    expect(result).toBe(400)
})

test('the sentence should be divided into words', ()=>{
    const sentence1 = 'Hello my friends'
    const sentence2 = 'How are you ?'

    const result1 = splitIntroWord(sentence1)
    const result2 = splitIntroWord(sentence2)

    expect(result1.length).toBe(3)
    expect(result1[0]).toBe('Hello')
    expect(result1[1]).toBe('my')
    expect(result1[2]).toBe('friends')
    expect(result2.length).toBe(4)
    expect(result2[0]).toBe('How')
    expect(result2[1]).toBe('are')
    expect(result2[2]).toBe('you')
    expect(result2[3]).toBe('?')
})