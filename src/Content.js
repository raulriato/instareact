import Sidebar from "./Sidebar";
import Feed from "./Feed";

export default function Content(){
    return (
        <div class="content">
            <Feed />
            <Sidebar />
        </div>
    )
}