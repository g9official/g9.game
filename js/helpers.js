// import CryptoJS from '../libs/crypto-js.js';

export const queryParams = (() => {
  const search = window.location.search.substring(1)
  if (!search) return {}
  return search.split('&').reduce((acc, pair) => {
    const [key, value] = pair.split('=')
    acc[key] = value
    return acc
  }, {})
})();

export  function calculateEventValue(hash, events) {
  const MAX_BORDER = Math.pow(2, -53);
  const index = Number(BigInt('0x' + hash.substring(0, 15)) % BigInt(47));
  const num = Number(BigInt('0x' + hash.substring(index, index + 14)) >> BigInt(3));
  return num * MAX_BORDER * events;
}

export function parseInt16(value) {
  return Number.parseInt(value, 16) || 0;
}