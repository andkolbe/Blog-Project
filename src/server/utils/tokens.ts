import * as jwt from 'jsonwebtoken';
import config from '../config';
import type { IPayload } from './types';

export const createToken = (payload: IPayload) => {
    const token = jwt.sign(payload, config.auth.secret, { expiresIn: config.auth.expires }); // json web tokens can expire themselves with no extra logic from you
    return token;
}