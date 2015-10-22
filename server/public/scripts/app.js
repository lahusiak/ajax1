$(document).ready(function(){
    $(".container").append("<button class = 'reveal'>Reveal</button>");

    $(".container").on('click', '.reveal', function(){
        $.ajax({
            type : "GET",
            url  : "/kittyFooFoo",
            success : function(data) {
                appendDom(data);
            }
        })
    $(".container").on('click', '.delete', function(){
        $(this).parent().remove();
    })
    });
});

function appendDom(data) {
console.log(data);
    var $el = $(".container").children().last();
    for (var i = 0; i<data.people.length; i++ ) {
        var employee = "<div class = 'well'>"
            + "<p><img src='" + data.people[i].imageURL +"'/></p>"
            + "<p>Name: " + data.people[i].name + "</p>"
            + "<p>Location: " + data.people[i].location + "</p>"
            + "<p>Position: " + data.people[i].position + "</p>"
            + "<button class = 'delete'>Delete</button>"
            + "</div>";
        $(".container").append(employee);
    }
}