// src/provider/index.js
import { PLATFORM } from "./platform.js";
import { MODELS, DEFAULT_MODEL } from "./models.js";

export { MODELS, DEFAULT_MODEL };

export function isAllowedModel(modelId) {
  return MODELS.some((m) => m.id === modelId);
}

export function buildUpstreamRequest({ model, messages }) {
  const body = {
    ...PLATFORM.extraBody,
    model,
    messages
  };
  const headers = (key) => ({
    [PLATFORM.authHeaderName]: `${PLATFORM.authPrefix}${key}`,
    "Content-Type": "application/json"
  });
  return {
    url: PLATFORM.baseURL,
    apiKeyEnv: PLATFORM.apiKeyEnv,
    headers,
    body
  };
}