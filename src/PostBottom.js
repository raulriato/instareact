export default function PostBottom(props){
    return (
        <div class="post-bottom">
            <div class="icons">
                <div class="icons-left">
                    <ion-icon class="like" name="heart-outline"></ion-icon>
                    <ion-icon class="comment" name="chatbubble-outline"></ion-icon>
                    <ion-icon class="dm" name="paper-plane-outline"></ion-icon>
                </div>
                <ion-icon name="bookmark-outline" class="bookmark"></ion-icon>
            </div>
            <div class="liked">
                <img src={props.img} class="liked-profile" alt="" />
                <h4>Curtido por <strong>{props.profile}</strong> e <strong>outras 453.907 pessoas</strong> </h4>
            </div>
            
        </div>
    )
}