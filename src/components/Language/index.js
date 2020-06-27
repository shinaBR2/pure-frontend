import React from 'react';
import { IntlContextConsumer, changeLocale } from 'gatsby-plugin-intl';

const languageName = {
  vi: 'VI',
  en: 'EN'
};

const Language = () => {
  return (
    <div>
      <IntlContextConsumer>
        {({ languages, language: currentLocale }) =>
          languages.map((language) => (
            <a
              key={language}
              onClick={() => changeLocale(language)}
              style={{
                color: currentLocale !== language ? `orange` : `black`,
                margin: 10,
                textDecoration:
                  currentLocale !== language ? 'underline' : 'none',
                cursor: currentLocale !== language ? 'pointer' : 'initile'
              }}
            >
              {languageName[language]}
            </a>
          ))
        }
      </IntlContextConsumer>
    </div>
  );
};

export default Language;
