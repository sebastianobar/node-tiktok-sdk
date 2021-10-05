import {Auth} from './auth';
import {User} from './user';
import {VideoList} from './video_list';

export class TiktokSDK {
  auth: Auth;
  user: User;
  videoList: VideoList;
  constructor(clientKey?: string, clientSecret?: string) {
    this.auth = new Auth(clientKey, clientSecret);
    this.user = new User();
    this.videoList = new VideoList();
  }
}

