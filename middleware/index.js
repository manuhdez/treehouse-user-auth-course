// Checks if a user ho is logged in reaches to the ´login' or 'signup' route
// and redirects them to the profile page
function loggedOut(req, res, next) {
  if (req.session && req.session.userId) {
    return res.redirect('/profile');
  }
  return next();
}

module.exports.loggedOut = loggedOut;