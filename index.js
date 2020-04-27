$(document).ready(function () {

    $(".register__userButton").click(handleRegister);
    $(".delete__userButton").click(handleDelete);

});

function handleRegister(){
    handleRegisterRequest(showUserData);
}

function handleRegisterRequest(callback){
     data = $.get({
         url: "https://enigmatic-retreat-23877.herokuapp.com/register",
         success: function (data) {
                     callback(data);
                 },
         statusCode: {
             500: function () {
                 console.log("error");
             }
         }
     });
 }

function showUserData(data){
    $(".register__userID").val(data.id);
    $(".register__deletecode").val(data.deletecode);
}

function handleDelete(){
alert("handleDelete");
    deleteCode = $(".delete__deletecode").val();
    handleDeleteRequest(deleteCode);
}

function handleDeleteRequest(deleteCode){
alert("handleDeleteRequest: " + URLEncoder.encode(deleteCode, StandardCharsets.UTF_8));
    $.get({
        url: "https://enigmatic-retreat-23877.herokuapp.com/delete?deleteCode=2895#jpwpo",
        statusCode: {
            400: function () {
                console.log("error");
            },
            404: function () {
                console.log("error");
            },
            204: function () {
                console.log("error");
            }
        }
    });
}