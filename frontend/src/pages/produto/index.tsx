/* eslint-disable react/jsx-key */
import { getAllProduto } from "@/fakeDb/produto";
import styles from "./produto.module.css";
import Link from "next/link";

export default function Home() {
  const produtos = getAllProduto();
  return (
    <div>
      <h1>Produtos</h1>
      <ul className={styles.listaProdutos}>
          {produtos.map((produto) => <li key={produto.id}>
            <Link href={`/produto/${produto.id}`}>{produto.nome}</Link>
          </li>)} 
      </ul> 
    </div>
  );
}
