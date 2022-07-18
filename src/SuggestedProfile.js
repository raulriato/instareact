export default function SuggestedProfile(props){
    return (
        <div class="suggested-profile">
            <img src={props.src} class="fy-user-pic" />
            <div class="user">
                <h5><strong>{props.user}</strong></h5>
                <h6 class="light-text">{props.msg}</h6>
            </div>
        </div>
    )
}