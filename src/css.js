const style = `
.wrapper * {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.wrapper *::before {
  box-sizing: border-box;
}
.wrapper *::after {
  box-sizing: border-box;
}
#wrapper {
  min-height: 50vh;
  min-width: 100vw;
  background: #f4cf0f;
  position: relative;
}
.dog {
  width: 120px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
.body {
  height: 300px;
  background: #f79e38;
  border-radius: 60px 60px 0 0;
}
.ears {
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 100%;
  z-index: -1;
  top: -30px;
}
.ears::before,
.ears::after {
  background: #fff;
  content: "";
  width: 40px;
  height: 90px;
  border-radius: 100% 100% 0 0;
  border: 10px solid #f79e38;
}
.eyes {
  display: block;
  position: relative;
  width: 20px;
  height: 30px;
  background: #fff;
  border-radius: 10px 10px 0 0;
  margin: 0 auto;
  top: 2px;
}
.eyes::before,
.eyes::after {
  position: absolute;
  bottom: 2px;
  content: "";
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: #000;
  animation: blink 1.2s ease-in-out infinite;
}
.eyes::before {
  left: -13px;
}
.eyes::after {
  right: -13px;
}
.beard {
  position: relative;
  width: 50px;
  height: 60px;
  margin: 0 auto;
  background: #ffffff;
  border-radius: 20px 20px 20px 20px;
}
.beard::before {
  content: "";
  position: absolute;
  width: 20px;
  height: 10px;
  border-radius: 0 0 15px 15px;
  background: #000000;
  left: 0;
  right: 0;
  margin: auto;
}
.beard::after {
  position: absolute;
  content: "";
  background: #ffffff;
  width: 26px;
  height: 20px;
  border-radius: 100%;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  transform: translate(0, 50%);
}
.mouth {
  position: absolute;
  width: 30px;
  height: 14px;
  border-radius: 0 0 15px 15px;
  background: #000000;
  top: 17px;
  left: 0;
  right: 0;
  margin: auto;
}
.tongue {
  position: relative;
  width: 20px;
  height: 35px;
  background: #ee7462;
  margin: 0 auto;
  border-radius: 10px 10px 20px 20px;
  top: 5px;
  z-index: 2;
  transition: 0.5s;
  animation: grow 0.2s infinite alternate ease-in;
}
.belt {
  background: #ff6b5a;
  height: 30px;
  margin-top: 20px;
  position: relative;
}
.belt > .bell-ring {
  background: #ffc442;
  width: 30px;
  height: 30px;
  border-radius: 15px;
  margin: 0 auto;
  transform: translate(0, 50%);
}
.belt > .dot,
.belt::before,
.belt::after {
  position: absolute;
  width: 10px;
  height: 10px;
  border-radius: 5px;
  background: #fff;
  display: inline-block;
  top: 0;
  bottom: 0;
  margin: auto;
}
.dot1 {
  left: 10px;
}
.dot2 {
  left: 30px;
}
.dot3 {
  right: 10px;
}
.dot4 {
  right: 30px;
}
.belt::before,
.belt::after {
  content: "";
  z-index: -1;
}
.belt::before {
  left: -5px;
}
.belt::after {
  right: -5px;
}
.stomach {
  position: absolute;
  width: 52px;
  height: 130px;
  background: #ffffff;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  border-radius: 26px 26px 0 0;
}
.legs {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 15px;
}
.legs::before,
.legs::after {
  position: absolute;
  content: "";
  width: 50px;
  height: 100%;
  background: #e98109;
  border-radius: 20px 20px 0 0;
}
.legs::before {
  left: -38px;
}
.legs::after {
  right: -38px;
}
.left,
.right {
  position: absolute;
  background: #ffc15a;
  width: 30px;
  height: 100%;
  border-radius: 13px 13px 0 0;
}
.left {
  left: -15px;
}
.right {
  z-index: 1;
  right: -15px;
}
.left::before,
.right::before {
  position: absolute;
  content: "";
  background: #e98109;
  width: 15px;
  height: 50px;
  transform: translate(0, -100%);
}
.left::before {
  border-radius: 100% 0 0 0;
}
.right::before {
  border-radius: 0 100% 0 0;
  transform: translate(100%, -100%);
}
@keyframes grow {
  100% {
    height: 45px;
  }
}
@keyframes blink {
  92% {
    transform: none;
  }
  100% {
    transform: scale(1.2, 0.2);
  }
}
  `;

export default style;
