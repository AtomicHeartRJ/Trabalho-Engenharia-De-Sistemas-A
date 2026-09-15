import type { FastifyRequest , FastifyReply } from 'fastify'
import { CreateCustomerService } from '../services/CreateCustomerService.js'

class CreateCustomerController{
    async handle(request: FastifyRequest, reply:FastifyReply){   // vai receber os dois parametros e tera acesso as requisiçoes e devolver para o usuario 

        const { name, email } = request.body as { name:string , email: string };
        console.log(name);
        console.log(email);


        const customerService = new CreateCustomerService()
        const customer = await customerService.execute({ name , email});

        reply.send(customer)  //devolve para a api o que o serviço aqui recebe 

    }
}

export { CreateCustomerController }