
export default function FiltroPele() {
    const [etapa, setEtapa] = useState(1);
    const [respostas, setRespostas] = useState({});
    const [resultado, setResultado] = useState(null);


    function salvarResposta(pergunta, valor) {
        setRespostas(prev => ({ ...prev, [pergunta]: valor }));
        setEtapa(etapa + 1);
    }

    function perguntas() {
        if (etapa === 5) {
            console.log("Teste finalizado!");
            return (
                <div>
                    <h2>Resultado final aqui</h2>
                </div>
            );
        }


        return (
            <div>
                {
                    etapa === 1 && (
                        <div>
                            <h2>Quanto sua pele produz de oleosidade?</h2>
                            <button onClick={() => salvarResposta("oleosidade", "baixa")}>Baixa</button>
                            <button onClick={() => salvarResposta("oleosidade", "media")}>Média</button>
                            <button onClick={() => salvarResposta("oleosidade", "alta")}>Alta</button>
                        </div>
                        
        )
    }
    {
        etapa===2 && (
             <div>
          <h2>Como sua pele reage a produtos novos?</h2>
          <button onClick={() => salvarResposta("sensibilidade", "baixa")}>Quase não reage</button>
          <button onClick={() => salvarResposta("sensibilidade", "media")}>Às vezes irrita</button>
          <button onClick={() => salvarResposta("sensibilidade", "alta")}>Fica vermelha/sensível</button>
        </div>
        )
    }
          
       {
        etapa===3 &&(
            <div>

             <h2>Com que frequência aparecem espinhas em você?</h2>
          <button onClick={() => salvarResposta("acne", "baixa")}>Raramente</button>
          <button onClick={() => salvarResposta("acne", "media")}>Algumas vezes</button>
          <button onClick={() => salvarResposta("acne", "alta")}>Com frequência</button>
          </div>
        )
       }
       
       
        )


}