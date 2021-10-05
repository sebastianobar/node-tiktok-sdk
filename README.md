# node-tiktok-sdk
This is a simple SDK for Tiktok Oauth APIs for NodeJS
## Installation
`npm install tiktok-sdk`
## Usage
This library exports the base class "TiktokSDK"

Example:

```
const {TiktokSDK} = require('../dist/index.js');

const tiktokInstance = new TiktokSDK('clientKey', 'clientSecret');

tiktokInstance.auth.getAccessToken('authCode')
  .then(
    (res) => {
      ...
    }
  )
```

See docs for references
