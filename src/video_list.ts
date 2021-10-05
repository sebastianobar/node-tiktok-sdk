import axios from 'axios';

enum fieldEnum {
  embed_html = "embed_html",
  embed_link = "embed_link",
  like_count = "like_count",
  comment_count = "comment_count",
  share_count = "share_count",
  view_count = "view_count",
  title = "title",
  
};

type postVideoListRequest = {
  openId: string;
  accessToken: string;
  cursor?: number;
  maxCount?: number;
  fields?: fieldEnum[];
};

type VideoListVideoInfo = {
  create_time: number;
  cover_image_url: string;
  share_url: string;
  video_description: string;
  duration: number;
  height: number;
  width: number;
  id: string;
  title?: string;
  embed_html?: string;
  embed_link?: string;
  like_count?: number;
  comment_count?: number;
  share_count?: number;
  view_count?: number;
}

type videoListResponse = {
  data?: {
    cursor: number;
    has_more: boolean;
    videos: VideoListVideoInfo[];
  };
  error?: {
    code: number;
    message: string;
    log_id: string;
  };
}

export class VideoList {

  async getVideoListWithMetadata({openId, accessToken, cursor, maxCount, fields}: postVideoListRequest): Promise<videoListResponse> {
    let result = await axios({
      url: 'https://open-api.tiktok.com/video/list/',
      method: 'post',
      data: {
        open_id: openId,
        access_token: accessToken,
        cursor: cursor,
        max_count: maxCount,
        fields: fields
      }
    });
    return result.data;
  }

  async getVideoList({openId, accessToken, cursor, maxCount}: postVideoListRequest): Promise<videoListResponse> {
    let result = await axios({
      url: 'https://open-api.tiktok.com/video/list/',
      method: 'get',
      params: {
        open_id: openId,
        access_token: accessToken,
        cursor: cursor,
        max_count: maxCount
      }
    });
    return result.data;
  }
}

