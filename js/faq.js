class Faq extends HTMLElement {
    connectedCallback() {
        var heading = this.attributes.headingId.value;
        var dataTarget = this.attributes.datatarget.value;
        var question = this.attributes.question.value;
        var answer = this.attributes.answer.value;
        var labelledBy = this.attributes.labelledBy.value;
        var answerId = this.attributes.answerId.value;
        this.innerHTML =    `
        
        <div class="card" style="background-color:#f9f9ff">
            <div class="card-header" id="${heading}">
                <h2 class="mb-0">
                    <button type="button" class="btn btn-link collapsed whitewrap" style="white-space:normal" data-toggle="collapse" data-target="#${answerId}"><i class="fa fa-angle-right"></i>${question}</button>                     
                </h2>
            </div>
            <div id="${answerId}" class="collapse" aria-labelledby="${heading}" data-parent="#accordionExample">
                <div class="card-body">
                    <p>${answer}</p>
                </div>
            </div>
        </div>
        `
    }
}
customElements.define('saimandir-faq', Faq);