import {page} from "./index.js";

const clearContent = () => {
  page.removeChild(page.lastChild);
};

export default clearContent;
