import Stories from "./Stories";
import Post from "./Post";

export default function Feed(){
    return (
        <div class="feed">
            <Stories />
            <Post post="post" profile="meowed" profileImg="./Images/meowed 1.png" img="./Images/gato-telefone 1.png" likedImg="./Images/respondeai 1.png" likedProfile="respondeai" />
            <Post post="post" profile="corinthians" profileImg="./Images/corinthians.jpeg" img="./Images/vitor-pereira.jpg" likedImg="./Images/Raul.jpg" likedProfile="você" />
            <Post post="post" profile="barked" profileImg="./Images/barked 1.png" img="./Images/dog 1.png" likedImg="./Images/meowed 1.png" likedProfile="meowed" />
            <Post post="post last" profile="9gag" profileImg="./Images/9gag 1.png" img="./Images/Mike.jpg" likedImg="./Images/badvibesmemes 1.png" likedProfile="bad.vibes.memes" />
        </div>
    )
}