import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { AppService } from './app.service';
import { PersonModel } from './interfaces/person.interface';
import { CustomResponse } from './interfaces/response.interface';

@Controller("person")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Post()
  addPerson(@Body() body: PersonModel): CustomResponse{
    return this.appService.addPerson(body)
  }

  @Get(":id")
  getPerson(@Param("id", ParseIntPipe) id: number): CustomResponse{
    return this.appService.getPerson(id)
  }

  @Get()
  getAllPerson(): CustomResponse{
    return this.appService.getAllPerson()
  }

  @Put()
  updatePerson(@Body() body: PersonModel): CustomResponse{
    return this.appService.updatePerson(body)
  }

  @Delete(":id")
  deletePerson(@Param("id", ParseIntPipe) id: number): CustomResponse{
    return this.appService.deletePerson(id)
  }

}
