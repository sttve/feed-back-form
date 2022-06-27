import { Body, Controller, Delete, Get, Post, Put, ValidationPipe } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { PersonModel } from "src/models/person.model";
import { PersonSchema } from "src/schemas/person.schema";

@Controller('/person')
export class PersonController {
    constructor(
        @InjectRepository(PersonModel) private model: Repository<PersonModel>,
    ) {}

    @Post()
    public async create( 
        @Body() body: PersonSchema,
    ): Promise<{ data: PersonModel }>  {
        const personCreated = await this.model.save(body);
        return { data: personCreated };
    }

    @Get(':id')
    public getOne(): any {
        return { data: 'Get One !!!' };
    }
    @Get()

    public async getAll(): Promise<{ data: PersonModel[] }> {
        const list = await this.model.find();
        return { data: list };
    }

    @Put(':id')
    public update(): any {
        return { data: 'Update !!!' };
    } 
    @Delete(':id')
    public delete(): any {
        return { data: 'Delete !!!' };
    }
} 

function body() {
    throw new Error("Function not implemented.");
}
