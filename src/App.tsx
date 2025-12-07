import "./App.css";
import SkinCare, { type SkinCareProps } from "./componentes/SkinCare/SkinCare";


const listaSkincare: SkinCareProps[] = [
  {
    pele: {
      tipo: "Mista",
      adversidade:
        "Oleosidade na zona T (testa, nariz e queixo) e ressecamento nas bochechas; poros dilatados na zona T.",
      status:
        "Equilíbrio entre áreas oleosas e secas; precisa de cuidados específicos para cada região.",
    },
    produto:[ {etapa: "LIMPEZA", item: "Gel de limpeza equilibrante: remove o excesso de sebo na zona T sem ressecar as bochechas" },
            {etapa: "HIDRATAÇÃO", item: "Hidratante leve com ácido hialurônico — mantém a pele hidratada nas áreas secas e controla o brilho na zona T" },
            {etapa: "TRATAMENTO", item: "Sérum com niacinamida — ajuda a equilibrar a produção de sebo e suavizar poros" }]
  },
  {
    pele: {
      tipo: "Oleosa",
      adversidade:
        "Excesso de brilho, acne, cravos, poros dilatados, tendência à inflamação.",
      status:
        "Produz mais sebo que o necessário; aparência brilhante; textura espessa.",
    },
    produto: [ {etapa: "LIMPEZA", item: "Um gel ou espuma de limpeza que remova excesso de oleosidade sem ressecar demais" },
            {etapa: "HIDRATAÇÃO", item: "Gel hidratante oil-free — leve, de rápida absorção e sem sensação pegajosa" },
            {etapa: "TRATAMENTO", item: "Sérum com zinco ou ácido glicólico — reduz cravos e melhora a textura da pele." }]
  },
  {
    pele: {
      tipo: "Seca",
      adversidade:
        "Ressecamento, descamação, coceira, sensibilidade, sensação de repuxamento.",
      status: "Baixa produção de oleosidade; toque áspero; aparência opaca.",
    },
    produto:[ {etapa: "LIMPEZA", item: "Loção ou leite de limpeza — remove impurezas sem retirar a hidratação natural." },
            {etapa: "HIDRATAÇÃO", item: "Creme com ceramidas e ácido hialurônico — restaura a barreira cutânea e nutre profundamente." },
            {etapa: "TRATAMENTO", item: "Máscara nutritiva ou sérum com pantenol — combate o ressecamento e melhora o conforto da pele." }]
  },
  {
    pele: {
      tipo: "Normal",
      adversidade:
        "Raras imperfeições; leve ressecamento em clima seco; poros pouco visíveis.",
      status: "Equilibrada — nem seca nem oleosa; textura macia e viçosa.",
    },
    produto:  [ {etapa: "LIMPEZA", item: "Gel suave — limpa sem agredir e mantém o equilíbrio natural da pele." },
            {etapa: "HIDRATAÇÃO", item: "Creme leve com vitaminas — mantém a maciez e o viço natural." },
            {etapa: "TRATAMENTO", item: "Sérum antioxidante — previne sinais de idade e mantém o brilho saudável." }]
  },
  {
    pele: {
      tipo: "Sensível",
      adversidade:
        "Vermelhidão, ardor, coceira, irritações com produtos ou clima; rosácea em alguns casos.",
      status:
        "Pele reativa; barreira cutânea mais fina; exige produtos suaves e calmantes.",
    },
    produto: [ {etapa: "LIMPEZA", item: "Espuma ou loção calmante — sem fragrância, para evitar irritações." },
            {etapa: "HIDRATAÇÃO", item: "Hidratante calmante com aloe vera ou aveia — fortalece a barreira da pele e reduz a vermelhidão." },
            {etapa: "TRATAMENTO", item: "Sérum com niacinamida e ceramidas — repara e acalma a pele sensível e reativa." }]
  },
];


function App() {
  return (
    <div className="App">
      <h1 className="titulo">Produtos de skin care para cada tipo de pele</h1>
      <h2 className="subtitulo">Tipos de pele:</h2>

      <main className="SkincaresCtn">

        {listaSkincare.map((item, index) => (
                <SkinCare key={index} produto={item.produto} pele={item.pele} />
              ))}
      </main> 

     
    </div>
  );
}

export default App;
