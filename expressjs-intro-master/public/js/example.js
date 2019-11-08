$(document).ready(function() {
    $('.send').click(function() {
        let newName = $('#nombre').val()
        console.log(newName);
        if (newName && newName.length > 0) {
            $.post('/save-user', {name:newName}, function(data, status) {
                console.log(`${data.message} and status is ${status}`)
                alert(data.message)
                setTimeout(function() {
                    location.reload();
                }, 2000);
            })
        }
    })
})


function eliminar(name) {
    $('.delete').click(function(){
        let elim = (`${name}`);
        console.log(elim)
        $.post('./delete/', elim, function(data, status) {
            console.log(`${data.message} and status is ${status}`)
            setTimeout(function() {
                location.reload();
            }, 2000);
    } )
})
}   