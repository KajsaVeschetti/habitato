const questions = [

    {
      question: "En vuxen svensk släpper årligen i genomsnitt ut 4400 kg växthusgaser. Hur mycket släpper en flygresa t.o.r Thailand ut per person?",
      correct_answer: "5 700 kg koldioxid",
      incorrect_answer: ["8 800 kg koldioxid", "6 500 kg koldioxid","5 700 kg koldioxid"],
      questionId: "001"
    },
    {
      question: "Hur många jordklot skulle behövas om alla levde som medelsvensken??",
      correct_answer: "3",
      incorrect_answer: ["3", "2", "4"],
      questionId: "002"

    },
    {
      question: "Vad är konsekvensen av den förstärkta växthuseffekten?",
      correct_answer: "Temperaturen stiger",
      incorrect_answer: ["Temperaturen är oförändrad", "Temperaturen stiger", "Temperaturen sjunker"],
      questionId: "003"

    },
    {
      question: "Förnybar energi ses som miljövänligt alternativ till fossila bränslen. Vad av följande är en förnybar energikälla?",
      correct_answer: "Solkraft",
      incorrect_answer: ["Solkraft", "Kolkraft", "Kärnkraft"],
      questionId: "004"

    },
    {
      question: "Palmolja framställs i huvudsak ur palmodlingar på skövlad regnskogsmark. Vad är den vanligaste innehållsbeteckningen för palmolja?",
      correct_answer: "Vegatabiliskt fett",
      incorrect_answer: ["Vegatabiliskt fett", "Palmolja", "Anges ej"],
      questionId: "005"

    },
    {
      question: "Hur mycket skulle havsnivån stiga om alla glaciärer smälter?",
      correct_answer: "120 meter",
      incorrect_answer: ["75 meter","120 meter", "170 meter"],
      questionId: "006"

    },
    {
      question: "Vilket av följande är klimatsmart?",
      correct_answer: "Shoppa mindre",
      incorrect_answer: ["Äta kött", "Flyga", "Shoppa mindre"],
      questionId: "007"

    },
    {
      question: "Varför stiger havsnivåerna?",
      correct_answer: "Varmare klimat",
      incorrect_answer: ["Kallare klimat", "Fuktigare klimat", "Varmare klimat"],
      questionId: "008"

    },
    {
      question: "Vad brukar betraktas som jordens kylskåp?",
      correct_answer: "Arktis",
      incorrect_answer: ["Antarktis", "Arktis", "Anatarktis"],
      iquestionIdd: "009"

    },
    {
      question: "Vilket av följande länder släpper ut mest koldioxid per invånare?",
      correct_answer: "Finland",
      incorrect_answer: ["Kina", "Finland", "Sverige"],
      questionId: "010"

    },
]
export function getQuestions(){
    return questions;
}