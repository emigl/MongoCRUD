const modal = new bootstrap.Modal(document.getElementById('modalUser'))

const on = (element, event, selector, handler) =>{
    element.addEventListener(event, e =>{
        if(e.target.closest(selector)){
            handler(e)
        }
    })
}

on(document, 'click', '.btnEdit', e =>{
    const row = e.target.parentNode.parentNode
    modalId.value = row.children[0].innerHTML
    modalName.value = row.children[1].innerHTML
    modal_user.value = row.children[2].innerHTML
    modalPass.value = row.children[3].innerHTML
    modalCountry.value = row.children[4].innerHTML
    modal_age.value = row.children[5].innerHTML
    modal.show()
})

