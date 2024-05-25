function login(){
    var username = document.forms["frmnhaplieu"]["txusername"].value;
    var password = document.forms["frmnhaplieu"]["txpassw"].value;
    //alert("Dang nhap: \nTen dang nhap:" +username + "\nMat khau: "+ password+"\n")
    // if(username == "admin" && password == "123"){
    //     alert("Ban dang nhap thanh cong");
    // }
    // else{
    //     alert("Ban dang nhap that bai")
    // }
    var loi="";
    if(username == null || username == ""){
        loi = loi + "Vui long nhap username \n";
    }
    if(password == null || password == ""){
        loi = loi + "Vui long nhap mat khau \n";
    }
    if(loi !=""){
        alert(loi);
        return false;
    }
    else{
        alert("tat ca du lieu hop le!");
        return false;
    }
}
function search(){
    //alert("Test")
    var giatu=parseInt(document.forms["frmnhaplieu"]["gia_tu"].value);
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
function checkout(){
    var chuoi="";
    for(var i=1; i<=4;i++){
        var soluong= parseInt(document.forms["frmnhaplieu"]["sl"+i].value);
        chuoi += "San pham thu " + i + " co so luong" + soluong + "\n";
    }
    alert(chuoi);
}
function checkFeedback(){
    var ten = document.getElementById("hovaten").value;
    //var chude = document.getElementById("slchude").value;
    var diachi = document.getElementById("diachi").value;
    var dienthoai = document.getElementById("dienthoai").value;
    var email = document.getElementById("email").value;
    var noidung = document.getElementById("noidung").value;
    // alert("Ho va ten: " + ten + "\n" + "Chu de: " + chude);
    // var checkgd;
    // for(var i=0; i<document.getElementsByName("giaodich").length; i++){
    //     if(document.getElementsByName("giaodich")[i].checked == true)
    //         checkgd = document.getElementsByName("giaodich")[i].value;
    // }
    // alert("co giao dich: "+ checkgd);
    //khai bao bien luu loi
    var loi = "";
    //kiem tra du lieu
    if(ten == null || ten == ""){
        loi = loi + "Vui long nhap ten \n";
    }
    if(diachi == null || diachi == ""){
        loi = loi + "Vui long nhap dia chi \n";
    }
    if(dienthoai == null || dienthoai == ""){
        loi = loi + "Vui long nhap so dien thoai \n";
    }
    if(email == null || email == ""){
        loi = loi + "Vui long nhap dung dia chi email \n";
    }
    else if (!isEmail(email)){
        loi = loi + "Dia chi email khong hop le \n";
    }
    if(noidung == null || noidung == ""){
        loi = loi + "Vui long nhap noi dung \n";
    }
    //Neu co loi
    if(loi !=""){
        alert(loi);
        return false;
    }
    else{
        alert("Tat ca du lieu deu hop le!");
        return true;
    }
}
function isEmail(email){
    var hople = false;
    var checkemail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if(checkemail.test(email)){
        checkemail = true;
    }
    else{
        checkemail = false;
    }
    return checkemail;
}