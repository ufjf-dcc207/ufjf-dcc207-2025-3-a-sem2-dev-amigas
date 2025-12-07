import "./Pele.css"
export type PeleProps = {
  tipo: string, 
  adversidade: string,
  status: string;
}


export default function Pele({tipo, adversidade,status}: PeleProps) {
  return (
    <div className="PeleCtn">
      <div className="TipoCtn"> {tipo}</div>
      <div> {adversidade}</div>

      
      <div> {status}</div>
    </div>
  )

}