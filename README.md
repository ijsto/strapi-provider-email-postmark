# Strapi email service for [Postmark](https://postmarkapp.com)

# Links

- [Strapi website](http://strapi.io/)
- [Strapi community on Slack](http://slack.strapi.io/)
- [Strapi news on Twitter](https://twitter.com/strapijs)

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

| Variable        | Type   | Description                      | Required | Default |
| --------------- | ------ | -------------------------------- | -------- | ------- |
| provider        | string | The name of the provider you use | yes      |         |
| providerOptions | object | Provider options                 | yes      |         |
| settings        | object | Settings                         | no       | {}      |
| // @TODO        | ..     | ..                               |

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
      // @TODO
    },
  },
  // ...
});
```

# Licence

- [MIT](https://github.com/strapi/strapi/blob/HEAD/LICENSE.md)
