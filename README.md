# browser-speak-ipa
Pronunciation of International Phonetic Alphabet text using built-in browser support (not universally available).

I've verified this to work in Firefox on a Mac; I've verified it *not* to work in Chrome on a Mac.

See https://developer.mozilla.org/en-US/docs/Web/API/SpeechSynthesis/speak and https://wicg.github.io/speech-api/#examples-synthesis for more details on the API.

See https://cloud.google.com/text-to-speech/docs/ssml#phoneme for examples of using the
phoneme tag in SSML and https://www.w3.org/TR/speech-synthesis11/#S3.1.10 for the specification.

I was inspired to think about this by this really neat project, which uses a server-side API: https://cuttlesoft.com/blog/2018/09/13/pronouncing-things-with-amazons-polly/.