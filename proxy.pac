function FindProxyForURL(url, host) {

// Bypass the proxy for approved sites
if (dnsDomainIs(host, "google.com") || dnsDomainIs(host, "microsoft.com"))
  return "DIRECT";


return "PROXY http://127.0.0.1:18080";


}
