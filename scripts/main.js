var server= "http://tiy-atl-fe-server.herokuapp.com/collections/drewdog";

//Student is my model
var Student = Backbone.Model.extend({

  defaults: {
    name:'',
    location: 'Atlanta',
    awesome: true
  },

  //make sure initialize is spelled correctly
  initialize: function () {
    var n = this.get('name')
    console.log(n + ' has been added');
  }

  });

var tim = new Student();
tim.set('name','Tim Whitacre');

//Student(s) is my collection
var Students = Backbone.Collection.extend({
    model:Student,
    url: server
    });

var all_students=new Students();


$('#studentForm').on('submit', function(e) {
  e.preventDefault();

  var student_name = $('#name').val();

  var s = new Student({
    name: student_name
    });

    all_students.add(s);

    s.save();

    console.log(s);



    $(this)[0].reset();
  });
