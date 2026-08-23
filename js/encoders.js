/**
 * EncodeX
 * Encoding & Decoding Engine
 *
 * Provides encoding and decoding functions for:
 * - Base64
 * - URL
 * - Hexadecimal
 * - Binary
 */


/* =========================================================
   BASE64
========================================================= */

/**
 * Encode text using Base64.
 *
 * Uses UTF-8 compatible encoding so
 * Nepali, Hindi, emoji, and other
 * Unicode characters work correctly.
 *
 * @param {string} text
 * @returns {string}
 */
function encodeBase64(text) {
    const bytes = new TextEncoder().encode(text);

    let binary = "";

    bytes.forEach(byte => {
        binary += String.fromCharCode(byte);
    });

    return btoa(binary);
}


/**
 * Decode a Base64 string.
 *
 * @param {string} text
 * @returns {string}
 */
function decodeBase64(text) {
    const binary = atob(text);

    const bytes = Uint8Array.from(
        binary,
        char => char.charCodeAt(0)
    );

    return new TextDecoder().decode(bytes);
}


/* =========================================================
   URL
========================================================= */

/**
 * Encode text for use in a URL.
 *
 * @param {string} text
 * @returns {string}
 */
function encodeURL(text) {
    return encodeURIComponent(text);
}


/**
 * Decode URL encoded text.
 *
 * @param {string} text
 * @returns {string}
 */
function decodeURL(text) {
    return decodeURIComponent(text);
}


/* =========================================================
   HEXADECIMAL
========================================================= */

/**
 * Convert text to hexadecimal.
 *
 * Example:
 *
 * Hello
 * ↓
 * 48 65 6c 6c 6f
 *
 * @param {string} text
 * @returns {string}
 */
function encodeHex(text) {
    const bytes = new TextEncoder().encode(text);

    return Array.from(bytes)
        .map(byte =>
            byte.toString(16).padStart(2, "0")
        )
        .join(" ");
}


/**
 * Convert hexadecimal back to text.
 *
 * Accepts values with or without spaces.
 *
 * Example:
 *
 * 48 65 6c 6c 6f
 * ↓
 * Hello
 *
 * @param {string} text
 * @returns {string}
 */
function decodeHex(text) {
    const cleaned = text
        .replace(/\s+/g, "")
        .toLowerCase();

    if (!cleaned) {
        return "";
    }

    if (!/^[0-9a-f]+$/.test(cleaned)) {
        throw new Error(
            "Invalid hexadecimal input."
        );
    }

    if (cleaned.length % 2 !== 0) {
        throw new Error(
            "Hexadecimal input must contain an even number of characters."
        );
    }

    const bytes = new Uint8Array(
        cleaned.length / 2
    );

    for (let i = 0; i < cleaned.length; i += 2) {
        bytes[i / 2] =
            parseInt(
                cleaned.substring(i, i + 2),
                16
            );
    }

    return new TextDecoder().decode(bytes);
}


/* =========================================================
   BINARY
========================================================= */

/**
 * Convert text to binary.
 *
 * Example:
 *
 * A
 * ↓
 * 01000001
 *
 * @param {string} text
 * @returns {string}
 */
function encodeBinary(text) {
    const bytes = new TextEncoder().encode(text);

    return Array.from(bytes)
        .map(byte =>
            byte.toString(2).padStart(8, "0")
        )
        .join(" ");
}


/**
 * Convert binary back to text.
 *
 * @param {string} text
 * @returns {string}
 */
function decodeBinary(text) {
    const cleaned = text.replace(/\s+/g, "");

    if (!cleaned) {
        return "";
    }

    if (!/^[01]+$/.test(cleaned)) {
        throw new Error(
            "Invalid binary input."
        );
    }

    if (cleaned.length % 8 !== 0) {
        throw new Error(
            "Binary input must contain groups of 8 bits."
        );
    }

    const bytes = new Uint8Array(
        cleaned.length / 8
    );

    for (let i = 0; i < cleaned.length; i += 8) {
        bytes[i / 8] =
            parseInt(
                cleaned.substring(i, i + 8),
                2
            );
    }

    return new TextDecoder().decode(bytes);
}


/* =========================================================
   ENCODER REGISTRY
========================================================= */

const ENCODERS = {

    base64: {
        encode: encodeBase64,
        decode: decodeBase64
    },

    url: {
        encode: encodeURL,
        decode: decodeURL
    },

    hex: {
        encode: encodeHex,
        decode: decodeHex
    },

    binary: {
        encode: encodeBinary,
        decode: decodeBinary
    }

};


/* =========================================================
   PUBLIC API
========================================================= */

window.EncodeX = {
    encodeBase64,
    decodeBase64,

    encodeURL,
    decodeURL,

    encodeHex,
    decodeHex,

    encodeBinary,
    decodeBinary,

    ENCODERS
};