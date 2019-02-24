import { Request, Response } from "express";
import { User, users } from './users';
import * as jwt from 'jsonwebtoken';

export const authenticate = (req: Request, resp: Response) => {
    const user: User = req.body;
    if (isValid(user)) {
        const dbUser: User = users[user.email];
        const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, 'secrety-key-app');
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