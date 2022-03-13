class BreadcrumbHeader extends HTMLElement {
    connectedCallback() {
        var pagename = this.attributes.pagename.value;
        this.innerHTML =    `
        
            <div class="container">
                <div class="page-cover text-center">
                    <h2 class="page-cover-tittle">${pagename}</h2>
                    <ol class="breadcrumb">
                        <li><a href="index.html">Home</a></li>
                        <li class="active">${pagename}</li>
                    </ol>
                </div>
            </div>
        `
    }
}
customElements.define('bread-crumb', BreadcrumbHeader);