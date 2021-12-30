import cryptoJs from 'crypto-js';

export function encryptMD5(val) {
  return cryptoJs.MD5(val).toString();
}
