export default function MyProfile(props){
    return (
        <div class="my-profile">
            <img src={props.src} class="my-profile-pic" alt="" />
            <div class="user">
                <h5><strong>{props.user}</strong></h5>
                <h5 class="light-text">{props.name}</h5>
            </div>
        </div>
    )
}