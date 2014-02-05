/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 TODO: Support more of the travis-ci.org API methods. Currently builds and jobs are supported.
*/
module.exports = {
       url: 'https://api.travis-ci.org/{:id}',
       regex: /(?:https?:\/\/)(?:.*\.)?travis-ci\.org\/(?:(?:.[^\/]+)\/(?:.[^\?\/]+))\/((?:.[^\/]+)\/(?:.[^\?\/]+))/i,
       shortcuts: ['travis','travisci'],
       noencode: true,
};
