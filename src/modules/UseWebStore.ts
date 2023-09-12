import { Ref, ref, reactive, resolveTransitionHooks } from "vue"
import { useEventListener } from "./Event";

enum KEY_STORE {
    DARK_THEME,
}

class WebStore {

    // Setter
    private static setItem(storage: Storage, key: KEY_STORE, value: string): void {
        storage.setItem(KEY_STORE[key], value);
    }

    public static setItemInLocalStorage(key: KEY_STORE, value: string): void {
        WebStore.setItem(localStorage, key, value);
    }

    public static setItemInSessionStorage(key: KEY_STORE, value: string): void {
        WebStore.setItem(sessionStorage, key, value);
    }

    // Getter

    private static getItem(storage: Storage, key: KEY_STORE, defaultValue: string) {
        let v = storage.getItem(KEY_STORE[key]);
        return v === null ? defaultValue : v;
    }

    public static getItemInLocalStorage(key: KEY_STORE, defaultValue: string): string {
        return WebStore.getItem(localStorage, key, defaultValue);
    }

    public static getItemInSessionStorage(key: KEY_STORE, defaultValue: string): string {
        return WebStore.getItem(sessionStorage, key, defaultValue);
    }
}

export function UsePreferenceDarkStyle() {
    const isDark = ref<boolean>(WebStore.getItemInLocalStorage(KEY_STORE.DARK_THEME, "false") === "true");
    // init
    document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
    // return ref + function switch value to true or false
    return {
        isDark,
        switchTheme: () => {
            isDark.value = !isDark.value;
            document.documentElement.setAttribute("data-theme", isDark.value ? "dark" : "light");
            WebStore.setItemInLocalStorage(KEY_STORE.DARK_THEME, isDark.value ? "true" : "false");
        }
    };
}