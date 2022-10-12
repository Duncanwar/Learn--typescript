interface UserInterface{
  name: string;
  age?: number;
  getMessage(): string;
}

const user: UserInterface= {
  name: "MOns",
  getMessage() {
    return "Hello" + name;
}
}
console.log(user.getMessage());