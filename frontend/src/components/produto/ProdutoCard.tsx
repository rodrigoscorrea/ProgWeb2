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

import {useState, useEffect} from 'react';

interface ProdutoCardProps{
    produto:Produto;
}

export default function ProdutoCard({produto}: ProdutoCardProps) {

    const [quantidade, setQuantidade] = useState(0);
    const [precoTotal, setPrecoTotal] = useState(quantidade * produto.preco);

    useEffect(() => {
        setPrecoTotal(quantidade * produto.preco);
    }, [quantidade]);

    const increaseQtd = () => {
        if(quantidade < produto.estoque) {
            setQuantidade(quantidade + 1);
        }
    }

    const decreaseQtd = () => {
        if(quantidade >= 1) {
            setQuantidade(quantidade - 1);
        }
    }
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
      
    </Card>
  );
}