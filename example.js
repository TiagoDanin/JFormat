"Forever {Python}".format({Python: "JavaScript"});
// "Forever JavaScript"

"Forever {0}".format(["JavaScript"]);
// "Forever JavaScript"

"Forever {Java}".format({}, true);
// "Forever "

format("Forever {Python}", {Python: "JavaScript"});
// "Forever JavaScript"

format("Forever {0}", ["JavaScript"]);
// "Forever JavaScript"

format("Forever {Java}", {}, true);
// "Forever "
