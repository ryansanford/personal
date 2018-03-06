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
  dnsDomainIs(host, "www.historicfortsnelling.org") ||
  dnsDomainIs(host, "www.mnhs.org") ||
  dnsDomainIs(host, "www.americaslibrary.gov") ||
  dnsDomainIs(host, "jenny-add-4.com") ||
  dnsDomainIs(host, "jenny-add-5.com")

)
  return "DIRECT";


return "PROXY http://127.0.0.1:18080";


}
