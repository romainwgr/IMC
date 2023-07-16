let a = $('#val');
let result = $('<p></p>');


a.on('click', imc);


function imc(){
    let texte ="";
    var p = $('#kg').val();
    var t = $('#m').val();
    var g= p+t;
    /* Gestion des erreurs */
    let gestion = $('#kg, #m');
    gestion.each(function() { //fonction pour ajouter une bordure rouge si il y a une erreur
        let v = $(this); 
        
        v.removeClass('js');
        
        if (v.val() === "" || isNaN(v.val())) {//soit il a rien mit soit c'est pas un nombre
            
            v.addClass('js');
        
        }
        
    });
    if(g===""){
        texte="Veuillez rentrez vos valeurs";
            result.text(texte);
            $('.ctr').append(result);
            return;

    }
    
    if(isNaN(p)|| isNaN(t)){
        texte="Les valeurs entrées sont incorrectes";
        result.text(texte);
        $('.ctr').append(result);
        return;
    }
    if (p === ""){
        texte="Il manque votre poids";
        result.text(texte);
        $('.ctr').append(result);
        return;
    }
    else if(t===""){
        texte="Il manque votre taille";
        result.text(texte);
        $('.ctr').append(result);
        return;
    }
    
    //calcul et affichage de l'imc
    var imc = p/(t**2);
    let txt = "Votre IMC est de " + Math.round(imc)+",";
    if(imc<18.5){
        texte=" votre poids est insuffisant";
    }
    else if(imc<25){
        texte=" votre poids est correct";
    }
    else{
        texte =" vous êtes en surpoids";
    }
    result.text(txt + texte);
    $('.ctr').append(result);
}
