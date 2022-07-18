import Story from "./Story";

export default function Stories(){
    return (
        <div class="stories">
            <Story src="./Images/9gag 1.png" class="gag" profile="9gag" />
            <Story src="./Images/barked 1.png" class="barked" profile="barked" />
            <Story src="./Images/filomoderna 1.png" class="filomoderna" profile="filomoderna" />
            <Story src="./Images/memeriagourmet 1.png" class="memeriagourmet" profile="memeria..." />
            <Story src="./Images/meowed 1.png" class="meowed" profile="meowed" />
            <Story src="./Images/nathanwpylestrangeplanet 1.png" class="strangeplanet" profile="nathanwpy..." />
            <Story src="./Images/respondeai 1.png" class="respondeai" profile="respondeai" />
            <Story src="./Images/corinthians.jpeg" class="corinthians" profile="corinthians" />
            <ion-icon name="chevron-forward-circle-sharp" class="arrow"></ion-icon>
        </div>
    )
}