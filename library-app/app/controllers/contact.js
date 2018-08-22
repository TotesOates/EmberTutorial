import Controller from '@ember/controller';
import {match, gte, and} from '@ember/object/computed';

export default Controller.extend({
    emailAddress: "",
    message: "",
    responseMessage: "",
    isValidEmail: match('emailAddress', /^.+@.+\..+$/),
    isValidMessage: gte('message.length', 5),
    isTotalValid: and('isValidEmail', 'isValidMessage'),
    

    actions: {
        sendMessage: function(){
            var email = this.get('emailAddress');
            var message = this.get('message');

            alert('Sending your message now...');

            // var responseMessage = 'To: ' + email + ' , Message: '+ message;
            this.set('responseMessage', `Thank you for your input, ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
            this.set('message', '');
        }
    }

});
