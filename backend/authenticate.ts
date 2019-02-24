import { Request, Response } from "express";
import { User, users } from './users';
import * as jwt from 'jsonwebtoken';
import { API_CONFIG } from './api-config';

export const authenticate = (req: Request, resp: Response) => {
    const user: User = req.body;
    if (isValid(user)) {
        const dbUser = users[user.email];
        const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, API_CONFIG.secret);
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    } else {
        resp.status(403).json({ message: 'Dados inválidos.' });
    }
};

function isValid(user: User) {
    if (!user) {
        return false;
    }
    const dbUser = users[user.email];
    return dbUser !== undefined && dbUser.matches(user)
}