function FindProxyForURL(url, host) {

// Bypass the proxy for approved sites
if (dnsDomainIs(host, "google.com") || dnsDomainIs(host, "microsoft.com") || dnsDomainIs(host, "github.io") || dnsDomainIs(host, "github.com"))
  return "DIRECT";


return "PROXY http://127.0.0.1:18080";


}
