export interface IItem {
    id: number,
    category: string,
    productName: string,
    productPrice: number,
    description: string,
    isOff: boolean,
    offPercentage?: number,
    productImage: any,
    isAvailable: boolean,
    productImageList: any[],
}