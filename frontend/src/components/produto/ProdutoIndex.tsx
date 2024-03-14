/* eslint-disable react/jsx-key */
import styles from "./produto.module.css";
import Link from "next/link";
import api from "@/utils/api";
import { useEffect, useState } from "react";
import {Produto} from "@/types/produto";
import { Button } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
function ProdutoIndex() {
  const [produtos, setProdutos] = useState<Produto[]>([]);
  
  useEffect(() => {
    api.get("/produto", {withCredentials: true}).then((data)=>{
        setProdutos(data.data);
    });
  }, []);

  return (
    <div>
        <div>
            <h1 style={{marginTop: 0}}>Produtos</h1>
            <Button component = {Link} href = "/produto/create" variant = "contained">
                <AddIcon></AddIcon>
            </Button>
        </div>
      
      <ul className={styles.listaProdutos}>
          {produtos.map((produto) => <li key={produto.id}>
            <Link href={`/produto/${produto.id}`}>{produto.nome}</Link>
          </li>)} 
      </ul> 
    </div>
  );
}

export default ProdutoIndex
