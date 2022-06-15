const localStorage = {
  add(key) {
    localStorage.add(key);
  },
  remove(key) {
    localStorage.remove(key);
  },
  set(key, value) {
    localStorage.setItem(key, value);
  },
  clear() {
    localStorage.clear();
  }
};

export const { add, clear, remove, setStorage } = localStorage;

export default localStorage;
