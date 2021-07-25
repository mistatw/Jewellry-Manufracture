function getdata() {
    var user=document.getElementById("user").value;
    //firebase data retrieval function
    //path of your data
    //.once will get all your data in one time
    firebase.database().ref('OrderForm/'+user).once('value').then(function (snapshot) {
        //here we will get data
        //enter your field nam
        
        var pc=snapshot.val().PC_Order_Number;
        var cname=snapshot.val().Customer_Name;
        var ord=snapshot.val().Order_Received_Date;
        var odd=snapshot.val().Order_Delivery_Date;
        var ono=snapshot.val().Order_No;
        var kname=snapshot.val().Karigar_Name;
        var items=snapshot.val().Items;
        var pieces=snapshot.val().Pieces;
        var metal=snapshot.val().Metal;
        var pur=snapshot.val().Purity;
        var gw=snapshot.val().Gold_Weight;
        var set=snapshot.val().Setting;
        var size=snapshot.val().Size;
        var len=snapshot.val().Screw_Type;
        var fin=snapshot.val().Finish;
        var dno=snapshot.val().Diamond_Lot_No;
        var dp=snapshot.val().Diamond_Pieces;
        var dpa=snapshot.val().Diamond_Pieces_Total;
        var dw=snapshot.val().Diamond_Weight;
        var dwa=snapshot.val().Diamond_Weight_Total;
        var csm=snapshot.val().Color_Stone_Model;
        var cst=snapshot.val().Color_Stone_Type;
        var csp=snapshot.val().Color_Stone_Pieces;
        var cspa=snapshot.val().Color_Stone_Pieces_Total;
        var csw=snapshot.val().Color_Stone_Weight;
        var cswa=snapshot.val().Color_Stone_Weight_Total;
        var ed=snapshot.val().Engraving_Details;
        var csd=snapshot.val().Customer_Sample_Detail;
        var st=snapshot.val().Size_Type;
        var des=snapshot.val().Description;
        var url=snapshot.val().URL;
        document.querySelector('img').src =url;

        //now we have data in variables
        //now show them in our html
    
        document.getElementById("pc").value=pc;
        document.getElementById("cname").value=cname;
        document.getElementById("ord").value=ord;
        document.getElementById("odd").value=odd;
        document.getElementById("ono").value=ono;
        document.getElementById("kname").value=kname;
        document.getElementById("items").value=items;
        document.getElementById("pieces").value=pieces;
        document.getElementById("metal").value=metal;
        document.getElementById("pur").value=pur;
        document.getElementById("gw").value=gw;
        document.getElementById("set").value=set;
        document.getElementById("size").value=size;
        document.getElementById("st").value=st;
        document.getElementById("len").value=len;
        document.getElementById("fin").value=fin;
        document.getElementById("dno").value=dno;
        document.getElementById("dp").value=dp;
        document.getElementById("dpa").value=dpa;
        document.getElementById("dw").value=dw;
        document.getElementById("dwa").value=dwa;
        document.getElementById("csm").value=csm;
        document.getElementById("cst").value=cst;
        document.getElementById("csp").value=csp;
        document.getElementById("cspa").value=cspa;
        document.getElementById("csw").value=csw;
        document.getElementById("cswa").value=cswa;
        document.getElementById("ed").value=ed;
        document.getElementById("csd").value=csd;
        document.getElementById("des").value=des;
        document.getElementById("url").value=url;
        
        
    })
}