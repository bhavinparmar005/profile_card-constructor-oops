// function hello(){
//     alert("button is clicked");
// }

// function Student(name,school,city,subject,mark,grad){

//     this.name=name;
//     this.school=school;
//     this.city=city;
//     this.subject=subject;
//     this.mark=mark;
//     this.grad=grad;
// }

// let data=[
//     new Student('bhavin parmar','Deepak high school','Amreli','English','98%','A+'),
//     new Student('umang gangera','forword high school','vadodara','math','90%','A'),
// ]
// data.forEach((val)=>{
//     console.log(val.name,val.school,val.city,val.subject,val.mark,val.grad);
// })

// target node main_container
let main_container = document.querySelector(".main_container");

function Userdata(
  user_image,
  user_name,
  user_job_fild,
  user_followers_number,
  user_followers_text,
  user_following_number,
  user_following_text,
  user_follow_button,
  user_massage_button
) {
  this.user_image = user_image;
  this.user_name = user_name;
  this.user_job_fild = user_job_fild;
  this.user_followers_number = user_followers_number;

  this.user_followers_text = user_followers_text;
  this.user_following_number = user_following_number;
  this.user_following_text = user_following_text;
  this.user_follow_button = user_follow_button;
  this.user_massage_button = user_massage_button;
}

let user_profile_data = [
  new Userdata(
    "./Assest/image/user2.jpg",
    "Emily Fisher",
    "Senior Web Developer",
    "1.6K",
    "Followers",
    "852",
    "Following",
    "Follow",
    "Message"
  )
 
];

user_profile_data.forEach((value) => {
  console.log(main_container);

  //    creat card div
  let card = document.createElement("div");
  card.className = "card";
  // card append to main_container
  main_container.appendChild(card);

  // creat a profile_section div
  let profile_section = document.createElement("div");
  profile_section.className = "profile_section";
  // card append to profile_section
  card.appendChild(profile_section);

  // creat a roung_img_main div
  let roung_img_main = document.createElement("div");
  roung_img_main.className = "roung_img_main";
  // profile_section to append roung_img_main
  profile_section.appendChild(roung_img_main);

  // creat a img tag
  let img = document.createElement("img");
  img.src = value.user_image;
  img.className = "img";
  //   roung_img_main to append img tag
  roung_img_main.appendChild(img);

  // creat a content_main_container div
  let content_main_container = document.createElement("div");
  content_main_container.className = "content_main_container";
  // content_main_container append to card div
  card.appendChild(content_main_container);

  // creat a content div
  let content = document.createElement("div");
  content.className = "content";
  //   content append to content_main_container
  content_main_container.appendChild(content);

  // creat a h2
  let h2 = document.createElement("h2");
  h2.className = 'user_name';
  h2.textContent = value.user_name;
  // h2 append to content
  content.appendChild(h2);

  // creat a p
  let p = document.createElement("p");
  p.textContent = value.user_job_fild;
  // p append to content
  content.appendChild(p);

  // creat social_networking_main div
  let social_networking_main = document.createElement("div");
  social_networking_main.className = "social_networking_main";
  // social_networking_main append to card
  card.appendChild(social_networking_main);

  // creat a followers div
  let followers = document.createElement("div");
  followers.className = "followers";
  // followers append to social_networking_main
  social_networking_main.appendChild(followers);

  //creat a h1 tag
  let followers_h1 = document.createElement("h1");
  followers_h1.textContent = value.user_followers_number;
  // followers_h1 append to followers
  followers.appendChild(followers_h1);

  //creat a p tag

  let followers_p = document.createElement("p");
  followers_p.textContent = value.user_followers_text;
  followers_p.className = 'follower_p_color';
  // followers_p append to followers
  followers.appendChild(followers_p);

  // creat a following div
  let following = document.createElement("div");
  following.className = "following";
  // following append to social_networking_main
  social_networking_main.appendChild(following);

  // create a h1 tag
  let following_h1 = document.createElement("h1");
  following_h1.textContent = value.user_following_number;
  // following_h1 append to following
  following.appendChild(following_h1);

  //creat a p tag
  let following_p = document.createElement("p");
  following_p.textContent = value.user_following_text;
  following_p.className = 'following_p_color';
  // following_p append to followers
  following.appendChild(following_p);

  // creat a  button_main div
  let button_main = document.createElement("div");
  button_main.className = "button_main";
  // button_main append to card
  card.appendChild(button_main);

  //creat a left_button div
  let left_button = document.createElement("div");
  left_button.className = "left_button";
  left_button.textContent = value.user_follow_button;
  // left_button append to button_main
  button_main.appendChild(left_button);

  //creat a left_button div
  let right_button = document.createElement("div");
  right_button.className = "right_button";
  right_button.textContent = value.user_massage_button;
  // left_button append to button_main
  button_main.appendChild(right_button);

  // creat a color_change div
  let color_change = document.createElement("div");
  color_change.className = "color_change";
  // color_change append to card
  card.appendChild(color_change);

  // creat a color1 div
  let color1 = document.createElement("div");
  color1.className = "color1";
  
  // color1 append to color_change
  color_change.appendChild(color1);

  // creat a color1 div
  let color2 = document.createElement("div");
  color2.className = "color2";
 
  // color2 append to color_change
  color_change.appendChild(color2);

  // creat a color3 div
  let color3 = document.createElement("div");
  color3.className = "color3";
 
  // color3 append to color_change
  color_change.appendChild(color3);

  // creat a color4 div
  let color4 = document.createElement("div");
  color4.className = "color4";
  
  // color4 append to color_change
  color_change.appendChild(color4);

  // creat a color5 div
  let color5 = document.createElement("div");
  color5.className = "color5";

  // color5  append to color_change
  color_change.appendChild(color5);

  // creat a color6 div
  let color6 = document.createElement("div");
  color6.className = "color6";

  // color6  append to color_change
  color_change.appendChild(color6);
});


let color1 = document.querySelector('.color1');
let color2 = document.querySelector('.color2');
let color3 = document.querySelector('.color3');
let color4 = document.querySelector('.color4');
let color5 = document.querySelector('.color5');
let color6 = document.querySelector('.color6');

let background = document.querySelector('.profile_section');
let box_shadow = document.querySelector('.roung_img_main');
let user_name = document.querySelector('.user_name');
let follower_p_color = document.querySelector('.follower_p_color');
let following_p_color = document.querySelector('.following_p_color');
let left_button_color = document.querySelector('.left_button');
let right_button_color = document.querySelector('.right_button');



color1.addEventListener('click', () => {

  background.style.backgroundColor = " rgb(255, 23, 86)";
  box_shadow.style.boxShadow = "-2px 0px 20px 2px rgb(255, 23, 86)";
  user_name.style.color = " rgb(255, 23, 86)";
  follower_p_color.style.color = "rgb(255, 23, 86)";
  following_p_color.style.color = "rgb(255, 23, 86)";
  left_button_color.style.backgroundColor = " rgb(255, 23, 86)";
  left_button_color.style.border = "2px solid rgb(255, 23, 86)";
  right_button_color.style.border = "2px solid rgb(255, 23, 86)";
  right_button_color.style.color = "rgb(255, 23, 86)";



});




color2.addEventListener('click', () => {

  background.style.backgroundColor = " rgb(46, 144, 213)";
  box_shadow.style.boxShadow = "-2px 0px 20px 2px rgb(46, 144, 213)";
  user_name.style.color = " rgb(46, 144, 213)";
  follower_p_color.style.color = "rgb(46, 144, 213)";
  following_p_color.style.color = "rgb(46, 144, 213)";
  left_button_color.style.backgroundColor = " rgb(46, 144, 213)";
  left_button_color.style.border = "2px solid rgb(46, 144, 213)";
  right_button_color.style.border = "2px solid rgb(46, 144, 213)";
  right_button_color.style.color = " rgb(46, 144, 213)";

});

color3.addEventListener('click', () => {

  background.style.backgroundColor = " rgb(145, 71, 175)";
  box_shadow.style.boxShadow = "-2px 0px 20px 2px rgb(145, 71, 175)";
  user_name.style.color = " rgb(145, 71, 175)";
  follower_p_color.style.color = "rgb(145, 71, 175)";
  following_p_color.style.color = "rgb(145, 71, 175)";
  left_button_color.style.backgroundColor = " rgb(145, 71, 175)";
  left_button_color.style.border = "2px solid rgb(145, 71, 175)";
  right_button_color.style.border = "2px solid rgb(145, 71, 175)";
  right_button_color.style.color = " rgb(145, 71, 175)";

});