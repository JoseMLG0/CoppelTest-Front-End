export const environment = {
    PROTOCOL: process.env["COPPEL_TEST_BACKEND_PROTOCOL"] || 'http',
    HOST: process.env["COPPEL_TEST_BACKEND_HOST"] || 'localhost',
    PORT: process.env["COPPEL_TEST_BACKEND_PORT"] || '8080',
};
