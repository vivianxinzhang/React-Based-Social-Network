// export const API_ROOT = 'https://around-75015.appspot.com/api/v1';
// export const API_ROOT = 'https://around-179500.appspot.com';
export const API_ROOT = 'https://around-179500.uc.r.appspot.com';
// export const API_ROOT = 'http://35.193.66.188:8080';


export const TOKEN_KEY = 'TOKEN_KEY';

export const GEO_OPTIONS = {
    enableHighAccuracy: true,
    maximumAge: 300000,     // 地图cache要进行多长时间 -- 30min
    timeout: 27000,
};
export const POS_KEY = 'POS_KEY';
export const AUTH_HEADER = 'Bearer';

// 用const进行类型判断的好处是？ 便于拓展 easy to change later
// 修改类型 只用修改此处
export const POST_TYPE_IMAGE = 'image';
export const POST_TYPE_VIDEO = 'video';
export const POST_TYPE_UNKNOWN = 'unknown';

export const LOC_SHAKE = 0.02;
export const TOPIC_AROUND = 'around';
export const TOPIC_FACE = 'face';
