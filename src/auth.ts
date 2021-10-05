import axios from 'axios'

type authResponse = {
  data: {
    open_id: string;
    scope: string;
    access_token: string;
    expires_in: number;
    refresh_token: string;
    refresh_expires_in: number;
  }
};

type authErrorResponse = {
  data: {
    captcha: string;
    desc_url: string;
    description: string;
    error_code: number
  };
  message: string
};

export class Auth {
  private _clientKey?: string;
  private _clientSecret?: string;
  constructor (clientKey?: string, clientSecret?: string) {
    this._clientKey = clientKey
    this._clientSecret = clientSecret
  }

  async getAccessToken (authCode: string): Promise<authResponse|authErrorResponse> {
    const result = await axios({
      url: 'https://open-api.tiktok.com/oauth/access_token/',
      method: 'post',
      params: {
        client_key: this._clientKey,
        client_secret: this._clientSecret,
        code: authCode,
        grant_type: 'authorization_code',
      },
    });
    return result.data;
  }

  async refreshAccessToken(refreshToken: string): Promise<authResponse|authErrorResponse> {
    let result = await axios({
      url: 'https://open-api.tiktok.com/oauth/refresh_token/',
      method: 'post',
      params: {
        client_key: this._clientKey,
        refresh_token: refreshToken,
        grant_type: 'refresh_token',
      },
    });
    return result.data;
  }

  async revokeAccessToken (openId: string, accessToken: string): Promise<any> {
    const result = await axios({
      url: 'https://open-api.tiktok.com/oauth/revoke/',
      method: 'post',
      params: {
        open_id: openId,
        access_token: accessToken,
      },
    });
    return result.data;
  }
}

