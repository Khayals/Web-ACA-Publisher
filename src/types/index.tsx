export interface IDataApi {
    id: number,
    userId?: number,
    BookCategoryId?: number,
    title: string,
    description?: string,
    price: number,
    shope_link?: string,
    photo?: string,
    date_published?: string,
    BookCategory: IBookCategory,
    User: IUser
}

export interface IBookCategory {
    id: number,
    name: string
}

export interface IUser {
    id: number,
    name: string
}

export interface IBookListData {
    data: IDataApi[]
}