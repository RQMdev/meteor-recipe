import { Mongo } from 'meteor/mongo';
import SimpleSchema from 'simpl-schema';
SimpleSchema.extendOptions(['autoform']);

Recipes = new Mongo.Collection('recipes');

Recipes.allow({
	insert(userId, doc){
		console.log('insert method called');
		return !!userId;
	}
});

Ingredient = new SimpleSchema({
	name: {
		type: String
	},
	amount: {
		type: String
	}
});

RecipeSchema = new SimpleSchema({
	name: {
		type: String,
		label: 'Name'
	},
	desc: {
		type: String,
		label: 'Description'
	},
	ingredients: {
		type: Ingredient
	},
	author: {
		type: String,
		label: 'Author',
		autoValue: function(){
			return this.userId
		},
		autoform: {
			type: 'hidden'
		}
	},
	createdAt: {
		type: Date,
		label: 'Created At',
		autoValue: function(){
			return new Date();
		},
		autoform: {
			type: 'hidden'
		}
	}
});

Recipes.attachSchema(RecipeSchema);
