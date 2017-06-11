export class  Hero {
  // id: number;
  // name: string;

  // The TypeScript compiler generates a public field for each public constructor parameter and automatically assigns the parameter’s value to that field when you create heroes.
  constructor(
    public id: number,
    public name: string,
    public power: string,
    public alterEgo?: string // optional
  ) {  }
}
