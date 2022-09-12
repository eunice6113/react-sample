export type Auth = {
    access_token?: string;
    token_type?: string;
    refresh_token?: string;
    expires_in?: number;
    scope?: string;
    jti?: string;
};

export type Decoded = {
    exp: number;
    user_name: string;
    authorities: string[];
    jti: string;
    client_id: string;
    scope: string[],
    organizationId: string,
    departmentId: string,
    userGroupId?: string
};
