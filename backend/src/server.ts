import Fastify, { errorCodes } from 'fastify';
import { routes } from './routes.js';
import cors from '@fastify/cors';


const app = Fastify({logger: true})

app.setErrorHandler((error: Error, request, reply) => {
    reply.code(400).send({message: error.message})
})


const start = async () => { 

    await app.register(cors, {
        origin: true,
        methods: ['GET', 'POST', 'PUT', 'DELETE']
    })
    await app.register(routes);

   try {    
        
        await app.listen({ 
            port: process.env.PORT ? Number(process.env.PORT) : 3333, 
            host: '0.0.0.0' 
        })
        console.log("Servidor rodando em http://localhost:3333")
    } catch(err) {
        process.exit(1)
    }
}

start();