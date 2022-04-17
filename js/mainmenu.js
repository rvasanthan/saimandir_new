class MainMenu extends HTMLElement {
    connectedCallback() {
        this.innerHTML =    `
        <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#about">Our Temple</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#services">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#events">Events</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#faq">FAQ</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#donation">Donate</a></li>
                <li class="nav-item submenu dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a class="nav-link" href="ugadhi.html">Ugadi 2022</a></li>
                        <li class="nav-item"><a class="nav-link" href="ramnavami.html">Sri Rama Navami</a></li>
                        <li class="nav-item"><a class="nav-link" href="day1.html">Sai Samasthan Day One</a></li>
                        <li class="nav-item"><a class="nav-link" href="sankranthi.html">Sankranthi</a></li>
                        <li class="nav-item"><a class="nav-link" href="sita-rama.html">Sri Sita Rama Kalyanam</a></li>
                        <li class="nav-item"><a class="nav-link" href="sivaratri.html">Maha Sivaratri</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="index.html#contact">Contact</a></li>
            </ul>
        </div>
        `
    }
}
customElements.define('main-menu', MainMenu);