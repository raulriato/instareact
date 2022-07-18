import About from './About';
import Copyright from './Copyright';
import ForYou from './ForYou';

export default function Sidebar(){
    return (
        <div class='sidebar'>
            <ForYou />
            <About />
            <Copyright />
        </div>
    )
}