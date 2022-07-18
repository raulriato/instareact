export default function Menu(){
    return (
        <div class="menu">
            <div class="logos">
                <ion-icon class="logo-instagram" name="logo-instagram"></ion-icon>
                <img src="./Images/logo.png" alt="" />
            </div>
            <input class="search-box" placeholder="Pesquisar" type="text"/>
            <div class="right-menu">
                <ion-icon class="dm" name="paper-plane-outline"></ion-icon>
                <ion-icon class="discover" name="compass-outline"></ion-icon>
                <ion-icon class="activity" name="heart-outline"></ion-icon>
                <ion-icon class="profile" name="person-outline"></ion-icon>
            </div>
        </div>
    )
}