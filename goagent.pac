function FindProxyForURL(url, host) {
    var goagent = 'PROXY 127.0.0.1:8087';
    if (
            dnsDomainIs(host, '.google.com') ||
            dnsDomainIs(host, '.google-analytics.com') ||
            dnsDomainIs(host, '.googleapis.com') ||
            dnsDomainIs(host, '.googlecode.com') ||
            dnsDomainIs(host, '.googleusercontent.com') ||
            dnsDomainIs(host, '.gstatic.com') ||
            dnsDomainIs(host, '.wikipedia.org') ||
            dnsDomainIs(host, '.twimg.com') ||
            dnsDomainIs(host, '.tweetdeck.com') ||
            dnsDomainIs(host, '.ytimg.com') ||
            dnsDomainIs(host, '.fbcdn.net') ||
            dnsDomainIs(host, '.sf.net') ||
            dnsDomainIs(host, '.sourceforge.net') ||
            dnsDomainIs(host, 'devstack.org') ||
            dnsDomainIs(host, '.discuss.com.hk') ||
            dnsDomainIs(host, 'chinadigitaltimes.net') ||
            dnsDomainIs(host, 'cloud.feedly.com') ||
            dnsDomainIs(host, 'feedly.com') ||
            dnsDomainIs(host, '.amazon.com') ||
            dnsDomainIs(host, '.youtube.com') ||
            dnsDomainIs(host, 'twitter.com') ||
            dnsDomainIs(host, '.appspot.com') ||
            dnsDomainIs(host, 'malsup.com') ||
            dnsDomainIs(host, 'blogspot.com') ||
            dnsDomainIs(host, 'blogger.com') ||
            dnsDomainIs(host, 'facebook.com') ||
            dnsDomainIs(host, 'wordpress.com') ||
            dnsDomainIs(host, 'getfoxyproxy.org') ||
            dnsDomainIs(host, 'vimeo.com') ||
            dnsDomainIs(host, 'keepvid.com') ||
            dnsDomainIs(host, 'vpnss03.com') ||
            dnsDomainIs(host, 'drupalcommerce.org') ||
            dnsDomainIs(host, 'bbc.co.uk') ||
            dnsDomainIs(host, 'demandbase.com') ||

            shExpMatch(host, '*.google.com.*') ||
            host == 't.co' ||
            host == 'bit.ly' ||
            host == 'goo.gl' ||
            host == 'fb.me' ||
            host == 'wp.me' ||
            host == 'j.mp' ||
            host == 'ow.ly' ||
            host == 'po.st' ||
            host == 'bbc.in'
        )
    {
        return goagent;
    }

    return "DIRECT";
}

