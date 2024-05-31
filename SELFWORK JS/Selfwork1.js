let voto_numerico = prompt('Quanto hai preso?')

if(voto_numerico < 18){
    console.log('Insufficiente');
}
else if(voto_numerico >= 18 && voto_numerico < 21){
    console.log('Sufficiente');
}

else if(voto_numerico >= 21 &&  voto_numerico < 24){
    console.log('Buono');
}

else if(voto_numerico >= 24 && voto_numerico < 27){
    console.log('Distinto');
}

else if(voto_numerico >= 27 && voto_numerico < 29 ){
  console.log('ottimo');
}
else if(voto_numerico == 30){
    console.log('Eccellente');
}
else{
    console.log('Passa Avanti, non è il tuo voto');
}