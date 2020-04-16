$(document).ready(function () {

    $(".register__userButton").click(handleRegister);

});

function handleRegister(){
    handleRegisterRequest(showUserData);
}

function handleRegisterRequest(callback){
    data = $.get({
        url: "https://enigmatic-retreat-23877.herokuapp.com/register?registration=true",
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
