/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo
*/
module.exports = {
       url: 'https://api.github.com/gists/{:id}',
       regex: /(?:https?:\/\/)gist\.github\.com\/(?:.[^\/]+)\/(\d+)/i,
       shortcuts: ['gist','gistgithub'],
};
