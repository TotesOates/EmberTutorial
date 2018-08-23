import Controller from '@ember/controller';
import {match, gte, not} from '@ember/object/computed';

export default Controller.extend({
    emailAddress: "",
    message: "",
    responseMessage: "",
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isValidMessage: gte('message.length', 5),
    isDisabled: not('isValidEmail', 'isValidMessage'),
    

    actions: {
        sendMessage(){
            this.set('responseMessage', `Thank you for your input, ${this.get('emailAddress')}.`);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }

});
