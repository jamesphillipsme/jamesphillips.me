export class Person {
    constructor(
        private firstName:string,
        private lastName:string
    ) {}

    get fullName():string {
        return `${this.firstName} ${this.lastName}`;
    }
}