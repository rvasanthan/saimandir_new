    class NavLogo extends HTMLElement {
        connectedCallback() {

            this.innerHTML =    `
            
            <nav class="navbar navbar-expand-lg navbar-light bg_white">
            <div class="container">                                  
                <div class="row">
                    <div class="span4">
                        <div class="clearfix content-heading">
                            <a class="navbar-brand logo_h" href="index.html" >
                                <img class="pull-left saimandirlogo" src="https://res.cloudinary.com/abhinithame/image/upload/v1647007768/Saimandir/assets/sai_transparent.png" alt="" >
                                <h3 id="logotext" class="logo_text">Sri Shirdi Sai Mandir</h3>
                            </a>
                        </div>
                    </div>
                </div>

                <button class="navbar-toggler sandwich-icon" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>
                <main-menu></main-menu>
            </div>
            <!-- commenting -->
        </nav>
            `
        }
    }
    customElements.define('bread-logo', NavLogo);
