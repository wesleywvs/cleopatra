
export const getUTMs = () => {
  const params = new URLSearchParams(window.location.search);
  return {
    source: params.get('utm_source'),
    medium: params.get('utm_medium'),
    campaign: params.get('utm_campaign'),
    content: params.get('utm_content'),
    term: params.get('utm_term'),
  };
};

export const getCookies = () => {
  const getCookie = (name: string) => {
    const value = `; ${document.cookie}`;
    const parts = value.split(`; ${name}=`);
    if (parts.length === 2) return parts.pop()?.split(';').shift();
    return null;
  };

  return {
    fbp: getCookie('_fbp'),
    fbc: getCookie('_fbc'),
  };
};

export const trackEvent = async (eventName: string, eventData: any = {}) => {
  const eventId = `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
  const utms = getUTMs();
  const { fbp, fbc } = getCookies();

  // 1. Pixel (Browser)
  if (typeof window.fbq === 'function') {
    window.fbq('track', eventName, { ...eventData, ...utms }, { eventID: eventId });
  }

  // 2. CAPI (Server)
  try {
    await fetch('/api/track-event', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        eventName,
        eventId,
        fbp,
        fbc,
        utms,
        eventData,
      }),
    });
  } catch (error) {
    console.error('Erro ao enviar evento para CAPI:', error);
  }
};
