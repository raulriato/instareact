import About from './About';
import Copyright from './Copyright';
import ForYou from './ForYou';
import MyProfile from './MyProfile';

export default function Sidebar(){
    return (
        <div class='sidebar'>
            <MyProfile src="./Images/Raul.jpg" user="raulriato" name="Raul Riato Silva" />
            <ForYou />
            <About />
            <Copyright />
        </div>
    )
}