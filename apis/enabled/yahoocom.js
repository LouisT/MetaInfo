/*
 MetaInfo - Louis T. <LouisT@ltdev.im>
 https://github.com/LouisT/MetaInfo

 For more information on oEmbed visit http://oembed.com/
*/
module.exports = {
       url: 'http://api.embed.ly/1/oembed?&key={:apikey}&url={:id}',
       regex: /(?:http:\/\/)(?:screen|video|sports)\.yahoo\.com\/(?:.[^\?]+)/i,
       fullurl: true,
       needkey: true,
       shortcuts: ['yahoo','yvideo'],
};
