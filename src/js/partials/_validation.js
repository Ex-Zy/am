/* eslint-disable camelcase */
import $ from 'jquery';
import 'jquery-validation';

const form = $('.js-contact-form');

form.validate({
  rules: {
    name_contact: {
      required: true
    },
    email_contact: {
      required: true,
      email: true
    },
    phone_contact: {
      required: true,
      digits: true
    },
  }
});
