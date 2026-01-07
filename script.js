const testimonial = document.querySelector(".testimonial");
const userImage = document.querySelector(".user-image");
const username = document.querySelector(".username");
const role = document.querySelector(".role");

if (!testimonial || !userImage || !username || !role) {
  console.error("Required DOM elements not found");
}

const testimonials = [
  {
    name: "Miyah Myles",
    role: "Marketing",
    photo: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200",
    text:
      "I've worked with literally hundreds of HTML/CSS developers and the top spot goes to this guy."
  },
  {
    name: "June Cha",
    role: "Software Engineer",
    photo: "https://randomuser.me/api/portraits/women/44.jpg",
    text:
      "Amazing frontend developer. Delivered exactly what we needed."
  },
  {
    name: "Jonathan Nunfiez",
    role: "Graphic Designer",
    photo: "https://randomuser.me/api/portraits/men/43.jpg",
    text:
      "Outstanding work, delivered before deadline. Highly recommended."
  }
];

let index = 0;

function updateTestimonial() {
  const t = testimonials[index];

  testimonial.textContent = t.text;
  userImage.src = t.photo;
  username.textContent = t.name;
  role.textContent = t.role;

  index = (index + 1) % testimonials.length;
}

updateTestimonial();
setInterval(updateTestimonial, 10000);

