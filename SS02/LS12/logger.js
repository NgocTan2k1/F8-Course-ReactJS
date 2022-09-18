import {
    TYPE_LOG
} from "./constaints.js";

function logger(log, type = TYPE_LOG) {
    console[type](log);
}

export default logger;