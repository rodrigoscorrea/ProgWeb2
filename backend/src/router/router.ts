/* eslint-disable @typescript-eslint/no-unused-vars */
import express from 'express';
import {LoremIpsum} from "lorem-ipsum"
import produtoRouter from '../resources/produto/produto.router'

const router = express.Router();
router.use('/produto',produtoRouter);

const lorem = new LoremIpsum({
    sentencesPerParagraph: {
      max: 8,
      min: 4
    },
    wordsPerSentence: {
      max: 16,
      min: 4
    },
    
  });
  
router.get('/', (req, res) => {
    res.send('Página principal do site');
});

router.get('/bemvindo/:nome', (req, res) => {
    const nome = req.params.nome
    res.send(`Bem-vindo(a) ${nome}`);
});

router.get('/lorem/:num', (req,res) => {
    const num = parseInt(req.params.num)
    res.send(lorem.generateParagraphs(num).replace(/\n/g,"<br><br>\n"))
})


export default router;