export type User = {
    username?: string;
    departmentId?: any;
    userStatus? : string
    role?: string;
    email?: string;
    initialYn? : boolean;
    resignedDate? : Date;
    readonly createdDate?: Date;
    readonly updatedDate?: Date;
}

