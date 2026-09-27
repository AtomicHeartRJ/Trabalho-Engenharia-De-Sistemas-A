import prismaClient from "../prisma/index.js";

interface DeleteCustomerProps{
    id: String;
}

class DeleteCustomerService{
    async execute({ id }: DeletCustomerProps ){

        if(!id){
            throw new Error("Solicitação inválida. ")
        }
        
        const findCustomer = await prismaClient.customer.findFirst({
            where:{
                id: id 
            }
        })


        if(!findCustomer){
            throw new Error("CLiente não existe!")

        }
        await prismaClient.customer.delete({
            where:{
                id: findCustomer.id

            }    
        })

        return{message: "Deletado com sucesso!" }

    }

}

export { DeleteCustomerService }