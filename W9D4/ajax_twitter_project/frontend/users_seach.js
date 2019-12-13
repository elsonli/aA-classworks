import APIUtil from "./api_util";

class UsersSearch{
  constructor(el){
    this.$el = $(el);
    this.$input = $('nav.users-search input');
    this.$users = $('ul.users');
  }

  handleInput(event){
    event.preventDefault();
    APIUtil.searchUsers(this.$input.val());
  }
}