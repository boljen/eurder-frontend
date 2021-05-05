
export interface ItemTypeData {
    name: string;
    price: number;
    description: string;
}

export interface ItemType extends ItemTypeData {
    id: string;
}

export enum RestockUrgency {
    STOCK_LOW="STOCK_LOW",
    STOCK_MEDIUM="STOCK_MEDIUM",
    STOCK_HIGH="STOCK_HIGH"
}

export interface StockRecord {
    stockAmount: number;
    urgency: RestockUrgency;
    item: ItemType;
}

export enum ItemState {
    PRISTINE= "PRISTINE",
    SLIGHTLY_DAMAGED="SLIGHTLY_DAMAGED",
    DAMAGED="DAMAGED"
}

export interface StockItem {
    id: string;
    itemState: ItemState;
    itemType: string;
}

export interface Address {
    country: string;
    city: string;
    postalCode: string;
    street: string;
    houseNumber: string;
}

export interface UserData {
    firstName: string;
    lastName: string;
    emailAddress: string;
    phoneNumber: string;
    address: Address;
}

export interface User extends UserData {
    id: string;
}

interface ItemGroupData {
    name: string;
    orderedAmount: number;
    totalPrice: number;
}

interface OrderData {
    id: string;
    totalPrice: number;
    itemGroups: ItemGroupData[];
}

export interface OrderSummary {
    totalPrice: number;
    orders: OrderData[];
}
