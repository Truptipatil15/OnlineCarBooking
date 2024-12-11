import { createConnection } from "mysql2";

export function createConnectionObject()
{
    const connectionObject=createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database:'cdacmumbai'
    });
    return connectionObject;
}

export function establishConnection()
{
    createConnectionObject().connect((error)=>
    {
    if(error)
    {
        console.log(error);
    }
    else{
        console.log("Connected to Database");
    }
  });
}