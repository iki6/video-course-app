import { CourseInterface } from "../interfaces/course";
import { UserInterface } from "../interfaces/user";

export class Course implements CourseInterface {
  constructor(
    public id: string,
    public title: string,
    public creationDate: Date,
    public duration: number,
    public description: string,
    public topRated?: boolean,
    public author?: UserInterface
  ) {}
}
