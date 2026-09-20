import Fastify, { errorCodes } from 'fastify';
import { routes } from './routes.js';
import cors from '@fastify/cors';


const app = Fastify({logger: true})

app.setErrorHandler((error: Error, request, reply) => {
    reply.code(400).send({message: error.message})
})


const start = async () => { 

    await app.register(cors)
    await app.register(routes);

    try{    
        await app.listen({ port: 3333 })

    }catch(err){
     process.exit(1)

    }
}

start();