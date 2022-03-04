class Picture extends HTMLElement {
    connectedCallback() {
        var imageSource = this.attributes.src.value;
        this.innerHTML =    `
            <div class="col-md-4 gallery_item">
                <div class="gallery_img">
                    <img src="${imageSource}" alt=""></img>
                    <div class="hover">
                        <a class="light" href="${imageSource}"><i class="fa fa-expand"></i></a>
                    </div>
                </div>
            </div>
        `
    }
}
customElements.define('saimandir-picture', Picture);