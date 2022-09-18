import logger from "./logger.js"
import {
    TYPE_LOG as log,
    TYPE_WARN as warn,
    TYPE_ERROR,
} from "./constaints.js";
logger("Log", log);
logger("Warn", warn);
logger("Error", TYPE_ERROR);
