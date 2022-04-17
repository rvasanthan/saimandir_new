class SaiMandirHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML =    `
        <header class="header_area">
        <div class="header_top">
            <div class="container">
                <div class="row">
                    <div class="col-sm-6">
                        <div class=" d-flex">
                            <ul class="nav navbar" >
                                <li class="nav-item"><a href="https://www.google.com/maps/place/12190+Triadelphia+Rd,+Ellicott+City,+MD+21042/@39.2853213,-76.937574,898m/data=!3m2!1e3!4b1!4m5!3m4!1s0x89c826d8b561cd1d:0xa6609fead69c1866!8m2!3d39.2853172!4d-76.9353853" class="nav-link links"><i class="lnr lnr-home" style="padding-right: 2px;"></i>Ellicott City, 21042</a></li>
                                <li class="nav-item"><a href="tel:+14436367807" class="nav-link links"><i class="lnr lnr-phone-handset" style="padding-right: 2px;"></i> +1 443 636 7807</a></li>
                            </ul>
                             
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg_white">
            <div class="container">                                  
                <div class="row">
                    <div class="span4">
                        <div class="clearfix content-heading">
                            <a class="navbar-brand logo_h" href="index.html" >
                                <img class="pull-left" src="image/ShirdiSaibaba.png" alt="" style="padding-bottom: 1px;" width="120px" height="105px">
                                <h3 class="logo_text">&nbsp Sri Shirdi Sai Mandir</h3>
                            </a>
                        </div>
                    </div>
                </div>

                <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <div class="collapse navbar-collapse offset" id="navbarSupportedContent">
            <ul class="nav navbar-nav menu_nav ml-auto">
                <li class="nav-item"><a class="nav-link" href="index.html">Home</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#about">About Us</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#services">Services</a></li>
                <li class="nav-item"><a class="nav-link" href="index.html#events">Events</a></li>
                <li class="nav-item submenu dropdown">
                    <a href="#" class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Gallery</a>
                    <ul class="dropdown-menu">
                        <li class="nav-item"><a class="nav-link" href="ugadhi.html">Ugadi 2019</a></li>
                        <li class="nav-item"><a class="nav-link" href="day1.html">Sai Samasthan Day One</a></li>
                        <li class="nav-item"><a class="nav-link" href="sankranthi.html">Sankranthi</a></li>
                        <li class="nav-item"><a class="nav-link" href="sita-rama.html">Sri Sita Rama Kalyanam</a></li>
                        <li class="nav-item"><a class="nav-link" href="sita-rama.html">Sri Rama Navami Celebrations</a></li>
                    </ul>
                </li>
                <li class="nav-item"><a class="nav-link" href="#contact">Contact</a></li>
            </ul>
        </div>
            </div>
        </nav>
    </header>
        `
    }
}
customElements.define('saimandir-header', SaiMandirHeader);