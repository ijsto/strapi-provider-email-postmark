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
            defaultMessageStream,
            defaultFrom,
            defaultTo,
            defaultReplyTo,
            defaultVariables = {},
          } = settings;

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
            variables = {},
            ...rest
          } = options;

          const msg = {
            "MessageStream": messageStream || defaultMessageStream,
            "From": from || defaultFrom,
            "To": to || defaultTo,
            "Cc": cc,
            "Bcc": bcc,
            "Subject": subject,
            "TextBody": text,
            "HtmlBody": html,
            "ReplyTo": replyTo || defaultReplyTo,
            "TemplateId": templateId,
            "TemplateAlias": templateAlias,
          };

          let method = 'sendEmail';

          if (templateId || templateAlias) {
            method = 'sendEmailWithTemplate';
            msg.TemplateModel = {
              ...defaultVariables,
              ...variables,
            }
          }

          client[method](removeUndefined({
            ...msg,
            ...rest,
          }), function (err) {
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
