# strapi-provider-email-postmark

[Strapi](http://strapi.io/) email service for [Postmark](https://postmarkapp.com/)

# Prerequisites

You will need to have the plugin `strapi-plugin-email` installed in you Strapi project.

# Installation

```
# using yarn
yarn add strapi-provider-email-postmark

# using npm
npm i strapi-provider-email-postmark
```

# Configuration

| Variable                | Type   | Description                                                                                        | Required | Default   |
| ----------------------- | ------ | -------------------------------------------------------------------------------------------------- | -------- | --------- |
| provider                | string | The name of the provider you use                                                                   | yes      |           |
| providerOptions         | object | Provider options                                                                                   | yes      |           |
| providerOptions.apiKey  | string | Postmark API key. Please refer to [postmark docs](https://www.npmjs.com/package/postmark) for more | yes      |           |
| settings                | object | Settings                                                                                           | no       | {}        |
| settings.defaultFrom    | string | Default sender mail address                                                                        | no       | undefined |
| settings.defaultTo      | string | Default receiver mail address                                                                      | no       | undefined |
| settings.defaultReplyTo | string | Default address the receiver is asked to reply to                                                  | no       | undefined |

### Example

Path - `config/plugins.js`

```javascript
module.exports = ({ env }) => ({
  // ...
  email: {
    provider: "postmark",
    providerOptions: {
      apiKey: env("POSTMARK_API_KEY"),
    },
    settings: {
      defaultFrom: "john.doe@ijs.to",
      defaultTo: "john.doe@ijs.to",
      defaultReplyTo: "code@ijs.to",
    },
  },
  // ...
});
```

# Licence

- [MIT](https://github.com/ijsto/strapi-provider-email-postmark/blob/master/LICENSE.md)
