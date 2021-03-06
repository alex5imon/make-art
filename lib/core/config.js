/*
 * Config module
 *
 * Central config inclusive of environment sensitive variable parsed
 * from rendered page
 */

module.exports = {
    "default": {
        DEBUG_LEVEL     : 1,
        PRODUCTION      : window.CONFIG ? window.CONFIG.PRODUCTION : false,
        OFFLINE         : window.CONFIG ? window.CONFIG.OFFLINE : false,
        SEGMENTIO_ID    : window.CONFIG ? window.CONFIG.SEGMENTIO_ID : null,
        TEST_MODE       : window.CONFIG ? window.CONFIG.TEST_MODE : false,
        FACEBOOK_APP_ID : window.CONFIG ? window.CONFIG.FACEBOOK_APP_ID : false,
        MAILSERVER      : window.CONFIG ? window.CONFIG.MAILSERVER : false,
        API_URL         : window.CONFIG ? window.CONFIG.API_URL : false,
        WORLD_URL       : window.CONFIG ? window.CONFIG.WORLD_URL : false,
        CHALLENGES_URL  : window.CONFIG ? window.CONFIG.CHALLENGES_URL : false,
        DOMAIN_CFG: {
            "hourofcode.kano.me": {
                'mapToWorld': 'hourofcode',
                'hideShares': true
            }
        }
    },
    "development": {
        FACEBOOK_APP_ID : '832712683515218',
        MAILSERVER      : 'http://localhost:7000/summercamp/send',
        WORLD_URL       : 'http://localhost:5000',
        API_URL         : 'http://localhost:1234'
    },
    "staging": {},
    "production": {}

};
