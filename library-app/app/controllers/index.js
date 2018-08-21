import Controller from '@ember/controller';
import {computed} from '@ember/object';

export default Controller.extend({
    emailAddress: "",
    isDisable: computed('emailAdress', function(){
        return this.get('emailAddress') === "";
    })
});
