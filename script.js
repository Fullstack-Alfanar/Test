let Arr=[];
function Check_prodect(nu_p,pr_p,ty_p,im_p) {
    let Pname = document.getElementById("Pro_name");
    let Price = document.getElementById("Pro_Price");
    let imge = document.getElementById("img");
    let tble = document.getElementById("tble");
    let protype = document.getElementById("type");


    
    let tablerow = document.createElement("tr");
    let tabledata1 = document.createElement("td");
    let tabledata2 = document.createElement("td");
    let tabledate3 = document.createElement("td");
    let tabledate4 = document.createElement("td");
    let name_prodect = document.createElement("label");
    let price_prodect = document.createElement("label");
    let pro_type = document.createElement("label");
    let pro_img = document.createElement("img");

    if (Pname.value == "" || Pname.value == null ||
        Price.value == "" || Price.value == null ||
        imge.value == "" || imge.value == null||
        protype.value == "" && protype.value == null) {
        alert("Please complete Your info")
    }
    else {
       

        name_prodect.textContent=Pname.value;
        price_prodect.textContent=Price.value;
        pro_img.textContent=imge.src ;
        pro_type.textContent=protype.value;

        tabledata1.appendChild(name_prodect);
        tabledata2.appendChild(price_prodect);
        tabledate3.appendChild(pro_img);
        tabledate4.appendChild(pro_type);

        tablerow.appendChild(tabledata1);
        tablerow.appendChild(tabledata2);
        tablerow.appendChild(tabledata3);
        tablerow.appendChild(tabledata4);

        tble.appendChild(tablerow);


    }
    Pname.value = "";
    Price.value = "";
    imge.value = "";
}
var obj={
    np: Pname.value,
    pp: Price.value,
    tp:  pro_type.value,
    ip: imge.value,
}
function Saver(obj) {
    Arr.push(obj);
    localStorage.setItem("Buy_Prodect",JSON.stringify(Arr))}

    function Local() {
        if(localStorage.getItem("Buy_Prodect")){
            Arr.JSON(localStorage.getItem("Buy_Prodect"));
            for (let i of Arr){
                Check_prodect(i.np,i.pp,i.tp,i.p);
                    

            }
        }
        
    }
    Local();







