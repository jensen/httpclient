export const bytes = (bytes) => {
  const i = Math.floor(Math.log(Number(bytes)) / Math.log(1024));
  const sizes = ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'];

  return (bytes / Math.pow(1024, i)).toFixed(2) * 1 + ' ' + sizes[i];
};

export const milliseconds = (ms) => {
  if (Number(ms) > 1000) {
    return `${(Number(ms) / 1000).toFixed(2)}s`;
  }

  return `${ms}ms`;
};

export const json = (value) => {
  if (typeof value === 'string') {
    return JSON.stringify(JSON.parse(value), null, 2);
  }

  return JSON.stringify(value, null, 2);
};
