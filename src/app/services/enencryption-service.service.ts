import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class EncryptionService {

  constructor() { }

  encryptText(plainText: string, encryptionKey: string): string {
    const iv = CryptoJS.enc.Utf8.parse(encryptionKey.substring(0, 16));
    const encrypted = CryptoJS.AES.encrypt(CryptoJS.enc.Utf8.parse(plainText.trim()), CryptoJS.enc.Utf8.parse(encryptionKey), {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return encrypted.toString();
  }

  decryptText(cipherText: string, encryptionKey: string): string {
    const iv = CryptoJS.enc.Utf8.parse(encryptionKey.substring(0, 16));
    const decrypted = CryptoJS.AES.decrypt(cipherText, CryptoJS.enc.Utf8.parse(encryptionKey), {
      iv: iv,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
}
