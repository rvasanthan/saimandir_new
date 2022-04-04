class SaiMandirEvent extends HTMLElement {
    connectedCallback() {
        var title = this.attributes.title.value;
        var schedule = this.attributes.schedule.value;
        var location = this.attributes.location.value;
        var maps = this.attributes.maps.value;
        var town = this.attributes.town.value;
        var conf = this.attributes.conf.value;
        var imgsrc = this.attributes.imgsrc.value;
        this.innerHTML =    `
            <div class="col-md-6">
                    <div class="event_post">
                        <img src="${imgsrc}" height="375px" width="">
                        <a href="#">
                            <h2 class="event_title">${title}</h2>
                        </a>
                        <ul class="list_style sermons_category event_category">
                            <li><i class="lnr lnr-user"></i>${schedule}</li>
                            <li><a href="${maps}"><i class="lnr lnr-apartment"></i>${location}</a></li>
                            <li><i class="lnr lnr-location"></i>${town}</li>
                            <li><i class="lnr lnr-camera-video"></i><a href="${conf}"><u style="color: blue;">Join Zoom Meeting</u></a></li>
                        </ul>
                    </div>
                </div>
        `
    }
}
customElements.define('saimandir-event', SaiMandirEvent);