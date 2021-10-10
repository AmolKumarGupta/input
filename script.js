//window.onload = start();
  var s = $("#search");
function dat()
{   
fetch('https://dictionaryapi.com/api/v3/references/sd3/json/'+ $("input").value +'?key=213d20c8-6f54-41aa-adec-48b5b92be21c')
    .then(response => response.json())
    .then( data =>{func(data);} );  
    /*
      console.log(
      data.length +"\n"+
      data[0].fl + "\n"+
      data[0].shortdef       + "\n\n"+
      data[0].meta.stems)
      */
    function func(data)
    {
    			$("#area").style.display = 'block';
    		 $("p").innerHTML = "";
    		 $("p").innerHTML = "Result found:"+ data.length +"<br><hr>";
      for(i=0; i<data.length ;i++)
      {
      	if(data[i].fl != undefined){
        document.querySelector("p").innerHTML += data[i].fl +"<br>"+ data[i].shortdef +"<br><hr><br>";
        }
      }
    }  
  
}

function $(data){
  return document.querySelector(data);
}