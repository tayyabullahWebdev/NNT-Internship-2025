const contInsert = document.querySelector(".containerInsert");

window.addEventListener("keydown", (e) => {

    contInsert.innerHTML = `  <div class="key">

    ${e.key === ' ' ? 'space' : e.key}
<small>event.key</small>
</div>

<div class="key">
    ${e.keyCode}
    <small>event.keyCode</small>
</div>

<div class="key">
    ${e.code}
    <small>event.code</small>
</div>`

});