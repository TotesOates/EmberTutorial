import Route from '@ember/routing/route';

export default Route.extend({
    model(){
        return this.store.createRecord('foodsites');
    },

    actions:{
        saveFood(newFood){
            newFood.save().then(() => this.transitionTo('foodsites'));
        },
        willTransition(){
            //rollbackAttributes() removes the record from the sore
            //if the model 'isNew'
            this.controller.get('model').rollbackAttributes();
        }
    }
});
