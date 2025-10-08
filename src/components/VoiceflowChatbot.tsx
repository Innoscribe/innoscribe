'use client';

import { useEffect } from 'react';

const VoiceflowChatbot = () => {
  useEffect(() => {
    // Inject Botpress Webchat script
    const injectScript = document.createElement('script');
    injectScript.src = "https://cdn.botpress.cloud/webchat/v3.3/inject.js";
    injectScript.defer = true;
    document.body.appendChild(injectScript);

    // Inject your Botpress configuration script
    const configScript = document.createElement('script');
    configScript.src = "https://files.bpcontent.cloud/2025/02/25/19/20250225194527-29BMFFAC.js";
    configScript.defer = true;
    document.body.appendChild(configScript);

    return () => {
      // Clean up on unmount
      document.body.removeChild(injectScript);
      document.body.removeChild(configScript);
    };
  }, []);

  return null;
};

export default VoiceflowChatbot;
