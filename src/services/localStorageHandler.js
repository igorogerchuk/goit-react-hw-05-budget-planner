const get = () => {
  try {
    const item = localStorage.getItem('state');
    return item ? JSON.parse(item) : undefined;
  } catch (err) {
    return undefined;
  }
};

const set = state => {
  try {
    localStorage.setItem('state', JSON.stringify(state));
  } catch {}
};

export default { get, set };
