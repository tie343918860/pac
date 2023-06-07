function FindProxyForURL(url, host) {
    //本地地址直接连接
    if (isPlainHostName(host)) {
        return "PROXY 127.0.0.1:24100";
    }
    return "PROXY 127.0.0.1:24100; DIRECT";
}
