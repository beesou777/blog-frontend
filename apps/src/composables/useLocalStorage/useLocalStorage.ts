export const useLocalStorage = () => {
  /**
   * The function `getItemFromLocalStorage` retrieves an item from the browser's local storage by its key
   * and returns it as a parsed JSON object.
   * @param {string} key - The key parameter is a string that represents the key of the item you want to
   * retrieve from the localStorage.
   * @returns The function `getItemFromLocalStorage` returns the value stored in the local storage with
   * the given key. If the value exists, it is parsed from JSON format and returned. If the value does
   * not exist, it returns `null`.
   */
  const getItemFromLocalStorage = (key: string) => {
    const storedData = localStorage.getItem(key);
    return storedData ? JSON.parse(storedData) : null;
  };

  /**
   * The function `setItemInLocalStorage` takes a key and an item, and stores the item in the browser's
   * local storage with the given key.
   * @param {string} key - The key parameter is a string that represents the key under which the item
   * will be stored in the local storage.
   * @param {any} item - The `item` parameter is the value that you want to store in the local storage.
   * It can be of any data type, such as a string, number, boolean, object, or array.
   * @returns The `setItemInLocalStorage` function returns the result of calling
   * `localStorage.setItem(key, JSON.stringify(item))`.
   */
  const setItemInLocalStorage = (key: string, item: any) => {
    return localStorage.setItem(key, JSON.stringify(item));
  };

  /**
   * The function removes an item from the local storage based on the provided key.
   * @param {string} key - The key parameter is a string that represents the key of the item to be
   * removed from the localStorage.
   * @returns The `removeItemFromLocalStorage` function returns the result of calling
   * `localStorage.removeItem(key)`.
   */
  const removeItemFromLocalStorage = (key: string) => {
    return localStorage.removeItem(key);
  };

  return {
    getItemFromLocalStorage,
    setItemInLocalStorage,
    removeItemFromLocalStorage,
  };
};
