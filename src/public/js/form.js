$(document).ready(function(){
    $("button").click(function(){
       $.ajax({
          url: 'http://localhost:8002',
           method: 'GET',
           data: {name: $("input").val()},
           success: function(data){
                var stuff = JSON.parse(data);
                console.log(data);
                $("body").append(
                    "<div class='row'>" +
                        "<div class='col-md-2'>" +
                            "<div class='thumbnail'>" +
                                "<img src=" + stuff['poster'] + ">" +
                            "</div>" +
                        "</div>" +
                    "</div> ");
           }
       });
    });
});