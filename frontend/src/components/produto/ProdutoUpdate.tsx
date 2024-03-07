import api from "@/utils/api";
import { useRouter } from "next/router";
import ProdutoForm from "./ProdutoForm";
import { UpdateProdutoDto } from "@/types/produto";
import { useEffect, useState } from "react";
import { Produto } from "@/types/produto";

interface Props{
    id: string
}
function ProdutoUpdate({id}:Props){
    const [produto, setProduto] = useState<Produto>();
    const router = useRouter();
    useEffect(()=>{
        api.get(`/produto/${id}`).then((data) => {setProduto(data.data)}).catch(err => console.log(err));
    },[id]);

    const handleSubmit = (produto: UpdateProdutoDto) => {
        api.put(`/produto/${id}`, produto).then(() => {router.push("/produto")}).catch(err => console.log(err));
    };

    if(!produto) return <>Carregando...</>
    
    return(
        <div>
            <h2>Edição de Produto</h2>
            <ProdutoForm handleSubmit={handleSubmit} produto={produto}/>
        </div>
    )
}

export default ProdutoUpdate;