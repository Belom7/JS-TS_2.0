type streetType = {
    title:string
}
type addressType = {
    number?: number
    street: streetType
}
export type HouseType = {
    buildedAt: number
    repaired: boolean
    address: addressType
}

export type governmentBuildingsType = {
    type :string
    budget:number
    staffCount:number
    address: addressType
}

export type cityType = {
    title: string
    houses: HouseType[]
    governmentBuildings: governmentBuildingsType[]
    citizensNumber: number
}