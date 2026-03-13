export const getBasePath = () => {
  return process.env.NEXT_PUBLIC_BASE_PATH || '';
};

export const withBase = (path: string) => {
  const base = getBasePath();
  if (path.startsWith(base)) return path;
  return `${base}${path.startsWith('/') ? '' : '/'}${path}`;
};
