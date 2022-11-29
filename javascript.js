
let nom = document.getElementById("nom");
let vnom = document.getElementById("Vnom");
let marque = document.getElementById("marque");
let vmarque = document.getElementById("Vmarque");
let dateproduction = document.getElementById("dateproduction");
let vdateproduction = document.getElementById("Vdateproduction");
let prix = document.getElementById("prix");
let vprix = document.getElementById("Vprix");
let vpromotion = document.getElementById("Vpromotion");
let type = document.getElementById("type");
let vtype = document.getElementById("Vtype");
let tableau = document.getElementById("tableau");

//vider les champs
function vider() {
    nom.value ="";
    nom.style.border ="none";
    vnom.innerHTML = "";
    marque.value ="";
    marque.style.border = "none";
    vmarque.innerHTML ="";
    prix.value ="";
    prix.style.border = "";
    vprix.innerHTML ="";
    dateproduction.value ="";
    dateproduction.style.border = "";
    vdateproduction.innerHTML ="";
    document.getElementById("oui").checked = false;
    document.getElementById("non").checked = false;
    vpromotion.innerHTML ="";
    type.value = type.options[0].value;
    type.style.border = "";
    vtype.innerHTML ="";
}

function valider(e) {
    e.preventDefault();


    // Validation de nom 
    let expnom = new RegExp('[0-9[()}{&"|°+*%:!/$?;,.§<>]','g');
    if (expnom.test(nom.value) == true || nom.value.length > 30 || nom.value == "") {
        nom.style.border ="2px solid red";
        vnom.innerHTML ="Vôtre nom";
        
    } else {
        nom.style.border ="2px solid green";
        vnom.innerText="Valider";
      
    }
//Validation de marque:
    let expmarque = new RegExp('[0-9[()}{&"|°+*%:!/$?;,.§<>]','g');
     if (expmarque.test(marque.value) == true || marque.value.length > 30 || marque.value == "") {
        marque.style.border ="2px solid red";
        vmarque.innerHTML ="Pas de nombres et pas de caractères svp";

    }else{
        marque.style.border ="2px solid green";
        vmarque.innerText="Valider";
      
    }
// Validation de la date de production

   if (dateproduction.value =="" ) {
    dateproduction.style.border ="2px solid red";
    vdateproduction.innerHTML = "Veuillez entrer la date";
 
   } else {
    dateproduction.style.border ="2px solid green";
    vdateproduction.innerHTML = "Valider";
   
   }    
// Validation du prix  
    let expprix = new RegExp('[a-zA-Z-éèçà[()}{&"|°+*%:!/$?;§<>]','g');
    if (expprix.test(prix.value) == true || prix.value == "") {
        prix.style.border ="2px solid red";
        vprix.innerHTML = "Veuillez entrer le prix";
      
    } else {
        vprix.innerHTML = "Valider";
        prix.style.border ="2px solid green";
       
    }
//Validation de la promotion: 
    let oui = document.getElementById("oui").checked;
    let non = document.getElementById("non").checked;
    
     if (oui == false && non == false) {
         vpromotion.innerHTML = "Veuillez selctionner une promotion SVP";
      
        } else {
        vpromotion.innerHTML = "Valider";
       
    } 
//Validation de type  
        if(type.options[0].selected == true)  {
            vtype.innerHTML = "Veuillez sectionner un choix svp";
            type.style.border = "2px solid red";
          
        }else if (type.value) {
            vtype.innerHTML = "valider";
            type.style.border = "2px solid green";
          
        } 
    //validation de boutton ajouter
    if (vnom.innerText=="Valider" && vmarque.innerText=="Valider" && vprix.innerHTML == "Valider" && vpromotion.innerHTML == "Valider" && vtype.innerHTML == "valider") {
       let ligne = document.createElement('tr');
       let cnom = document.createElement('td');
       let cmarque = document.createElement('td');
       let cprix = document.createElement('td');
       let cdateproduction = document.createElement('td');
       let cpromotion =document.createElement('td');
       let ctype = document.createElement('td');
       let cbutton = document.createElement('td');
       let bmodifier = document.createElement('button');
       let bsupprimer = document.createElement('button');

        //donner un nom au buttons doit etre fait avant de les liers 
        bsupprimer.innerHTML = "Supprimer";
        bmodifier.innerHTML = "Modifier";
        // lier la ligne avec le tableau
        tableau.appendChild(ligne);
        // lier les colonnes avec la ligne 
        ligne.appendChild(cnom);
        ligne.appendChild(cmarque);
        ligne.appendChild(cprix);
        ligne.appendChild(cdateproduction);
        ligne.appendChild(cpromotion);
        ligne.appendChild(ctype);
        ligne.appendChild(cbutton);
        // lier les buttons avec la colonne cbutton
        cbutton.appendChild(bsupprimer);
        cbutton.appendChild(bmodifier);

       
        //affecter les valeurs au colonnes creer
        cnom.innerHTML = nom.value;
        cmarque.innerHTML = marque.value;
        cprix.innerHTML = prix.value;
        cdateproduction.innerHTML = dateproduction.value;
        ctype.innerHTML = type.value;
        if (document.getElementById("oui").checked == true) {
            cpromotion.innerHTML = document.getElementById("oui").value;   
        }else if (document.getElementById("non").checked == true) {
            cpromotion.innerHTML = document.getElementById("non").value;
        }

        //Pour supprimer une ligne
        bsupprimer.onclick = supprimer;
        function supprimer() {
            tableau.removeChild(ligne);
        }
   
        //Pour modifier une ligne
        bmodifier.onclick = modifier;
        function modifier() {
            //Pour remplir le formulaire avec les champs qui ce trouve dans la ligne
            nom.value = tableau.rows[ligne.rowIndex].cells[0].innerText;
            marque.value = tableau.rows[ligne.rowIndex].cells[1].innerText;
            prix.value = tableau.rows[ligne.rowIndex].cells[2].innerText;
            dateproduction.value = tableau.rows[ligne.rowIndex].cells[3].innerText;
            document.getElementById("type").value = tableau.rows[ligne.rowIndex].cells[5].innerText;
            if (cpromotion.innerHTML == "En promotion") {
                document.getElementById("oui").checked = true;
            }else{
                document.getElementById("non").checked = true;
            }
            document.getElementById("ajouter").innerHTML = "Modifier";
            //Le boutton ajouter perd la fonction precedente et prend la nouvelle fonction 
            document.getElementById("ajouter").onclick = ModifierdeAjouter;
            function ModifierdeAjouter(e) {
                e.preventDefault();
                    //affecter les valeurs au colonnes creer
                    tableau.rows[ligne.rowIndex].cells[0].innerText = nom.value;
                    tableau.rows[ligne.rowIndex].cells[1].innerText= marque.value;
                    tableau.rows[ligne.rowIndex].cells[2].innerText = prix.value;
                    tableau.rows[ligne.rowIndex].cells[3].innerText = dateproduction.value;
                    tableau.rows[ligne.rowIndex].cells[5].innerText = type.value;
                    if (document.getElementById("oui").checked == true) {
                        tableau.rows[ligne.rowIndex].cells[4].innerText = document.getElementById("oui").value;   
                    }else if (document.getElementById("non").checked == true) {
                        tableau.rows[ligne.rowIndex].cells[4].innerText = document.getElementById("non").value;
                    }
                    vider();
                    //desactiver le boutton modifier reactiver le boutton ajouter
                    document.getElementById("ajouter").innerHTML = "Ajouter";
                    document.getElementById("ajouter").onclick = valider;     
            }
        }
        vider();
        }
    
}
