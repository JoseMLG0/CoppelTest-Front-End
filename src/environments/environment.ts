export const environment = {
    PROTOCOL: import.meta.env["COPPEL_TEST_BACKEND_PROTOCOL"] || 'http',
    HOST: import.meta.env["COPPEL_TEST_BACKEND_HOST"] || 'localhost',
    PORT: import.meta.env["COPPEL_TEST_BACKEND_PORT"] || '8080',
};
