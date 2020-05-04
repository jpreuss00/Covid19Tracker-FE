$(document).ready(function () {

    $(".register__userButton").click(handleRegister);
    $(".delete__userButton").click(handleDelete);
    $(".location__registerButton").click(handleLocation);
    $(".check__areaButton").click(handleCheck);

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

function handleLocation(location){
    navigator.geolocation.getCurrentPosition(getGeoLocation);
}

function handleLocationRequest(userID, latitude, longitude){
    $.get({
        url: "https://enigmatic-retreat-23877.herokuapp.com/sighting?userID="+encodeURIComponent(userID)+"&latitude="+encodeURIComponent(latitude)+"&longitude="+encodeURIComponent(longitude),
        statusCode: {
            400: function () {
                errorMessageLocation();
            },
            204: function () {
                successMessageLocation();
            },
            500: function () {
                errorMessageLocation2();
            }
        }
    });
}

function getGeoLocation(location){
    userID = $(".location__userID").val();
    handleLocationRequest(userID, location.coords.latitude, location.coords.longitude);
}

function handleCheck(locations){
    navigator.geolocation.getCurrentPosition(getGeoLocationCheck);
}

function handleCheckRequest(latitude, longitude){
    $.get({
        url: "https://enigmatic-retreat-23877.herokuapp.com/endangered?latitude="+encodeURIComponent(latitude)+"&longitude="+encodeURIComponent(longitude),
        statusCode: {
            400: function () {
                successMessageCheck();
            },
            204: function () {
                successMessageCheck();
            },
            200: function () {
                errorMessageCheck();
            }
        }
    });
}

function getGeoLocationCheck(locations){
    handleCheckRequest(locations.coords.latitude, locations.coords.longitude);
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

function errorMessageLocation() {
    $(".location__userID").addClass('location__userID--invalid');
    $(".location__userID").val('wrong userID');
    setTimeout(function () {
        $(".location__userID").removeClass('location__userID--invalid');
        $(".location__userID").val('');
    }, 2500);
}

function errorMessageLocation2() {
    $(".location__userID").addClass('location__userID--invalid');
    $(".location__userID").val('enter userID');
    setTimeout(function () {
        $(".location__userID").removeClass('location__userID--invalid');
        $(".location__userID").val('');
    }, 2500);
}

function successMessageLocation() {
    $(".location__userID").addClass('location__userID--success');
    $(".location__userID").val('location has been saved!');
    setTimeout(function () {
        $(".location__userID").removeClass('location__userID--success');
        $(".location__userID").val('');
    }, 2500);
}

function errorMessageCheck() {
    $(".check__areaButton").addClass('check__areaButton--invalid');
    setTimeout(function () {
        $(".check__areaButton").removeClass('check__areaButton--invalid');
    }, 2500);
}

function successMessageCheck() {
    $(".check__areaButton").addClass('check__areaButton--success');
    setTimeout(function () {
        $(".check__areaButton").removeClass('check__areaButton--success');
    }, 2500);
}