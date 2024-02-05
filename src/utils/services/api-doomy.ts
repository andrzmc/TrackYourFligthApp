export const ApiDoomyDelayUtil = (data: unknown) => {
  const randomDelay = Math.floor(Math.random() * (2000 - 500 + 1) + 500);

  return new Promise(resolve => setTimeout(resolve, randomDelay)).then(
    () => data
  );
};
