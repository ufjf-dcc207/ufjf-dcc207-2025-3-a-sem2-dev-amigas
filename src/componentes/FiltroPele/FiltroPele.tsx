
import { useState } from "react";
import "./FiltroPele.css"

type TipoPontos = "oleosa" | "seca" | "mista" | "normal" | "sensivel";

const tipos: TipoPontos[] = [
    "oleosa",
    "seca",
    "mista",
    "normal",
    "sensivel"
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




    //titulo é o titulo da pergunta e nome-opcoes é o que será passado p  salvarResposta, ex:oleosidade:baixa
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


if(etapa === 1) return perguntas(
        "Quanto sua pele produz de oleosidade?",
        "oleosidade",
        ["baixa","media","alta"]
    );

    if(etapa === 2) return perguntas(
        "Como sua pele reage a produtos novos?",
        "sensibilidade",
        ["baixa","media","alta"]
    );

    if(etapa === 3) return perguntas(
        "Com que frequência aparecem espinhas?",
        "acne",
        ["baixa","media","alta"]
    );

    if(etapa === 4) return perguntas(
        "Sua pele repuxa após lavar?",
        "ressecamento",
        ["nao","leve","sim"]
    );


    if(etapa === 5){
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
        sensivel: 0
    };


    if (respostas.oleosidade === "alta") pontos.oleosa++;
    if (respostas.oleosidade === "baixa") pontos.seca++;
    if (respostas.oleosidade === "media") pontos.normal++;

    if (respostas.sensibilidade === "alta") pontos.seca++;
    if (respostas.sensibilidade === "baixa") pontos.normal++;
    if (respostas.sensibilidade === "media") pontos.mista++;

    if (respostas.zonaT === "sim") pontos.mista++;
    if (respostas.zonaT === "leve") pontos.normal++;
    if (respostas.zonaT === "nao") pontos.seca++;

    if (respostas.ressecamento === "sim") pontos.seca++;
    if (respostas.ressecamento === "leve") pontos.normal++;
    if (respostas.ressecamento === "nao") pontos.oleosa++;

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
