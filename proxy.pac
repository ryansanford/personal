function FindProxyForURL(url, host) {

// Bypass the proxy for approved sites
if (
  dnsDomainIs(host, "google.com") || 
  dnsDomainIs(host, "microsoft.com") || 
  dnsDomainIs(host, "github.io") || 
  dnsDomainIs(host, "github.com") ||
  dnsDomainIs(host, "connexus.com") ||
  dnsDomainIs(host, "livelesson.com") ||
  dnsDomainIs(host, "colorado.edu") ||
  dnsDomainIs(host, "brainpop.com") ||
  dnsDomainIs(host, "grammarly.com") ||
  dnsDomainIs(host, "khanacademy.org") ||
  dnsDomainIs(host, "adobe.com") ||
  dnsDomainIs(host, "gstatic.com") ||
  dnsDomainIs(host, "typekit.net") ||
  dnsDomainIs(host, "entrust.net") ||
  dnsDomainIs(host, "entrustdatacard.com") ||
  dnsDomainIs(host, "jenny-add-1.com") ||
  dnsDomainIs(host, "jenny-add-2.com") ||
  dnsDomainIs(host, "jenny-add-3.com") ||
  dnsDomainIs(host, "jenny-add-4.com") ||
  dnsDomainIs(host, "jenny-add-5.com")

)
  return "DIRECT";


return "PROXY http://127.0.0.1:18080";


}
