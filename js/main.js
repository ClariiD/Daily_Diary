(function(){
  var ds = new Miso.Dataset({
    //url: 'data/daily_diary.csv',
    //delimiter: ','
    importer : Miso.Dataset.Importers.GoogleSpreadsheet,
    parser : Miso.Dataset.Parsers.GoogleSpreadsheet,
    key: '0Aqa-xG95Fj3mdDlNY3Jpbjk0MUYwU1hvQy1EQmJyN1E',
    worksheet : "1"
  });

  var weekTempl = $('#week-templ').html();
  var weekTemplFactory = _.template(weekTempl);

  ds.fetch({ 
  success : function() {
    console.log(this.toJSON()); //miso just does log

  var rows = this.toJSON();

  $.each(rows, function(i, row){  //each is for each object/element, i is number in array, row is content in row
   //console.log(i ,row);

  var content = weekTemplFactory(row); 
    console.log(content);

  $('#week-wrapper').append(content);  
 
 });

  },
  error : function() {
    console.log("Are you sure you are connected to the internet?");
  }
});

  
 /* $(weekTempl).append('.day, .time');
  $('.week-container').append($('.highlight'));
  $('.week-container').append($('.photo'));*/


  /*for(weekTempl){
    var day.getElementsByTagName('day'),
    var time.getElementsByTagName('time'),
    var highlight.getElementsByTagName('highlight'),
    var photo.getElementsByTagName('photo');
  
  $('.week-container').append('.day, .time');
  $('.week-container').append($('.highlight'));
  $('.week-container').append($('.photo'));*/

  }).call(this);


  /*var formatHelpers = {
    makeKey: function(day){
      return time.replace(/ /g,'_').toLowerCase();
    },
    hasLink: function(link){
      if(link != null){
        return '<a href="'+link+'" target="_blank">'
      }else{
        return ''
      }
    },
    hasLinkEnd: function(link){
      if(link != null){
        return '</a>'
      }else{
        return ''
      }
    },
    showLink: function(link){
      if(link != null){
        return 'Click for source.'
      }
    },
    formatDate: function(time){
      if(date != null){
        var d_obj = new Date(time);
        var m = d_obj.getMonth() + 1;
        var d = d_obj.getDate() + 1;
        var y = d_obj.getFullYear() - 2000;
        // return m + '/' + d + '/' + y
        return ''
      }
    },
    hasSource: function(source){
      if(source != null){
        return '--'+source
      }
    }
  }

  ds.fetch({ 
    success : function() {
      var rows = ds.toJSON();
      $.each(rows, function(ind, val){
        var ky = val.time.replace(/ /g,'_').toLowerCase();
        week_data[ky] = val;

        _.extend(val, formatHelpers)
        var content = weekTemplFactory(val);
    },
    error : function() {
      console.log("Are you sure you are connected to the internet?");
    }
  });*/

  /*$('#snwdn-wrapper').on('mouseover', '.pol-container', function(){
    var ky = $(this).attr('data-ky');
    var person_data = people_data[ky];
    var content = polInfoTemplFactory(person_data);
    $hover_window.html(content).show();
  });
  
  $('#snwdn-wrapper').on('mouseleave', '.pol-container', function(){
    $hover_window.hide();
  });

  $map_canvas.mousemove(function(e){
    calcMousePosition(e);
  });
  
   function calcMousePosition(e){
        var xOffset = e.pageX
        , yOffset = e.pageY
        , xBuffer = 10
        , yBuffer = 50

        , hover_window_height = $hover_window.outerHeight()
        , hover_window_width = $hover_window.outerWidth()

        , map_canvas_height = $map_canvas.outerHeight()
        , map_canvas_width = $map_canvas.outerWidth()

        , map_canvas_offset_left = $map_canvas.offset().left
        , map_canvas_offset_top = $map_canvas.offset().top;

        $hover_window.css({
          'top': yOffset + yBuffer,
          'left': xOffset - hover_window_width/2
        });

        // If it goes against the left wall
        if (xOffset < map_canvas_offset_left  + hover_window_width/2 + xBuffer){
          $hover_window.css({
            'left': xBuffer
          });
        }
        // If it goes against the right wall
        if(xOffset > map_canvas_width - hover_window_width/2 - xBuffer){
          $hover_window.css({
            'left': map_canvas_width - hover_window_width - xBuffer
          });
        }
        // If it goes against the bottom
        if(yOffset > map_canvas_height - hover_window_height - yBuffer){
          $hover_window.css({
            'top': yOffset - yBuffer/2 - hover_window_height
          });
        }
    }*/

