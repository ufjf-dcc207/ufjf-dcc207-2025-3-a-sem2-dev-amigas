
export default function FiltroPele(){
cconst [etapa, setEtapa] = useState(1);
  const [respostas, setRespostas] = useState({});
  const [resultado, setResultado] = useState(null);


function salvarResposta(pergunta, valor) {
    setRespostas(prev => ({ ...prev, [pergunta]: valor }));
    setEtapa(etapa + 1);
  }

function perguntas{
    return(
if (etapa === 5){
    console.log("Teste finalizado!");
} 
    )
}
}