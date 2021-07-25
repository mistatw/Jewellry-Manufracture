var firebaseConfig = {
  apiKey: "AIzaSyAbMhN0NyylJLxa2mscLKSRUQ6FFAsutxI",
  authDomain: "login-c5ad1.firebaseapp.com",
  databaseURL: "https://login-c5ad1.firebaseio.com",
  projectId: "login-c5ad1",
  storageBucket: "login-c5ad1.appspot.com",
  messagingSenderId: "499786764727",
  appId: "1:499786764727:web:a7f1db53d102909c3fd832",
  measurementId: "G-B7E5NH4E9T"
 };
 
 firebase.initializeApp(firebaseConfig);
 firebase.analytics();
 
 function tst() {
  var noc = 0;
  firebase.database().ref('OrderForm/').on("value", function(snapshot) {
   noc = snapshot.numChildren();
   var pc = snapshot.numChildren()
   document.getElementById("pc").value = pc;
  })
 }
 var url;
 tst();
 
 function upload() {
 
  var image = document.getElementById("image").files[0];
  var imageName = image.name;
  var storageRef = firebase.storage().ref('Jewellery Manufractures/' + imageName);
  var uploadTask = storageRef.put(image);
  var progress=0;
  uploadTask.on('state_changed', function(snapshot) {
  progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
  if(progress==100)
  {
    alert("Upload is " + progress + "% done");
  }
  }, function(error) {
 
   console.log(error.message);
  }, function() {
   
   uploadTask.snapshot.ref.getDownloadURL().then(function(downlaodURL) {
    url = downlaodURL;
   });
  });
  
 
 }
 
 
 
 
 
 
 function insert() {
 
  var noc = 0;
  firebase.database().ref('OrderForm/').once('value', function(snapshot) {
   noc = snapshot.numChildren();
   alert("Form submitted sucessfully.The PC No is : "+snapshot.numChildren() );
  })
 
 
  var up = parseInt(noc);
  var pc = document.getElementById("pc").value;
  var cname = document.getElementById("cname").value;
  var ord = document.getElementById("ord").value;
  var odd = document.getElementById("odd").value;
  var ono = document.getElementById("ono").value;
  var kname = document.getElementById("kname").value;
  var items = document.getElementById("items").value;
  var pieces = document.getElementById("pieces").value;
  var metal = document.getElementById("metal").value;
  var pur = document.getElementById("pur").value;
  var gw = document.getElementById("gw").value;
  var set = document.getElementById("set").value;
  var size = document.getElementById("size").value;
  var st = document.getElementById("st").value;
  var len = document.getElementById("len").value;
  var fin = document.getElementById("fin").value;
  var dno = document.getElementById("dno").value;
  var dp = document.getElementById("dp").value;
  var dpa=document.getElementById("dpa").value;
  var dw = document.getElementById("dw").value;
  var dwa=document.getElementById("dwa").value;
  var csm = document.getElementById("csm").value;
  var cst = document.getElementById("cst").value;
  var csp = document.getElementById("csp").value;
  var cspa=document.getElementById("cspa").value;
  var csw = document.getElementById("csw").value;
  var cswa=document.getElementById("cswa").value;
  var ed = document.getElementById("ed").value;
  var csd = document.getElementById("csd").value;
  var des = document.getElementById("des").value;
 
 
 
  firebase.database().ref('OrderForm/pc' + up).set({
   PC_Order_Number: pc,
   Customer_Name: cname,
   Order_Received_Date: ord,
   Order_Delivery_Date: odd,
   Order_No: ono,
   Karigar_Name: kname,
   Items: items,
   Pieces: pieces,
   Metal: metal,
   Purity: pur,
   Gold_Weight: gw,
   Setting: set,
   Size: size,
   Size_Type: st,
   Screw_Type: len,
   Finish: fin,
   Diamond_Lot_No: dno,
   Diamond_Pieces: dp,
   Diamond_Pieces_Total:dpa,
   Diamond_Weight: dw,
   Diamond_Weight_Total:dwa,
   Color_Stone_Model: csm,
   Color_Stone_Type: cst,
   Color_Stone_Pieces: csp,
   Color_Stone_Pieces_Total:cspa,
   Color_Stone_Weight: csw,
   Color_Stone_Weight_Total:cswa,
   Engraving_Details: ed,
   Customer_Sample_Detail: csd,
   Description: des,
   URL: url
   
  });
 
 
 }