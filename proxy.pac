function FindProxyForURL(url, host) {

// Bypass the proxy for approved sites
if (
  dnsDomainIs(host, "google.com") || 
  dnsDomainIs(host, "google-analytics.com") || 
  dnsDomainIs(host, "googlealertmanager.com") || 
  dnsDomainIs(host, "explorelearning.com") || 
  dnsDomainIs(host, "sail-horizon.com") || 
  dnsDomainIs(host, "scholastic.com") || 
  dnsDomainIs(host, "discoveryeducation.com") || 
  dnsDomainIs(host, "mediachalk.com") || 
  dnsDomainIs(host, "pearsonkt.com") || 
  dnsDomainIs(host, "amazonaws.com") || 
  dnsDomainIs(host, "microsoft.com") || 
  dnsDomainIs(host, "github.io") || 
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "connexus.com") ||
  dnsDomainIs(host, "livelesson.com") ||
  dnsDomainIs(host, "colorado.edu") ||
  dnsDomainIs(host, "brainpop.com") ||
  dnsDomainIs(host, "grammarly.com") ||
  dnsDomainIs(host, "khanacademy.org") ||
  dnsDomainIs(host, "kastatic.org") ||
  dnsDomainIs(host, "adobe.com") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "typekit.net") ||
  dnsDomainIs(host, "entrust.net") ||
  dnsDomainIs(host, "entrustdatacard.com") ||
  dnsDomainIs(host, "desmos.com") ||
  dnsDomainIs(host, "historicfortsnelling.org") ||
  dnsDomainIs(host, "mnhs.org") ||
  dnsDomainIs(host, "americaslibrary.gov") ||
  dnsDomainIs(host, "kahoot.it") ||
  dnsDomainIs(host, "mathxlforschool.com") ||
  dnsDomainIs(host, "dailywritingtips.com") ||
  dnsDomainIs(host, "vimeo.com") ||
  dnsDomainIs(host, "vimeocdn.com") ||
  dnsDomainIs(host, "googletagmanager.com") ||
  dnsDomainIs(host, "googletagservices.com") ||
  dnsDomainIs(host, "wordcentral.com") ||
  dnsDomainIs(host, "legendsofamerica.com") ||
  dnsDomainIs(host, "mnopedia.org") ||
  dnsDomainIs(host, "greatachievements.org") ||
  dnsDomainIs(host, "explainthatstuff.com") ||
  dnsDomainIs(host, "sabrinasterling.com") ||
  dnsDomainIs(host, "stopbullying.gov") ||
  dnsDomainIs(host, "kahoot.com") ||
  dnsDomainIs(host, "king5.com") ||
  dnsDomainIs(host, "explorelearning.com") ||
  dnsDomainIs(host, "greatachievements.org") ||
  dnsDomainIs(host, "jenny-add-9.com")

)
  return "DIRECT";


return "PROXY http://127.0.0.1:18080";


}
