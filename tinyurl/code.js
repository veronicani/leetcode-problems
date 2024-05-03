"use strict"

//FE
//endpoint: home/
/** returnShortLinkFromUserDestination: Makes a request to Write API for a short
 * link after a user inputs a destination link. Returns the short link to the 
 * user.
 */
//get the destination url from form input
//make write request
//return html display of the shortLink to the user 
let destination = get.from.form.input
resp = fetch(link/api/write/) {
  method: POST,
  data: {"slug": /** OPTIONAL */,
  "destination": "destination.com"
  }
}

//endpoint: home/slug
/** redirectFromShortLinkToDestination: Makes a request to Read API for the 
 * destination link, and returns a redirect to the destination.
 * 
 * If there is an error, display a 404 for page not found.
 */

//API
//endpoint: /api/write/

/** convertToShortLink: Generates a slug, or uses 
 * user-inputted slug, stores in DB, and returns the shortlink 
 * 
 * Inputs: 
 * destination - destination url
 * slug (optional) - custom user-inputted slug
 * 
 * Output:
 * shortLink - combination of hostname + slug
 **/

//checks if the user-input slug is unique
  //if not, throws an error
//adds the slug to database and destination, if not unique, generate another slug
//return the shortlink -> host + slug

/**generateSlug: generates a unique short slug for a destination link. 
 * 
 * Inputs: destination
 * Output: slug
*/
//hashes the destination + curr timestamp into a 7-letter slug and returns it

//endpoint: /api/read/slug
/** returnDestinationFromSlug: Lookup the slug in the DB, returns the destination
 * link. If slug not found, throw an error.
 */