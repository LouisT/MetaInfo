/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 Not really a direct video link, but video information nevertheless.
 This uses a 3rd party API. IMDB does not have an API.
 Please see http://www.omdbapi.com/ for more information.
*/
module.exports = {
       url: 'https://registry.npmjs.org/{:id}',
       regex: /(?:https?:\/\/)?(?:.*\.)?npmjs\.org(?:\/package)?\/(.[^\/]+)\/?/i,
       shortcuts: ['npm','npmjs'],
};
