import APIUtil from "./api_util.js";

class FollowToggle {
  constructor(el) {
    this.$el = $(el);
    this.userId = this.$el.data("user-id");
    this.followState = this.$el.data("initial-follow-state");
    this.render();
    this.$el.on("click", event => this.handleClick(event));
  }

  render() {
    if (this.followState === "unfollowed") {
      this.$el.text("Follow!");
      this.$el.prop('disabled', false);
    } else if(this.followState === "followed"){
      this.$el.text("Unfollow");
      this.$el.prop('disabled', false);
    } else {
      this.$el.prop('disabled', true);
    }
  }

  handleClick(event) {
    event.preventDefault();
    if (this.followState === "unfollowed") {
      this.followState = 'PENDING';
      this.render();
      APIUtil.followUser(this.userId)
        .then(() => {
          this.followState = 'followed';
          this.render();
        });
    } else if(this.followState === 'followed'){
      this.followState = 'PENDING';
      this.render();
      APIUtil.unfollowUser(this.userId)
        .then(() => {
          this.followState = 'unfollowed';
          this.render();
      });
    }
  }
}

export default FollowToggle;