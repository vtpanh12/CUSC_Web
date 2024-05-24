function login(){
    var username = document.forms["frmnhaplieu"]["txusername"].value;
    var password = document.forms["frmnhaplieu"]["txpassw"].value;
    // alert("Dang nhap: \nTen dang nhap:" +username + "\nMat khau: "+ password)
    if(username == "admin" && password == "123"){
        alert("Ban dang nhap thanh cong");
    }
    else{
        alert("Ban dang nhap that bai")
    }
}
function search(){
    //alert("Test")
    var giatu=parseInt(document.forms["formnhaplieu"]["gia_tu"].value);
    switch(giatu){
        case 3:
            alert("Ban tim mua dien thoai gia tu 3.000.000");
            break;
        case 5:
            alert("Ban tim mua dien thoai gia tu 5.000.000");
            break;
        case 7:
            alert("Ban tim mua dien thoai gia tu 7.000.000");
            break;
        default:
            alert("Ban chua chon gia");
    }
}