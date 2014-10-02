
// Create Backbone Model
var MyModel = Backbone.Model.extend({
    defaults : {
        title : 'This is a Defaults Title',
        description : 'This is a Defaults Description'
    }
});
// Create Backbone Model instance
var m1 = new MyModel();

// Create Backbone View
var MyView = Backbone.View.extend({
    initialize : function () {
        alert('Welcome to my Page.');
    },
    tagName : 'section',
    className: 'mymodel_class',
    attributes: {
        id: 'mymodel_id',
        class: 'over_write',
        'data-record': 56
    },
    func : function(e){
        var data = m1.toJSON();
        console.log(data.title);
        var H2 = $('h2');
        console.log(H2);

        H2.slideToggle();
    },
    events : {
        'click #foo' : 'func'
    },
    render : function(){
        var _self = this;

        $.get('templates/content.html', function(template){
            var data = m1.toJSON(),
                compiled = _.template(template);

            _self.$el.append(compiled(data));
        });

        return this;
    }
});

// create Backbone View instance
var myView1 = new MyView();

// call functions
$('#container').append(myView1.render().el);
