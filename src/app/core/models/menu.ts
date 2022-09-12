export type Menu = {
    menuId?:string
    usingYn?:string
    sort?:number
    menuLevel?:number
    menuName?:string
    parentMenuId?:string
    routingName?:string
    iconName?:string
    readonly createdDate?:Date
    readonly updatedDate?:Date
    readonly deletedDate?:Date
    children?:Menu[]
}

