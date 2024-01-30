import { Produto } from '../../models/Produto';
type ProdCreateDto = Pick<Produto, 'nome'|'preco'|'estoque'>;
type ProdUpdateDto = Pick<Produto, 'nome'|'preco'|'estoque'>;
export default { ProdCreateDto, ProdUpdateDto}