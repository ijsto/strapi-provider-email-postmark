'use strict';

const postmark = require("postmark");
const { removeUndefined } = require('strapi-utils');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    var client = new postmark.Client(providerOptions.apiKey);

    return {
      send: options => {
        return new Promise((resolve, reject) => {
          const {
            messageStream,
            from,
            to,
            cc,
            bcc,
            replyTo,
            subject,
            text,
            html,
            templateId,
            templateAlias,
            variables,
            ...rest
          } = options;

          const msg = {
            "MessageStream": messageStream || settings.defaultMessageStream,
            "From": from || settings.defaultFrom,
            "To": to || settings.defaultTo,
            "Cc": cc,
            "Bcc": bcc,
            "Subject": subject,
            "TextBody": text,
            "HtmlBody": html,
            "ReplyTo": replyTo || settings.defaultReplyTo,
            "TemplateId": templateId,
            "TemplateAlias": templateAlias,
            "TemplateModel": variables,
            ...rest
          };

          let method = 'sendEmail';

          if (templateId || templateAlias) {
            method = 'sendEmailWithTemplate';
          }

          client[method](removeUndefined(msg), function (err) {
            if (err) {
              reject(err);
            } else {
              resolve();
            }
          });
        });
      }
    };
  }
};
