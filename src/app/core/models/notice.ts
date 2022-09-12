export type Notice = {
    id: number;
    userId: string;
    organizationId: string;
    title: string;
    content: string;
    openYn: boolean;
    createdDate: Date;
    updatedDate: Date;
    deletedDate: Date;
}
