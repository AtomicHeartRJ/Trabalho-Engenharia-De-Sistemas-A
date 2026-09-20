import { type FastifyInstance, type FastifyPluginOptions , type FastifyRequest, type FastifyReply } from "fastify"
import { request } from "node:http"
import { CreateCustomerController } from "./controllers/CreateCustomerController.js"


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){  

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true }

    })

    fastify.post("/customer", async( request: FastifyRequest, reply: FastifyReply) => { 
        return new CreateCustomerController().handle(request,reply)
    }) // criar algo, criar um novo registro na aplicaçao, por isso o post
}