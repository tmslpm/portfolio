
export const responseIsJSON = (r: Response) => {
    let contentType = r.headers.get("content-type");
    return (contentType && contentType.indexOf("application/json") !== -1)
}

/**
 * POST data on server
 * 
 * ```javascript
 * postJSON("https://localhost:3000/post", { text: "my text" })
 *   .then(json => console.log(json))
 *   .catch(e => console.error(e))
 * ```
 * 
 * @param endpoint string
 * @param data raw json
 * @returns promise
 */
export const postJSON = (endpoint: string, data: any) => {
    return fetch(endpoint, { method: "POST", body: JSON.stringify(data) })
        .then(r => {
            if (!r.ok) throw new Error("no response received");
            if (!responseIsJSON(r)) throw new Error("bad content-type");
            return r.json();
        });
};

/**
 * GET data from server
 * 
 * Example
 * ```javascript
 * getJSON("https://localhost:3000/test")
 *   .then(r => console.log(r))
 *   .catch(e => console.error(e))
 * ```
 * 
 * @param endpoint string
 * @returns promise 
 */
export const getJSON = (endpoint: string) => {
    return fetch(endpoint)
        .then(r => {
            if (!r.ok) throw new Error("no response received");
            if (!responseIsJSON(r)) throw new Error("bad content-type");
            return r.json();
        });
};