import prismaClient from "../prisma/index.js";

interface UpdateCustomerProps {
    id: string;
    name: string;
    email: string;
}

export class UpdateCustomerService {
    async execute({ id, name, email }: UpdateCustomerProps) {
        if (!id || !name || !email) {
            throw new Error("Preencha todos os campos corretamente.");
        }

        const customer = await prismaClient.customer.update({
            where: {
                id: id
            },
            data: {
                name,
                email
            }
        });

        return customer;
    }
}