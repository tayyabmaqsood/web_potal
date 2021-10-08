document.addEventListener("DOMContentLoaded", function(event) { 
    
    var doc = document;
    var docFrag = document.createDocumentFragment();
    const alphas = ['ا' ,'ب' ,'پ' ,'ت' ,'ٹ' ,'ث' ,'ج' ,'چ' ,'ح' ,'خ' ,'د' ,'ڈ' ,'ذ' ,'ر' ,'ڑ' ,'ز' ,'ژ' ,'س' ,'ش' ,'ص' ,'ض' ,'ط' ,'ظ' ,'ع' ,'غ' ,'ف' ,'ق' ,'ک' ,'گ' ,'ل' ,'م' ,'ن' ,'و' ,'ہ' ,'ھ' ,'ء' ,'ی' ,'ے'];
    var buttonsWanted = alphas.length;
    for(var x = 0; x < buttonsWanted; x++){
        var button = doc.createElement('button');
        button.innerHTML = alphas[x];
        button.setAttribute('class', 'btn btn-primary col-1');
        button.setAttribute('style', 'margin: 2px');
        button.setAttribute('onclick', 'dispImg(this)');
        docFrag.appendChild(button);
        
    }
  
    doc.getElementById('btns').appendChild(docFrag);
});

function dispImg(btn1){
    alpha = btn1.innerHTML;
    document.getElementById('alph').src="images/alphabets/"+String(alpha)+".PNG";
}