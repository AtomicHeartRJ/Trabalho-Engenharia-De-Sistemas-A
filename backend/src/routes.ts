import { type FastifyInstance, type FastifyPluginOptions , type FastifyRequest, type FastifyReply } from "fastify"

export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions){  

    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return {ok: true }

    })


}