
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
            return (
        <div>
          <button onClick={finalizar}>Finalizar análise de pele</button>
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
                    etapa === 2 && (
                        <div>
                            <h2>Como sua pele reage a produtos novos?</h2>
                            <button onClick={() => salvarResposta("sensibilidade", "baixa")}>Quase não reage</button>
                            <button onClick={() => salvarResposta("sensibilidade", "media")}>Às vezes irrita</button>
                            <button onClick={() => salvarResposta("sensibilidade", "alta")}>Fica vermelha/sensível</button>
                        </div>
                    )
                }

                {
                    etapa === 3 && (
                        <div>

                            <h2>Com que frequência aparecem espinhas em você?</h2>
                            <button onClick={() => salvarResposta("acne", "baixa")}>Raramente</button>
                            <button onClick={() => salvarResposta("acne", "media")}>Algumas vezes</button>
                            <button onClick={() => salvarResposta("acne", "alta")}>Com frequência</button>
                        </div>
                    )
                }

                {etapa === 4 && (
                    <div>
                        <h2>Você sente sua pele repuxando após lavar o rosto?</h2>
                        <button onClick={() => salvarResposta("ressecamento", "nao")}>Não</button>
                        <button onClick={() => salvarResposta("ressecamento", "leve")}>Um pouco</button>
                        <button onClick={() => salvarResposta("ressecamento", "sim")}>Sim, repuxa</button>
                    </div>
                )
                }

                {etapa === 5 && (
                    <div>
                        <h2>Você sente brilho excessivo na zona T (testa, nariz e queixo)?</h2>
                        <button onClick={() => salvarResposta("zonaT", "nao")}>Não</button>
                        <button onClick={() => salvarResposta("zonaT", "leve")}>Um pouco</button>
                        <button onClick={() => salvarResposta("zonaT", "sim")}>Sim, bastante</button>
                    </div>
                )
                }
</div>
                

                )
            }
        }





        function finaliza(){
            
        }