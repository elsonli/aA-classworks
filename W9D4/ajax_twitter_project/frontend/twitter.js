import FollowToggle from "./follow_toggle";

$(() => {
  $("button.follow-toggle").each((idx, button) => new FollowToggle(button));
});