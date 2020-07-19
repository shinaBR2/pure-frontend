const mockEvents = {
  mock: {
    name: '[mock][Click]',
    description: 'Click on a button'
  }
};

// Mock events

export const trackMock = (analytics) => {
  const event = mockEvents.mock;
  const { name, description } = event;

  analytics.logEvent(name, {
    description
  });
};
