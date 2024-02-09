const errorMapping: Record<string, string> = {
  '0': 'errorActionIsNotExecuted',
  '1': 'notificationsloginSuccess',
  '2': 'notificationsloginFailed',
};

export const getErrorCode = (code: string): string | undefined => {
  return errorMapping[code];
};
