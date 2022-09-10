import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PersonModel } from './interfaces/person.interface';
import { CustomResponse } from './interfaces/response.interface';

@Injectable()
export class AppService {

  private listPerson: PersonModel[] = []

  addPerson(newPerson: PersonModel): CustomResponse{
    this.listPerson.push({
      id: this.listPerson.length,
      name: newPerson.name,
      age: newPerson.age
    })

    return {
      code: 200,
      message: "ok"
    }
  }

  getPerson(id: number): CustomResponse{
    const result = this.listPerson.filter(e => {
      return e.id === id
    })

    if(result.length < 1){
      throw new HttpException({
        code: 400,
        message: "Person doesn't exist",
      }, HttpStatus.BAD_REQUEST)
    }

    return {
      code: 200,
      message: "ok",
      payload: this.listPerson.filter(e => {
        return e.id === id
      })[0]
    }
  }

  getAllPerson(): CustomResponse{
    return {
      code: 200,
      message: "ok",
      payload: this.listPerson
    }
  }

  updatePerson(person: PersonModel): CustomResponse{
    this.listPerson.map(e => {
      if(e.id === person.id){
        e.name = person.name
        e.age = person.age
      }
    })
    return {
      code: 200,
      message: "ok"
    }
  }

  deletePerson(id: number): CustomResponse{
    const result = this.listPerson.filter(e => {
      return e.id === id
    })

    if(result.length < 1){
      throw new HttpException({
        code: 400,
        message: "Person doesn't exist",
      }, HttpStatus.BAD_REQUEST)
    }

    delete this.listPerson[id]
    return {
      code: 200,
      message: "ok"
    }
  }

}
