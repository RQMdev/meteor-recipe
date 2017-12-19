FlowRouter.route('/', {
	name: 'home',
	action() {
		BlazeLayout.render('HomeLayout');
	}
});

FlowRouter.route('/recipes-book', {
	name: 'recipes-book',
	action() {
		BlazeLayout.render('MainLayout', {main: 'Recipes'});
	}
});
