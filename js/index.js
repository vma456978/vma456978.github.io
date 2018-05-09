$.ajax({
  'url': 'https://apis.is/tv/ruv',
  'type': 'GET',
  'dataType': 'json',
  'data': {'stations': ''},
  'success': function(response) {
    
   
    
    

    
    for(var i = 0; i < response.results.length; i++){
      var dagskra = response.results[i];
      
     
     
      var time = dagskra.startTime;
      var timeCut = time.substring(11, 16);
      
       var live;
      if (dagskra.live === true) {
        live = "<div class='fa fa-television'></div>";
      } else {
        live= '';
      }
      
      var prem;
      if (dagskra.premier === true) {
        prem = "<div class='fa fa-star'></div>";
      } else {
        prem = '';
      }
      
      $("#ruv").append("<li class='list-group-item'><div>"+timeCut+"</div><div>Lengd: "+dagskra.duration+"</div>"+prem+""+live+"<h2 class ='titleFont'>"+dagskra.title+"</h2><div class='descriptin' >"+dagskra.description+"</div><i class='fa fa-plus-circle'</i></li>")
      
    }
    
   
$( ".list-group-item" ).click(function() {
  $(this).children('.descriptin').toggle();
  if($(this).children('.fa').hasClass("fa-plus-circle")){
    $(this).children('.fa').removeClass("fa-plus-circle");
    $(this).children('.fa').addClass("fa-minus-circle");
  }else if ($(this).children('i').hasClass("fa-minus-circle")){
    $(this).children('.fa').addClass("fa-plus-circle");
    $(this).children('.fa').removeClass("fa-minus-circle");
  }  
    
  
});

    

    
    
    
    
  }
  
});