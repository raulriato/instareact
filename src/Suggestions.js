import SuggestedProfile from "./SuggestedProfile";

export default function Suggestions(){
    return (
        <div class="suggestions">
            <h5 class="light-text"><strong>Sugestões para você</strong></h5>
            <SuggestedProfile src="./Images/badvibesmemes 1.png" user="bad.vibes.memes" msg="Novo no Instagram" />
            <SuggestedProfile src="./Images/smallcutecats 1.png" user="smallcutecats" msg="Seguido por driven.education" />
            <SuggestedProfile src="./Images/razoesparaacreditar 1.png" user="razoesparaacreditar" msg="Seguido por marianesl e mais 1" />
            <SuggestedProfile src="./Images/adorableanimals 1.png" user="adorable_animals" msg="Segue você" />
            <SuggestedProfile src="./Images/chibirdart 1.png" user="chibirdart" msg="Seguido por marianesl" />
        </div>
    )
}