!(function (n) {
  const o = (n.gu = n.gu || {});
  (o.dictionary = Object.assign(o.dictionary || {}, {
    'Block quote': ' વિચાર ટાંકો',
    Bold: 'ઘાટુ - બોલ્ડ્',
    'Cannot upload file:': 'ફાઇલ અપલોડ ન થઇ શકી',
    Italic: 'ત્રાંસુ - ઇટલિક્',
    Underline: 'નીચે લિટી - અન્ડરલાઇન્',
  })),
    (o.getPluralForm = function (n) {
      return 1 != n;
    });
})(window.CKEDITOR_TRANSLATIONS || (window.CKEDITOR_TRANSLATIONS = {}));
