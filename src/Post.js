import PostTop from "./PostTop";
import PostBottom from "./PostBottom";

export default function Post(props){
    return (
        <div class={props.post}>
            <PostTop profile={props.profile} img={props.profileImg} />
            <img src={props.img} class="post-img" alt="" />
            <PostBottom img={props.likedImg} profile={props.likedProfile} />
        </div>
    )
}