import Stories from "./Stories";
import Post from "./Post";

export default function Feed(){
    const posts = [{
        class: 'post',
        profile: 'meowed',
        profileImg: './Images/meowed 1.png',
        img: "./Images/gato-telefone 1.png",
        likedImg: "./Images/respondeai 1.png",
        likedProfile: "respondeai"
    }, {
        class: 'post',
        profile: 'corinthians',
        profileImg: './Images/corinthians.jpeg',
        img: "./Images/vitor-pereira.jpg",
        likedImg: "./Images/Raul.jpg",
        likedProfile: "você"
    }, {
        class: 'post',
        profile: 'barked',
        profileImg: './Images/barked 1.png',
        img: "./Images/dog 1.png",
        likedImg: "./Images/meowed 1.png",
        likedProfile: "meowed"
    }, {
        class: 'post last',
        profile: '9gag',
        profileImg: './Images/9gag 1.png',
        img: "./Images/Mike.jpg",
        likedImg: "./Images/badvibesmemes 1.png",
        likedProfile: "bad.vibes.memes"
    }]
    return (
        <div class="feed">
            <Stories />
            {posts.map(post => (<Post post={post.class} 
            profile={post.profile}
            profileImg={post.profileImg}
            img={post.img}
            likedImg={post.likedImg} 
            likedProfile={post.likedProfile} />))}
        </div>
    )
}