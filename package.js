Package.describe({
	summary: "Meteor wrapper for dotdotdot"
});

Package.on_use(function (api) {
	api.add_files([
		"jQuery.dotdotdot/src/js/jquery.dotdotdot.min.js"
	], "client");
});
