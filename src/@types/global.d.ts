type APIEndpoint<P extends any[], R> = (...p: P) => Promise<R>;
type Status = 'INIT' | 'REQUEST' | 'SUCCESS' | 'FAILURE';