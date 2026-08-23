/**
 * EncodeX
 * Application Controller
 *
 * Handles:
 * - Encoding
 * - Decoding
 * - Input/output management
 * - Encoding selection
 * - Copy to clipboard
 * - Swap functionality
 * - Clear/reset
 * - Character counters
 * - Error handling
 */


/* =========================================================
   DOM ELEMENTS
========================================================= */

const encodingMethod =
    document.getElementById("encodingMethod");

const inputText =
    document.getElementById("inputText");

const outputText =
    document.getElementById("outputText");

const encodeBtn =
    document.getElementById("encodeBtn");

const decodeBtn =
    document.getElementById("decodeBtn");

const swapBtn =
    document.getElementById("swapBtn");

const copyBtn =
    document.getElementById("copyBtn");

const clearBtn =
    document.getElementById("clearBtn");

const inputCounter =
    document.getElementById("inputCounter");

const outputCounter =
    document.getElementById("outputCounter");


/* =========================================================
   CONSTANTS
========================================================= */

const DEFAULT_COPY_TEXT = "📋 Copy";
const COPIED_TEXT = "✓ Copied";


/* =========================================================
   CHARACTER COUNTERS
========================================================= */

/**
 * Update input character counter.
 */
function updateInputCounter() {
    const count = inputText.value.length;

    inputCounter.textContent =
        `${count} ${count === 1 ? "character" : "characters"}`;
}


/**
 * Update output character counter.
 */
function updateOutputCounter() {
    const count = outputText.value.length;

    outputCounter.textContent =
        `${count} ${count === 1 ? "character" : "characters"}`;
}


/**
 * Update all counters.
 */
function updateCounters() {
    updateInputCounter();
    updateOutputCounter();
}


/* =========================================================
   ENCODING
========================================================= */

/**
 * Encode the current input.
 */
function encodeInput() {

    const value = inputText.value;

    if (!value) {
        outputText.value = "";
        updateCounters();
        return;
    }

    try {

        const encoder =
            EncodeX.ENCODERS[
                encodingMethod.value
            ];

        if (!encoder) {
            throw new Error(
                "Unsupported encoding method."
            );
        }

        outputText.value =
            encoder.encode(value);

        updateOutputCounter();

    } catch (error) {

        showError(error.message);
    }
}


/* =========================================================
   DECODING
========================================================= */

/**
 * Decode the current input.
 */
function decodeInput() {

    const value = inputText.value;

    if (!value) {
        outputText.value = "";
        updateCounters();
        return;
    }

    try {

        const encoder =
            EncodeX.ENCODERS[
                encodingMethod.value
            ];

        if (!encoder) {
            throw new Error(
                "Unsupported decoding method."
            );
        }

        outputText.value =
            encoder.decode(value);

        updateOutputCounter();

    } catch (error) {

        showError(error.message);
    }
}


/* =========================================================
   ERROR HANDLING
========================================================= */

/**
 * Display an error inside the output field.
 *
 * @param {string} message
 */
function showError(message) {

    outputText.value =
        `Error: ${message}`;

    updateOutputCounter();
}


/* =========================================================
   SWAP
========================================================= */

/**
 * Swap input and output.
 */
function swapValues() {

    const inputValue =
        inputText.value;

    inputText.value =
        outputText.value;

    outputText.value =
        inputValue;

    updateCounters();
}


/* =========================================================
   COPY
========================================================= */

/**
 * Copy output to clipboard.
 */
async function copyOutput() {

    const value =
        outputText.value;

    if (!value) {
        return;
    }

    try {

        await navigator.clipboard.writeText(value);

        copyBtn.textContent =
            COPIED_TEXT;

        setTimeout(() => {

            copyBtn.textContent =
                DEFAULT_COPY_TEXT;

        }, 1500);

    } catch (error) {

        fallbackCopy(value);
    }
}


/**
 * Fallback clipboard method.
 *
 * Used when the Clipboard API
 * is unavailable.
 *
 * @param {string} value
 */
function fallbackCopy(value) {

    const temporary =
        document.createElement("textarea");

    temporary.value = value;

    temporary.style.position =
        "fixed";

    temporary.style.opacity =
        "0";

    document.body.appendChild(
        temporary
    );

    temporary.focus();
    temporary.select();

    try {

        document.execCommand("copy");

        copyBtn.textContent =
            COPIED_TEXT;

        setTimeout(() => {

            copyBtn.textContent =
                DEFAULT_COPY_TEXT;

        }, 1500);

    } catch (error) {

        copyBtn.textContent =
            "Copy Failed";

        setTimeout(() => {

            copyBtn.textContent =
                DEFAULT_COPY_TEXT;

        }, 1500);
    }

    document.body.removeChild(
        temporary
    );
}


/* =========================================================
   CLEAR
========================================================= */

/**
 * Clear input and output.
 */
function clearAll() {

    inputText.value = "";
    outputText.value = "";

    updateCounters();

    inputText.focus();
}


/* =========================================================
   INPUT EVENTS
========================================================= */

inputText.addEventListener(
    "input",
    updateInputCounter
);


/**
 * Clear output when encoding
 * method changes.
 */
encodingMethod.addEventListener(
    "change",
    () => {

        outputText.value = "";

        updateOutputCounter();
    }
);


/* =========================================================
   BUTTON EVENTS
========================================================= */

encodeBtn.addEventListener(
    "click",
    encodeInput
);

decodeBtn.addEventListener(
    "click",
    decodeInput
);

swapBtn.addEventListener(
    "click",
    swapValues
);

copyBtn.addEventListener(
    "click",
    copyOutput
);

clearBtn.addEventListener(
    "click",
    clearAll
);


/* =========================================================
   KEYBOARD SHORTCUTS
========================================================= */

/**
 * Keyboard shortcuts:
 *
 * Ctrl + Enter → Encode
 * Ctrl + Shift + Enter → Decode
 * Escape → Clear
 */
document.addEventListener(
    "keydown",
    event => {

        if (
            event.ctrlKey &&
            !event.shiftKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            encodeInput();
        }


        if (
            event.ctrlKey &&
            event.shiftKey &&
            event.key === "Enter"
        ) {

            event.preventDefault();

            decodeInput();
        }


        if (event.key === "Escape") {

            clearAll();
        }
    }
);


/* =========================================================
   INITIALIZATION
========================================================= */

function initializeApp() {

    updateCounters();

    inputText.focus();

    console.log(
        "EncodeX initialized successfully."
    );
}


/* =========================================================
   START APPLICATION
========================================================= */

initializeApp();