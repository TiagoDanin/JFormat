String.prototype.format = function (args, hideNull) {
	if (String(this)) {
		string = String(this);
	};
	return format(string, args, hideNull)
};
function format(string, args, hideNull) {
	if (args.__proto__ == Array.prototype) {
		var newArgs = {};
		for (var i = 0; i < args.length; i++) {
			newArgs[i] = args[i];
		};
		args = newArgs
	};
	return string.replace(/{([a-zA-Z|\d|_|-]*)}/g, function (match, key) {
		if (args.__proto__ == Object.prototype && args[key]) {
			return args[key];
		} else if (hideNull) {
			return "";
		} else {
			return match;
		};
	});
}