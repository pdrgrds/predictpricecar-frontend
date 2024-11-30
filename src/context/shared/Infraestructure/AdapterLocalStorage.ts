export class AdapterLocalStorage {

    public static get(key: string | string[]) {
        const listKey = !Array.isArray(key) ? [key] : key;
        const listResukt = [];
        for (const row of listKey) {
            const result = localStorage.getItem(row);
            listResukt.push(result);
        }

        return listResukt;
    }

    public static set(key: string, value: string) {
        localStorage.setItem(key, value);
    }
}