process.env.PWD = process.cwd();

module.exports = {
    proc: process.env.PWD,
    port: process.env.PORT
}
