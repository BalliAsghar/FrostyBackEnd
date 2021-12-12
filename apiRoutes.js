/**
 * @Route  - "/api/events"
 * @Method - GET
 * @Desc   - Get All Events
 * @Access - Pirvate
 * @Return - JSON
 * @Param  - None
 * @Query  - Creator, Title, Description, category
 */

// --------------------------------------------------
/**
 * @Route  - "/api/events/:eventId"
 * @Method - GET
 * @Desc   - Get Event By ID
 * @Access - Pirvate
 * @Return - JSON
 * @Param  - eventId
 * @Query  - None
 */

// --------------------------------------------------

/**
 * @Route  - "/api/events/:eventId"
 * @Method - PATCH
 * @Desc   - Update Event By ID
 * @Access - Pirvate
 * @Return - JSON
 * @Param  - eventId
 */

// --------------------------------------------------

/**
 * @Route  - "/api/events/:eventId"
 * @Method - DELETE
 * @Desc   - Delete Event By ID
 * @Access - Pirvate
 * @Return - JSON
 * @Param  - eventId
 */

// ----------------------------USER Routes-----------------------

/**
 * @Route  - "/api/users/login"
 * @Method - POST
 * @Desc   - Login User
 * @Access - Public
 * @Return - JSON
 * @Param  - None
 * @Query  - None
 * @Body   - {email, password}
 */

// -----------------------------------------------------

/**
 * @Route  - "/api/users/register"
 * @Method - POST
 * @Desc   - Register User
 * @Access - Public
 * @Return - JSON
 * @Param  - None
 * @Query  - None
 * @Body   - {username, password, email, displayName... see User schema}
 */

// -----------------------------------------------------

/**
 * @Route  - "/api/users/profile/me"
 * @Method - GET
 * @Desc   - Get Logged In User Profile
 * @Access - Private
 * @Return - JSON
 * @Param  - None
 * @Query  - None
 * @Body   - None
 * @Auth   - Token
 */

// -----------------------------------------------------

/**
 * @Method DELETE
 * @Route  - "/api/users/profile/me"
 * @Desc   - Delete Logged In User Profile
 * @Access - Private
 * @Return - JSON
 * @Param  - None
 * @Query  - None
 * @Body   - None
 * @Auth   - Token
 */
