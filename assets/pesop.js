// valores de gravedad - Sistema Solar

var peso = document.getElementById("peso").value;
var g_tierra = 9.8; // gravedad de la Tierra
var g_marte = 3.7; // gravedad de Marte
var g_luna = 1.622; // gravedad de la Luna
var g_jupiter = 24.8; // gravedad de Jupiter
var g_sol = 27.9; // gravedad del Sol
var g_mercurio = 3.7; // gravedad de Mercurio
var g_venus = 8.87; // gravedad de Venus
var g_saturno = 10.44; // gravedad de Saturno
var g_urano = 8.69; // gravedad de Urano
var g_neptuno = 11.15; // gravedad de Neptuno

// Peso Final
var planetss = document.getElementById("selects").value;

var peso_final;

	if (planetss == 'sol'){
        peso_final = peso * g_sol / g_tierra;
    }else if(planetss == 'mercurio'){
        peso_final = peso * g_mercurio / g_tierra;
    }else if(planetss == 'venus'){
        peso_final = peso * g_venus / g_tierra;
    }else if(planetss == 'luna'){
        peso_final = peso * g_luna / g_tierra;
    }else if(planetss == 'marte'){
        peso_final = peso * g_marte / g_tierra;
    }else if(planetss == 'jupiter'){
        peso_final = peso * g_jupiter / g_tierra;
    }else if(planetss == 'saturno'){
        peso_final = peso * g_saturno / g_tierra;
    }else if(planetss == 'urano'){
        peso_final = peso * g_urano / g_tierra;
    }else if(planetss == 'neptuno'){
        peso_final = peso * g_neptuno / g_tierra;
    }else if(planetss == 'pluton'){
          peso_final = peso * g_pluton / g_tierra;
    }