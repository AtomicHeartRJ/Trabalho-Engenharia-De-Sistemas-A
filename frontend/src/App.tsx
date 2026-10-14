import {useEffect, useState, useRef, type FormEvent} from 'react'
import { FiTrash, FiEdit } from "react-icons/fi" 
import { api } from "./services/api"

interface CustomerProps{
    id: string;
    name: string;
    email: string;
    status: boolean;
    created_at: string;
}

export default function App() {
    const [customers, setCustomers] = useState<CustomerProps[]>([])
    const [editingCustomer, setEditingCustomer] = useState<CustomerProps | null>(null) 
    
    
    const [errors, setErrors] = useState({ name: false, email: false })

    const nameRef = useRef<HTMLInputElement | null >(null)
    const emailRef = useRef<HTMLInputElement | null >(null)
    
    useEffect(() => {
        loadCustomers();
    }, [])

    async function loadCustomers(){
        const response = await api.get("/customers")
        setCustomers(response.data);
    }

    async function handleSubmit(event: FormEvent){
        event.preventDefault();

        
        const isNameEmpty = !nameRef.current?.value;
        const isEmailEmpty = !emailRef.current?.value;

       
        if(isNameEmpty || isEmailEmpty) {
            setErrors({ name: isNameEmpty, email: isEmailEmpty });
            return;
        }

        
        setErrors({ name: false, email: false });
        
        if (editingCustomer) {
            await api.put("/customer", {
                id: editingCustomer.id,
                name: nameRef.current?.value,
                email: emailRef.current?.value
            });
            setEditingCustomer(null);
        } else {
            await api.post("/customer", {
                name: nameRef.current?.value,
                email: emailRef.current?.value
            })
        }

        loadCustomers();
        if(nameRef.current && emailRef.current) {
            nameRef.current.value = "";
            emailRef.current.value = "";
        }
    }

    async function handleDelete(id: string) {
        try{
            await api.delete("/customer", {
                params:{ id: id }
            })
            const allCustomers = customers.filter((customer) => customer.id !== id )
            setCustomers(allCustomers)
        } catch(err){
            console.log(err);
        }
    }

    function handleEdit(customer: CustomerProps) {
        if(nameRef.current && emailRef.current) {
            nameRef.current.value = customer.name;
            emailRef.current.value = customer.email;
            setEditingCustomer(customer);
            
            setErrors({ name: false, email: false });
        }
    }

    function cancelEdit() {
        setEditingCustomer(null);
        setErrors({ name: false, email: false });
        if(nameRef.current && emailRef.current) {
            nameRef.current.value = "";
            emailRef.current.value = "";
        }
    }

    return (
        <div className="w-full min-h-screen bg-gray-900 flex justify-center px-4">
             <main className="my-10 w-full md:max-w-2x">
                <h1 className="text-4x1 font-medium text-white">Clientes</h1>
              
                <form className="flex flex-col my-6" onSubmit={handleSubmit}> 
                    <label className="font-medium text-white">Nome:</label>
                    <input
                        type="text"
                        placeholder="Digite seu nome completo..."
                        
                        className={`w-full p-2 rounded ${errors.name ? "border-2 border-red-500 mb-1" : "mb-5"}`}
                        ref={nameRef}
                    />
                    
                    {errors.name && <span className="text-red-500 text-sm mb-4">O campo Nome é obrigatório.</span>}

                    <label className="font-medium text-white">Email:</label>
                    <input
                        type="text"
                        placeholder="Digite seu email..."
                        
                        className={`w-full p-2 rounded ${errors.email ? "border-2 border-red-500 mb-1" : "mb-5"}`}
                        ref={emailRef}
                    />
                    
                    {errors.email && <span className="text-red-500 text-sm mb-4">O campo Email é obrigatório.</span>}
                    
                    <div className="flex gap-2 mt-2">
                        <input 
                            type="submit" 
                            value={editingCustomer ? "Atualizar Cliente" : "Cadastrar"} 
                            className={`cursor-pointer w-full p-2 rounded font-medium text-white ${editingCustomer ? "bg-blue-500" : "bg-green-500"}`} 
                        />
                        {editingCustomer && (
                            <button type="button" onClick={cancelEdit} className="w-1/3 bg-gray-500 text-white rounded font-medium">
                                Cancelar
                            </button>
                        )}
                    </div>
                </form>

                
                <section className="flex flex-col gap-4 px-2 pt-4"> 
                    {customers.map((customer) => (
                        <article
                            key={customer.id}
                            className="w-full bg-white rounded p-2 relative hover:scale-105 duration-200"
                        >   
                            <p> <span className="font-medium ">Nome: </span> {customer.name} </p>
                            <p> <span className="font-medium ">Email: </span> {customer.email} </p>
                            <p> <span className="font-medium ">Status: </span> {customer.status ? "ATIVO" : "INATIVO"} </p>

                            
                            <button 
                                className="bg-blue-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-12 -top-2"
                                onClick={() => handleEdit(customer)}
                            > 
                                <FiEdit size={18} color="#FFF"/>
                            </button>

                           
                            <button 
                                className="bg-red-500 w-7 h-7 flex items-center justify-center rounded-lg absolute right-2 -top-2"
                                onClick={() => handleDelete(customer.id)}
                            > 
                                <FiTrash size={18} color="#FFF"/>
                            </button>
                        </article>
                    ))}
                </section>
             </main>
        </div>
    )
}