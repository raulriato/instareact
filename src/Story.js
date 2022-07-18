export default function Story(props){
    return (
        <div class="story">
            <img src="Images/stories_background.jpg" class="story-border" alt="" />
            <img src={props.src} class={props.class} alt="" />
            <h6>{props.profile}</h6>
        </div>
    )
}