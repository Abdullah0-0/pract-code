





<!-- 
    <div class="box"></div>
    <button class="btn" onclick="colorChange()">
      Click
    </button> -->


<style>
/*  .box{
   margin: 20px;
   width: 80px;
   height: 80px;
   border: 2px solid black;
 }*/


<img
      id="myImage"
      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVrq_5GlnVyzzb3LKUPvmoYJrMaQ5nhr8J2x3LvuvHqCxhvyw_qoW4dHnOLccc2feUZFM&usqp=CAU"
      alt="random img"
    />




<script>
      const style = document.createElement('style');

      style.textContent = `
      #myImage:hover {
        border: 3px solid black;
      }
    `;

    document.head.appendChild(style);

    </script>





</style>































// Change the background color of a div when a button is clicked.

// function colorChange() {
//   document.querySelector(".box").style.backgroundColor = "green"

// //++++++++++++++++++++++++++++
