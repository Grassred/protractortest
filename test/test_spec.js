describe('Protractor Demo Page', function () {
    it('should pass', function () {
      browser.ignoreSynchronization = true
      browser.get('https://glitchitsystem.com/protractor-demo')
    })
  
    it('should fail', function () {
      browser.ignoreSynchronization = true
      browser.get('https://glitchitsystem.com/protractor-demo')
      var name = 'Glitchy'
        element(by.id('nameFld')).sendKeys(name)
  
              element(by.id('submitBtn')).click()
  
      expect(element(by.id('welcomeText')).getText()).toEqual('Welcome to Protractor ' + name + '!')
    })
  })
 