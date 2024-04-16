$(document).ready(function(){

  

  display();

      function display(){

        const posts = [
          {
            id: 1,
            title: "ალგეთის საწვრთნელ ბაზაზე სამეთაურო-საშტაბო სწავლება დასრულდა",
            desc: "ალგეთის საწვრთნელ ბაზაზე ამოცანაზე ორიენტირებული ოთხდღიანი სწავლება დასრულდა.",
            img: "https://mod.gov.ge/uploads/2022/October/algetis-sawvrtnel-bazaze-sametauro-sashtabo-swavleba-dasrulda/algetis-sawvrtnel-bazaze-sametauro-sashtabo-swavleba-dasrulda.jpeg",
          },
          {
            id: 2,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://media.istockphoto.com/id/622974056/photo/political-speech.jpg?s=2048x2048&w=is&k=20&c=qgiRZzTkVxBz7wTenCg7AjfI4hP3K3fZ3NaBtNywpQ4=",
          },
          {
            id: 3,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://media.istockphoto.com/id/946578380/photo/talking-to-audience.jpg?s=2048x2048&w=is&k=20&c=LCveLY52GirUxcQ_NGa92MujpYej6mTu0dr8jppWt0E=",
          },
          {
            id: 4,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/76971/fighter-jet-fighter-aircraft-f-16-falcon-aircraft-76971.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 5,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://images.pexels.com/photos/73869/honor-guard-15s-guard-russian-73869.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
          },
          {
            id: 6,
            title: "Lorem ipsum dolor sit amet consectetur adipisicing elit",
            desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. A possimus excepturi aliquid nihil cumque ipsam facere aperiam at! Ea dolorem ratione sit debitis deserunt repellendus numquam ab vel perspiciatis corporis!",
            img: "https://upload.wikimedia.org/wikipedia/commons/2/24/Leopard_2_A5_der_Bundeswehr.jpg",
          },
        ];

        let template = ``;
        posts.forEach(post => {
            template += `<div class="grid-item">`
            template += `<div class="card" style="width: 288px;">`;
            template += `<img src="${post.img}"class="card-img-top" alt="image here">`;
            template += `<div class="card-body">`;
            template += `<h5 class="card-title cut-text">${post.title}</h5>`;
            template += `<p class="card-text cut-text">${post.desc}</p>`;
            template += `<a href="#" style="color: black;" class="btn btn-primary">ვრცლად</a>`;
            template += `</div>`;
            template += `</div>`;
            template += `</div>`;
        });

        $('#mainContent').html(template);
      }

      
})