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
                     successMessageRegister();
                 },
         statusCode: {
             500: function () {
                 errorMessageRegister();
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
                errorMessageDelete();
            },
            404: function () {
                errorMessageDelete();
            },
            204: function () {
                successMessageDelete();
            }
        }
    });
}

function errorMessageRegister() {
    $(".register__userID").addClass('register__userID--invalid');
    $(".register__deletecode").addClass('register__deletecode--invalid');
    setTimeout(function () {
        $(".register__userID").removeClass('register__userID--invalid');
        $(".register__deletecode").removeClass('register__deletecode--success');
    }, 2500);
}

function successMessageRegister() {
    $(".register__userID").addClass('register__userID--success');
    $(".register__deletecode").addClass('register__deletecode--success');
    setTimeout(function () {
        $(".register__userID").removeClass('register__userID--success');
        $(".register__deletecode").removeClass('register__deletecode--success');
    }, 2500);
}

function errorMessageDelete() {
    $(".delete__deletecode").addClass('delete__deletecode--invalid');
    $(".delete__deletecode").val('wrong deleteCode');
    setTimeout(function () {
        $(".delete__deletecode").removeClass('delete__deletecode--invalid');
        $(".delete__deletecode").val('');
    }, 2500);
}

function successMessageDelete() {
    $(".delete__deletecode").addClass('delete__deletecode--success');
    $(".delete__deletecode").val('deletion successfull!');
    setTimeout(function () {
        $(".delete__deletecode").removeClass('delete__deletecode--success');
        $(".delete__deletecode").val('');
    }, 2500);
}