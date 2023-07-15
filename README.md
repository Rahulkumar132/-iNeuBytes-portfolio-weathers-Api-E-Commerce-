# -iNeuBytes-portfolio-weathers-Api-E-Commerce-
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

header {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  height: 60px;
  width: 100%;
  background: black;
}

p {
  color: rgb(20, 220, 47);
  font-size: x-large;
}

.heading ul {
  display: flex;
}

.logo a {
  color: white;
  transition-duration: 1s;
  font-weight: 800;
}

.logo a:hover {
  color: rgb(240, 197, 6);
  transition-duration: 1s;
}

.heading ul li {
  list-style: none;
}

.heading ul li a {
  margin: 5px;
  text-decoration: none;
  color: black;
  font-weight: 500;
  position: relative;
  color: white;
  margin: 2px 14px;
  font-size: 18px;
  transition-duration: 1s;
}

.heading ul li a:active {
  color: red;
}

.heading ul li a:hover {
  color: rgb(243, 168, 7);
  transition-duration: 1s;
}

.heading ul li a::before {
  content: "";
  height: 2px;
  width: 0px;
  position: absolute;
  left: 0;
  bottom: 0;
  background-color: white;
  transition-duration: 1s;
}

.heading ul li a:hover::before {
  width: 100%;
  transition-duration: 1s;
  background-color: rgb(243, 168, 7);
}

#input {
  height: 30px;
  width: 300px;
  text-decoration: none;
  border: 0px;
  padding: 5px;
}

.logo a {
  color: white;
  font-size: 35px;
  font-weight: 500;
  text-decoration: none;
}

ion-icon {
  width: 30px;
  height: 30px;
  background-color: white;
  color: black;
}

ion-icon:hover {
  cursor: pointer;
}

.search a {
  display: flex;
}

header a ion-icon {
  position: relative;
  right: 3px;
}

.img-slider img {
  height: 720px;
  width: 1080px;
}

@keyframes slide {
  0% {
    left: 0px;
  }

  15% {
    left: 0px;
  }

  20% {
    left: -1080px;
  }

  32% {
    left: -1080px;
  }

  35% {
    left: -2160px;
  }

  47% {
    left: -2160px;
  }

  50% {
    left: -3240px;
  }

  63% {
    left: -3240px;
  }

  66% {
    left: -4320px;
  }

  79% {
    left: -4320px;
  }

  82% {
    left: -5400px;
  }

  100% {
    left: 0px;
  }
}

.img-slider {
  display: flex;
  float: left;
  position: relative;
  width: 1080px;
  height: 720px;
  animation-name: slide;
  animation-duration: 10s;
  animation-iteration-count: infinite;
  transition-duration: 2s;
}

.heading1 {
  opacity: 0;
}

.search {
  display: flex;
  position: relative;
}

.section1 {
  width: 1080px;
  overflow: hidden;

  justify-content: center;
  align-items: center;
  margin: 0px auto;
}

.section2 .container {
  display: flex;
  width: 100%;
  height: max-content;
  flex-wrap: wrap;
  justify-content: center;
  margin: 10px auto;
}

.section2 .container .items {
  margin: 10px;
  width: 200px;
  height: 300px;
  background-color: white;
  border: 2.5px solid black;
  border-radius: 12px;
}

.section2 .container .items .name {
  text-align: center;
  background-color: rgb(240, 197, 6);
  height: 25px;
  padding-top: 4px;
  color: white;
  margin: 0;
}

.section2 .container .items .price {
  float: left;
  padding-left: 10px;
  display: block;
  width: 100%;
  color: rgb(255, 0, 0);
  font-weight: 650;
}

.section2 .container .items .info {
  padding-left: 10px;
  color: rgb(243, 168, 7);
}

.section2 .container .items .img img {
  width: 200px;
  height: 200px;
  margin: 0;
  padding: 0;
  border-radius: 12px;
  transition-duration: 0.8s;
}

.section2 .container .items .img {
  overflow: hidden;
  margin: 0;
}

.section2 .container .items:hover .img img {
  transform: scale(1.2);
  transition-duration: 0.8s;
  border-radius: 12px;
}

footer {
  display: flex;
  flex-direction: column;
  background-color: black;
  align-items: center;
  color: white;
}

.footer1 {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: white;
  margin-top: 15px;
}

.social-media {
  display: flex;
  justify-content: center;
  color: white;
  flex-wrap: wrap;
}

.social-media a {
  color: white;
  margin: 20px;
  border-radius: 5px;
  margin-top: 10px;
  color: white;
}

.social-media a ion-icon {
  color: white;
  background-color: black;
}

.social-media a:hover ion-icon {
  color: red;
  transform: translateY(5px);
}

.footer2 {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  align-items: center;
  text-decoration: none;
  flex-wrap: wrap;
}

.footer0 {
  font-weight: 1200;
  transition-duration: 1s;
}

.footer0:hover {
  color: rgb(243, 168, 7);
}

.footer2 .heading {
  font-weight: 900;
  font-size: 18px;
}

.footer3 {
  margin-top: 60px;
  margin-bottom: 20px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.footer2 .heading:hover {
  color: rgb(243, 168, 7);
}

.footer2 .div:hover {
  transform: scale(1.05);
}

.footer3 h4 {
  margin: 0 10px;
}

.footer2 div {
  margin: 10px;
}

.menu {
  visibility: hidden;
}

.heading1 .ham:active {
  color: red;
}

.items {
  overflow: hidden;
}

.ham,
.close {
  cursor: pointer;
}

@media screen and (max-width: 1250px) {
  .heading ul li {
    display: none;
  }

  .items {
    transform: scale(0.9);
  }

  .img-slider img {
    height: 60vw;
    width: 80vw;
  }

  .ham:active {
    color: red;
  }

  .menu {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  .menu a ion-icon {
    position: absolute;
  }

  @keyframes slide1 {
    0% {
      left: 0vw;
    }

    15% {
      left: 0vw;
    }

    20% {
      left: -80vw;
    }

    32% {
      left: -80vw;
    }

    35% {
      left: -160vw;
    }

    47% {
      left: -160vw;
    }

    50% {
      left: -240vw;
    }

    63% {
      left: -240vw;
    }

    66% {
      left: -320vw;
    }

    79% {
      left: -320vw;
    }

    82% {
      left: -400vw;
    }

    100% {
      left: 0vw;
    }
  }

  .menu ul {
    display: flex;
    flex-direction: column;
    position: absolute;
    width: 100vw;
    height: 100vh;
    background-color: black;
    left: 0;
    top: 0;
    z-index: 11;
    align-items: center;
    justify-content: center;
    opacity: 1;
  }

  .close {
    z-index: 34;

    color: white;
    background-color: black;
  }

  .close:active {
    color: red;
  }

  .menu ul li {
    list-style: none;
    margin: 20px;
    border-top: 3px solid white;
    width: 80%;
    text-align: center;

    padding-top: 10px;
  }

  .menu ul li a {
    text-decoration: none;
    padding-top: 10px;
    color: white;
    font-weight: 900;
  }

  .menu ul li a:hover {
    color: rgb(240, 197, 6);
  }

  .img-slider {
    display: flex;
    float: left;
    position: relative;
    width: 80%;
    height: 60%;
    animation-name: slide1;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    transition-duration: 2s;
  }

  .section1 {
    width: 80%;
    overflow: hidden;

    justify-content: center;
    align-items: center;
    margin: 0px auto;
  }

  .heading1 {
    opacity: 1;
    position: relative;
    bottom: 8px;
  }

  .search a {
    display: flex;
    flex-wrap: nowrap;
  }

  .heading1 .ham {
    background-color: black;
    color: white;
  }

  #input {
    width: 200px;
    flex-shrink: 2;
  }

  header {
    height: 150px;
  }
}

@media screen and (max-width: 550px) {
  .heading ul li {
    display: none;
  }

  .heading1 {
    opacity: 1;

    bottom: 8px;
  }

  header {
    height: 250px;
    flex-wrap: wrap;
    display: flex;
    flex-direction: column;
  }

  #input {
    width: 150px;
  }

  .close {
    z-index: 34;
  }

  .search a {
    display: flex;
    flex-wrap: nowrap;
  }
}
