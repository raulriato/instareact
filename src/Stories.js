import Story from "./Story";

export default function Stories() {
    const stories = [{
        profile: '9gag',
        class: 'gag'
    }, {
        profile: 'barked',
        class: 'barked'
    }, {
        profile: 'filomoderna',
        class: 'filomoderna'
    }, {
        profile: 'memeriagourmet',
        class: 'memeriagourmet'
    }, {
        profile: 'meowed',
        class: 'meowed'
    }, {
        profile: 'respondeai',
        class: 'respondeai'
    }, {
        profile: 'strangeplanet',
        class: 'strangeplanet'
    }];

    return (
        <div class="stories">
            {stories.map(story => (
                <div class="story">
                    <img src="./Images/stories_background.jpg" class="story-border" alt="" />
                    <img src={`./Images/${story.profile} 1.png`} class={story.class} alt="" />
                    <h6>{story.profile}</h6>
                </div>))}
            <Story src="./Images/corinthians 1.jpeg" class="corinthians" profile="corinthians" />
            <ion-icon name="chevron-forward-circle-sharp" class="arrow"></ion-icon>
        </div>
    )
}

