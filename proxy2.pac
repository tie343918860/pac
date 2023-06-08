function FindProxyForURL(url, host) {
    //本地地址直接连接
    if (isPlainHostName(host)) {
        return "PROXY 10.23.233.7:24100";
    }
    return "PROXY 10.23.233.7:24100; DIRECT";
}
