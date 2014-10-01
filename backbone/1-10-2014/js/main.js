
// Create Constructor

var MyView = Backbone.View.extend({
    tagName : 'section',
    className: 'red',
    attributes: {
        id: 'id_name',
        class: 'over_write',
        'data-record': 56
    },
    initialize : function () {

    },
    render : function(){
        var _self = this;

        $.get('templates/content.html', function(template){
            var data = {title: 'Title', description: 'This is a Description.'};
            var compiled = _.template(template);

            _self.$el.append(compiled(data));
        });

        return this;
    },
    func : function(e){
        console.log('this is e', e);
        console.log( e.currentTarget);
    },
    events : {
        'click #foo' : 'func'
    }
});

// create instance
var myView1 = new MyView();

// call functions
$('#container').append(myView1.render().el);

