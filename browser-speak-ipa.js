function $(id) {
    return document.getElementById(id);
}

// Converts from International Phonetic Alphabet text to SSML.
//
// Args:
//   ipaText: a space-separated string of IPA symbols.
//   lang: locale to assume, e.g., 'en-US'.
// Returns:
//   SSML string, including a phoneme tag per space-separated token.
//
// For more on Speech Synthesis Markup Language, see
// https://www.w3.org/TR/speech-synthesis11/.
function ipaToSsml(ipaText, lang) {
    const ALT_TEXT = ['not', 'supported'];
    const phonemes = ipaText.split(/\s+/)
        .filter(x => x)
        .map((x, i) =>
            `<phoneme alphabet="ipa" ph="${x}">${ALT_TEXT[i & 1]}</phoneme>`);
    return `<?xml version="1.0"?>
    <speak version="1.1" xmlns="http://www.w3.org/2001/10/synthesis"
           xml:lang="${lang}">
           ${phonemes.join(' ')}
    </speak>`;
}

// Use the global speechSynthesis to speak the given IPA text.
//
// Args:
//   ipaText: Space-separated string of IPA symbols.
//   lang: locale to assume, e.g., 'en-US'.
function speakIpa(ipaText, lang) {
    const utterance = new SpeechSynthesisUtterance();
    utterance.lang = lang;
    utterance.text = ipaToSsml(ipaText, lang);
    speechSynthesis.speak(utterance);
}

(function () {
    const speakIpaButton = $('speak-ipa-button');
    const speakIpaArea = $('speak-ipa-area');
    if (speakIpaButton && speakIpaArea) {
        speakIpaButton.addEventListener('click', () => {
            speakIpa(speakIpaArea.value, 'en-US');
        });
    }
})();