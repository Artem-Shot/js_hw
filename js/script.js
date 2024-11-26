'use strict';

class EmailService {
    static instance = null;
    #logs = [];

    constructor() {
        if (EmailService.instance) {
            throw new Error('EmailService is Singleton.');
        }
        EmailService.instance = this;
    }
}
