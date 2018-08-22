import Controller from '@ember/controller';
import { match, not } from '@ember/object/computed';

export default Controller.extend({
    emailAddress: "",
    responseMessage:"",
    isValid: match('emailAddress', /^.+@.+\..+$/),
    isDisabled: not("isValid"),
    headerMessage: "Coming Soon!",

    actions: {
        saveInvitation(){
            alert(`Saving of the following email address is in progress: ${this.get('emailAddress')}`);
            this.set(`responseMessage`, `Thank You! We've just saved your email address as: ${this.get('emailAddress')}`);
            this.set('emailAddress', '');
        }
    }
});
