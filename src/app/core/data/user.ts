export interface User
{
    status: number;
    data:{
        name:string;
        email:string,
        role:string,
        password:string,
        created_date:Date,
        _id:string
    }
}