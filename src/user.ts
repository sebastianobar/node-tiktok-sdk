import axios from 'axios';

type userData = {
  open_id: string;
  union_id: string;
  avatar: string;
  avatar_larger: string;
  display_name: string;
  error_code: number;
  description: string;
};

export class User {
  async getUserData(openId: string, accessToken: string): Promise<userData> {
    let result = await axios({
      url: 'https://open-api.tiktok.com/oauth/userinfo/',
      params: {
        open_id: openId,
        access_token: accessToken,
      },
    });
    return result.data;
  }
}

