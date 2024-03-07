/* eslint-disable react-hooks/exhaustive-deps */
import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {Produto} from "@/types/produto";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ButtonGroup from '@mui/material/ButtonGroup';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

import {useState, useEffect} from 'react';
import api from '@/utils/api';
import { useRouter } from 'next/router';


interface ProdutoCardProps{
    id:string;
}

export default function ProdutoCard({id}:string) {

    const [quantidade, setQuantidade] = useState(0);
    const [produto, setProduto] = useState<Produto>();
    const precoTotal = produto ? quantidade * produto.preco : 0;
    const router = useRouter();
    const handleDelete = (e:any) =>{
      e.preventDefault();
      api.delete(`/produto/${id}`).then(() => {router.push('./produto')}).catch((err) => console.log(err))
    }

    useEffect(() => {
      api.get(`/produto/${id}`).then((data)=>{
        setProduto(data.data);
      })
    }, [id]);

    const increaseQtd = () => {
        if(produto && quantidade < produto.estoque) {
            setQuantidade(quantidade + 1);
        }
    }

    const decreaseQtd = () => {
        if(quantidade >= 1) {
            setQuantidade(quantidade - 1);
        }
    }

    if(!produto) return <>Carregando...</>;
  
    return (
    <Card sx={{ maxWidth: 345 }}>
      <CardContent>
        <div style={{display:'flex', justifyContent: 'space-between'}}>
            <Typography gutterBottom variant="h5" component="div">
            {produto.nome}
            </Typography>
            <CardActions>
            <ButtonGroup variant="contained" aria-label="Basic button group">
            <Button onClick={increaseQtd} size = "small"><AddIcon></AddIcon></Button>
            <Button onClick={decreaseQtd} size = "small"><RemoveIcon></RemoveIcon></Button>
            </ButtonGroup>
            </CardActions>
        </div>
        
        <Typography variant="body2" color="text.secondary">
          Preço: {produto.preco}<br />
          Estoque:{produto.estoque} <br/>
          Quantidade: {quantidade} <br/>
          Valor total: {precoTotal} <br/>
        </Typography>
      </CardContent>
      <CardActions>
        <IconButton component={Link} href={`/produto/update/${id}`}>
          <EditIcon/>
        </IconButton>
        <IconButton component={Link}>
          <DeleteIcon />
        </IconButton>
      </CardActions>
      
    </Card>
  );
}