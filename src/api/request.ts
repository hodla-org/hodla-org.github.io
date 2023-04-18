const wait = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const request = <P, R>(
  path: string,
  params: P,
  mock?: R
): Promise<R> => {
  if (mock) {
    return wait(1000).then(() => mock);
  }
  return Promise.resolve({} as R);
};
