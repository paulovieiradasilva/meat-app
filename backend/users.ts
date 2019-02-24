export class User {
    constructor(
        public name: string,
        public email: string,
        private password: string,
    ) { }

    matches(another: User): boolean {
        return another !== undefined && another.email === this.email && another.password === this.password;
    }
}

export const users: { [key: string]: User } = {
    "usuario1@email.com": new User('Usuario 01', 'usuario1@email.com', '123456'),
    "usuariow@email.com": new User('Usuario 02', 'usuario2@email.com', '123456')
};