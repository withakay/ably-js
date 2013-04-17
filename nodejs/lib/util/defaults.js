var Defaults = {
	protocolVersion:   1,
	REST_HOST:         'rest.ably.io',
	WS_HOST:           'realtime.ably.io',
	FALLBACK_HOSTS:    ['A.ably-realtime.com', 'B.ably-realtime.com', 'C.ably-realtime.com', 'D.ably-realtime.com', 'E.ably-realtime.com'],
	PORT:              80,
	TLS_PORT:          443,
	connectTimeout:    15000,
	disconnectTimeout: 30000,
	suspendedTimeout:  120000,
	cometRecvTimeout:  90000,
	cometSendTimeout:  10000,
	httpTransports:    ['comet'],
	transports:      ['web_socket', 'comet']
};