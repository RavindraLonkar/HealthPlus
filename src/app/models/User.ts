import {Resource} from './Resource';

export class User extends Resource {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  salary: number;
  age: number;
  token: string;
}
