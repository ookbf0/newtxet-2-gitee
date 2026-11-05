// src/provider/platform.js
// 换平台只改本文件：baseURL、key 的 secret 名、鉴权头、额外请求参数
export const PLATFORM = {
  name: "tokenrhythm",
  baseURL: "https://ai.gitee.com/v1/chat/completions",
  apiKeyEnv: "NVIDIA_API_KEY",
  authHeaderName: "Authorization",
  authPrefix: "Bearer ",
  extraBody: {
    stream: true,
    stream_options: { include_usage: true }
  }
};