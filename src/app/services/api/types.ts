export interface Customer {
    id: string;
    firstname: string;
    lastname: string;
}


export interface Address {
    country: string;
    postalCode: string;
    streetName: string;
    houseNumber: string;
}
export interface Email {
    complete: string;
    domain: string;
    localPart: string;
}

export interface PhoneNumber {
    countryCallingCode: string;
    number: string;
}

export interface CustomerData {
    address: Address;
    email: Email;
    firstname: string;
    lastname: string;
    phoneNumber: PhoneNumber;
}

export interface CustomerDetails extends CustomerData {
    id: string;
}

export enum StockUrgency {
    STOCK_HIGH="STOCK_HIGH",
    STOCK_MEDIUM="STOCK_MEDIUM",
    STOCK_LOW="STOCK_LOW",
}

export interface ItemData {
    amountOfStock: number;
    description: string;
    name: string;
    price: number;
}

export interface ItemDetails extends ItemData {
    id: string;
    stockUrgency: StockUrgency;
}

export interface ItemGroup {
    itemId: string;
    orderedAmount: number;
}

export interface OrderDetails {
    orderId: string;
    address: Address;
    itemGroups: ItemGroup[];
}

export interface CreateOrderRequest {
    customerId: string;
    itemGroups: ItemGroup[];
}

export interface CreateOrderResponse {
    orderId: string;
    totalPrice: number;
}

export interface ItemGroupOrderDetails extends ItemGroup {
    name: string;
    totalPrice: number;
}

export interface CustomerOrderDetails {
    orderId: string;
    itemGroups: ItemGroupOrderDetails[];
}

export interface CustomerOrderReport {
    totalPriceOfAllOrders: number;
    orders: CustomerOrderDetails[];
}
