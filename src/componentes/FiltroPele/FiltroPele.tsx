
import { useState } from "react";
import "./FiltroPele.css"

type TipoPontos = "oleosa" | "seca" | "mista" | "normal" | "sensivel"| "maduras";

const tipos: TipoPontos[] = [
    "oleosa",
    "seca",
    "mista",
    "normal",
    "sensivel",
    "madura"
];
export default function FiltroPele() {
    const [etapa, setEtapa] = useState(1);
   const [respostas, setRespostas] = useState<{[key: string]: string}>({});
    const [resultado, setResultado] = useState<TipoPontos | null>(null);


    function salvarResposta(pergunta: string, valor: string) {
        setRespostas(prev => ({ ...prev, [pergunta]: valor }));
        if(etapa<5){
        setEtapa(etapa + 1);
        }
    }




   
    function perguntas(titulo: string, nome: string, opcoes: string[]) {

return(
        <div className="box">
            <h3>{titulo}</h3>


            {opcoes.map(op => (
            <div
        key={op}
        className={"item " + (respostas[nome] === op ? "ativo" : "")}
        onClick={() => salvarResposta(nome, op)}
    >

        <span className="check">
            {respostas[nome] === op && "✓"}
            </span>
            <span>{op}</span>
            </div> 
        ))
    }
</div>
    );
}

if(etapa == 1) return perguntas(
    "Quais suas principais preocupações?",
    "madura",
    ["manchas", "falta de viço", "cravos/espinhas","rugas/linhas finas"])


if(etapa === 2) return perguntas(
        "Qual é o grau de oleosidade da sua pele?",
        "oleosidade",
        ["baixa","média","alta"]
    );

    if(etapa === 3) return perguntas(
        "Qual é a sensibilidade da sua pele?",
        "sensibilidade",
        ["baixa","média","alta"]
    );

    if(etapa === 4) return perguntas(
        "Com que frequência surgem espinhas na sua pele?",
        "acne",
        ["baixa","média","alta"]
    );

    if(etapa === 5) return perguntas(
        "Sua pele repuxa após lavar?",
        "ressecamento",
        ["não","leve","sim"]
    );


    if(etapa === 6){
        return (
            <div className="box">

                {perguntas(
                    "Brilho na Zona T?",
                    "zonaT",
                    ["nao","leve","sim"]
                )}

                <button onClick={finaliza}>
                    Finalizar análise
                </button>

            </div>
        );
    }





function finaliza() {
    
 let pontos: any = {
        oleosa: 0,
        seca: 0,
        mista: 0,
        normal: 0,
        sensivel: 0,
        madura: 0
    };


    if (respostas.madura === "Rugas/Linhas Finas") pontos.madura++;
    if (respostas.madura === "alta","media") pontos.madura++;
    if (respostas.madura === "baixa") pontos.madura++;
    if (respostas.madura === "Não") pontos.madura++;

    if (respostas.oleosidade === "Cravos/Espinhas") pontos.oleosa++;
    if (respostas.oleosidade === "alta") pontos.oleosa++;
    if (respostas.oleosidade === "baixa") pontos.seca++;
    if (respostas.oleosidade === "media") pontos.normal++;

    if (respostas.sensibilidade === "Falta de Viço") pontos.seca++;
    if (respostas.sensibilidade === "alta") pontos.seca++;
    if (respostas.sensibilidade === "baixa") pontos.normal++;
    if (respostas.sensibilidade === "media") pontos.mista++;

    if (respostas.zonaT === "Manchas") pontos.oleosa++;
    if (respostas.zonaT === "sim") pontos.mista++;
    if (respostas.zonaT === "leve") pontos.normal++;
    if (respostas.zonaT === "nao") pontos.seca++;

    if (respostas.ressecamento === "Falta de Viço") pontos.seca++;
    if (respostas.ressecamento === "sim") pontos.seca++;
    if (respostas.ressecamento === "leve") pontos.normal++;
    if (respostas.ressecamento === "nao") pontos.oleosa++;

    if (respostas.acne === "Cravos/Espinhas") pontos.oleosa++;
    if (respostas.acne === "alta") pontos.oleosa++;
    if (respostas.acne === "media") pontos.mista++;
    if (respostas.acne === "baixa") pontos.normal++;







 let tipoFinal: TipoPontos = "oleosa";

for (const t of tipos) {
    if (pontos[t] > pontos[tipoFinal]) {
        tipoFinal = t;
    }
}

 setResultado(tipoFinal);
    setEtapa(0);
    setRespostas({});
    
}
  if (resultado) {
        return (
            <div className="box">
                <div className="resultado">
                Seu tipo de pele é: {resultado}!
                Descubra abaixo os cuidados indicados para ela:
            </div>
            </div>
        );
    }

}
