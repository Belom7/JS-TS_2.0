import {cityType} from "../02_obj/02_02";
import {addMoney, message, repairHouse, toFireStaff, toHireStaff} from "./03";

let city: cityType

beforeEach(() => {
    city = {
        title: 'New York',
        houses: [
            {buildedAt: 2012, repaired: false, address: {number: 100, street: {title: 'White street'}}},
            {buildedAt: 2008, repaired: false, address: {number: 100, street: {title: 'Happy street'}}},
            {buildedAt: 2020, repaired: false, address: {number: 101, street: {title: 'Happy street'}}},
        ],
        governmentBuildings: [
            {type: 'HOSPITAL', budget: 200000, staffCount: 200, address: {street: {title : 'Central str'}}},
            {type: 'FIRE-STATION', budget: 500000, staffCount: 1000, address: {street: {title : 'South str'}}},
        ],
        citizensNumber: 100000,
    }

})

test('Budget should be changed for HOSPITAL', () => {
    addMoney(city.governmentBuildings[0],100000)

    expect(city.governmentBuildings[0].budget).toBe(300000)
})

test('Budget should be changed for FIRE-STATION', ()=> {
    addMoney(city.governmentBuildings[1],-100000)

    expect(city.governmentBuildings[1].budget).toBe(400000)
})

test('House should be repair', ()=> {
    repairHouse(city.houses[0])

    expect(city.houses[0].repaired).toBe(true)
})

test('Staff should be increased', ()=> {
    toFireStaff(city.governmentBuildings[0], 30)
    toFireStaff(city.governmentBuildings[1], 300)

    expect(city.governmentBuildings[0].staffCount).toBe(170)
    expect(city.governmentBuildings[1].staffCount).toBe(700)
})

test('Staff should be repared', ()=> {
    toHireStaff(city.governmentBuildings[0], 150)
    toHireStaff(city.governmentBuildings[1], 500)

    expect(city.governmentBuildings[0].staffCount).toBe(350)
    expect(city.governmentBuildings[1].staffCount).toBe(1500)
})

test('Greeting message should be correct for city',()=>{
    const messages = message(city.title)

    expect(messages).toBe('Hello people New York')
})