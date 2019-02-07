/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });

         it('URLs are defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].url).toBeDefined();
              expect(allFeeds[i].url).not.toBe('');
            }
         })

         it('Names are defined and not empty', function() {
            for (let i = 0; i < allFeeds.length; i++) {
              expect(allFeeds[i].name).toBeDefined();
              expect(allFeeds[i].name).not.toBe('');
            }
         })
    });

    describe('The menu', function() {
        let body;
        let classList;
        let menuIcon;

        beforeEach(function() {
          body = $('body');
          classList = body[0].classList;
          menuIcon = $('.menu-icon-link')
        })

         it('should be hidden by default', function() {
            expect(classList).toContain('menu-hidden');
         })

          it('should toggle when clicked', function() {
            menuIcon.click();
            expect(classList).not.toContain('menu-hidden');
            menuIcon.click();
            expect(classList).toContain('menu-hidden');
          })

    });

    describe('Initial Entries', function() {
        let feed;
        let feedLength;

        beforeEach(function(done) {
          feed = $('.feed .entry');
          loadFeed(0, function() {
            done();
          });
        });

         it('should have at least one entry', function(done) {
           feedLength = feed.length;
           expect(feedLength).not.toBe(0);
           done();
         })

     });

    describe('New Feed Selection', function() {
        let firstCall;

        beforeEach(function(done) {
          loadFeed(0, function() {
            done();
          });
          firstCall = $('.entry-link').html();
        });

         it('should change content', function(done) {
           loadFeed(1, function() {
             done();
           });
         });

         afterEach(function() {
           expect(firstCall).not.toEqual($('.entry-link'));
         });

   })
}());
