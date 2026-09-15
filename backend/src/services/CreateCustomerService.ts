import prismaClient from "../prisma/index.js";

interface CreateCustomerProps{
    name: string;
    email: string;
}



class CreateCustomerService{
    async execute({name, email }:CreateCustomerProps) {  //método 

        if(!name || !email){
            throw new Error("Preencha todos os campos")
        }
        const customer = await prismaClient.customer.create({
            data:{
                name,
                email,
                status: true
            }
        }) //fez o mapeamento do schema

        return{ customer }
    }
}

export { CreateCustomerService }