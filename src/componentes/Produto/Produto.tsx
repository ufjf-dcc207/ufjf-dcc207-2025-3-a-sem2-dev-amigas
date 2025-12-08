import "./Produto.css"
export type ProdutoProps = {
  etapa: string,
  item: string;
}


export default function Produto({ etapa, item}: ProdutoProps) {
  return (
    <div className="ProdutoCtn">
      <div className="EtapaCtn"> {etapa}</div>
      <div> {item}</div>
    </div>
  )

}
