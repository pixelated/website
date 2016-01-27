(function(root) {
    'use strict';

    if (navigator.doNotTrack || !Piwik) {
        return; // do not track or piwik is blocked via plugin
    }

    var GOAL_CONTRIBUTOR = 1;
    var endpoint = 'http://192.168.135.1:8080/piwik.php';
    var siteId = window.location.hostname === 'pixelated-project.org' ? 1 : 2;

    var tracker = root._tracker = Piwik.getTracker(endpoint, siteId);
    tracker.disableCookies();
    tracker.enableLinkTracking();
    tracker.enableHeartBeatTimer(5);
    tracker.discardHashTag(true);
    tracker.trackPageView(window.location.pathname);

    $('#navbar-github, #navbar-twitter, #navbar-email, #navbar-irc, #links-video, #links-contribute, #links-try').on('click touchstart', function() {
        var evt = this.id.split('-');
        tracker.trackEvent(evt[0], evt[1], this.id);
    });

    $('.faq__toc a').on('click touchstart', function() {
        var evt = this.hash.replace('#', '');
        tracker.trackEvent('faq', evt);
    });
})(this);
