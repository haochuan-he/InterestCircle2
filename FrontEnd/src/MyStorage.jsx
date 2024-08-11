/*
 * @Author: HHC
 * @Date: 2024-08-11 14:24:07
 * @LastEditTime: 2024-08-11 14:28:36
 */
export class MyStorage {
    constructor(prefix) {
        this.prefix = prefix;
    }

    setItem(key, value) {
        localStorage.setItem(`${this.prefix}_${key}`, value);
    }

    getItem(key) {
        return localStorage.getItem(`${this.prefix}_${key}`);
    }

    removeItem(key) {
        localStorage.removeItem(`${this.prefix}_${key}`);
    }

    clear() {
        Object.keys(localStorage).forEach(key => {
            if (key.startsWith(this.prefix)) {
                localStorage.removeItem(key);
            }
        });
    }
}