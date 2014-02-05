/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo
*/
module.exports = {
       url: 'https://api.github.com/repos/{:id}',
       regex: /(?:https?:\/\/)(?:.*\.)?github\.com\/((?:.[^\/]+)\/(?:.[^\?\/]+))/i,
       shortcuts: ['git','github'],
       noencode: true,
};
