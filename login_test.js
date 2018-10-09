const {By} = require('selenium-webdriver');
const {suite} = require('selenium-webdriver/testing');

suite(function(env) {
    describe('Login page', function() {
        let driver;

        before(async function() {
            driver = await env.builder().build();
        });

        it('input login/password', async function() {
            await driver.get('http://localhost/litecart/admin/login.php');
            await driver.findElement(By.name('username')).sendKeys('admin');
            await driver.findElement(By.name('password')).sendKeys('admin');
            await driver.findElement(By.name('remember_me')).click();
            await driver.findElement(By.name('login')).click();
        });

        after(() => driver && driver.quit());
    });
});