import {studentType} from "../02_obj/02";
import {governmentBuildingsType, HouseType} from "../02_obj/02_02";



export const addSkill = (student:studentType,skill:string) => {
    student.technologies.push({id:5, title: skill})
}

export const reverseIsActive = (student:studentType) => {
    student.isActive = true
}

export const liveFromRussia = (student:studentType, country:string) => {
    return student.address.city.countryTitle === country
}

export const addMoney = (building:governmentBuildingsType, amountOfMoney:number) => {
    building.budget += amountOfMoney
}

export const repairHouse = (house:HouseType) => {
    house.repaired = true
}

export const toFireStaff = (building: governmentBuildingsType, staff: number) => {
    building.staffCount -= staff
}

export const toHireStaff = (building: governmentBuildingsType, staff: number) => {
    building.staffCount += staff
}

export const message = (city: string) => {
    return `Hello people ${city}`
}