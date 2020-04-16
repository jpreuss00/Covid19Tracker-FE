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
                    console.log("success");
                    console.log(data);
                    console.log(data.id);
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
     console.log("id:" + data.id);
     console.log("deletecode:" + data.deletecode);
    $(".register__userID").val(data.id);
    $(".register__deletecode").val(data.deletecode);
}
