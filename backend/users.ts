export class User {
  constructor(
    public name: string,
    public email: string,
    private password: string
  ) {}

  matches(another: User): boolean {
    return (
      another !== undefined &&
      another.email === this.email &&
      another.password === this.password
    );
  }
}

export const users: { [key: string]: User } = {
  "a@email.com": new User("Usuario A", "a@email.com", "123456"),
  "b@email.com": new User("Usuario B", "b@email.com", "123456")
};
