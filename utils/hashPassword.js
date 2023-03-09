import { sha1 } from "sha1";

const hashPassword = (password) => sha1(password);

export default hashPassword;
