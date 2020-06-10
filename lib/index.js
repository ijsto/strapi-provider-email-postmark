'use strict';

const postmark = require("postmark");
const { removeUndefined } = require('strapi-utils');

module.exports = {
  init: (providerOptions = {}, settings = {}) => {
    var client = new postmark.Client(providerOptions.postmark_api_key);

    return {
      send: options => {
        return new Promise((resolve, reject) => {
          const { from, to, cc, bcc, replyTo, subject, text, html, ...rest } = options;

          const msg = {
            "From": from || settings.defaultFrom,
            "To": to,
            "Cc": cc,
            "Bcc": bcc,
            "Subject": subject,
            "TextBody": text,
            "HtmlBody": html,
            "ReplyTo": replyTo || settings.defaultReplyTo,
            ...rest
          };

          client.sendEmail(msg, function (err) {
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
