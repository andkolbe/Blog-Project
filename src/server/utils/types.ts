import { Request } from 'express'; // Request = req variable
import { TAuthors } from '../db/models';

export interface IPayload {
    userid: number;
}

export interface ReqUser extends Request {
    user?: TAuthors
}
