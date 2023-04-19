export interface Item {
    id: number,
    name: string,
    price: number,
    included?: Item[]
    isPackage?: string
}