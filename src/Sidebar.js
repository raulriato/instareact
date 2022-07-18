import About from './About';
import Copyright from './Copyright';
import ForYou from './ForYou';
import MyProfile from './MyProfile';

export default function Sidebar(){
    return (
        <div class='sidebar'>
            <MyProfile />
            <ForYou />
            <About />
            <Copyright />
        </div>
    )
}