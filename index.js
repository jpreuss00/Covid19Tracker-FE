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
    deleteCode = $(".delete__deletecode").val();
    handleDeleteRequest(deleteCode);
}

function handleDeleteRequest(deleteCode){
    $.get({
        url: "https://enigmatic-retreat-23877.herokuapp.com/delete?deleteCode="+encodeURIComponent(deleteCode),
        statusCode: {
            400: function () {
                errorMessageDelete()
            },
            404: function () {
                errorMessageDelete()
            },
            204: function () {
                successMessageDelete()
            }
        }
    });
}

function errorMessageDelete() {
    $(".delete__deletecode").addClass('delete__deletecode--invalid');
    setTimeout(function () {
        $(".delete__deletecode").removeClass('delete__deletecode--invalid');
    }, 1000);
}

function successMessageDelete() {
    $(".delete__deletecode").addClass('delete__deletecode--success');
    setTimeout(function () {
        $(".delete__deletecode").removeClass('delete__deletecode--success');
    }, 1000);
}