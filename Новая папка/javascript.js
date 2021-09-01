 // Initialize and add the map
 function initMap() {
    // The location of Uluru
    const uluru = { lat: 51.094529, lng: 71.452125 };
    // The map, centered at Uluru
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 11,
      center: uluru,
    });
    // The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
  }

  /*let parallax = document.getElementById("parallax");
  window.addEventListener('scroll', function(){
    var value = window.scrollY;
    parallax.style.top = value * 0.1 + 'px';
  })
  */
  
  let comments = [];
  loadComments();
  document.getElementById('comment-add').onclick = function(){
    //Event.preventDefault();
    let commentName = document.getElementById('comment-name');
    let commentBody = document.getElementById('comment-body');

    let comment = {
      name : commentName.value,
      body : commentBody.value,
      time : Math.floor(Date.now()/1000)
    }

    commentName.value = '';
    commentBody.value = '';
    comments.push(comment);
    saveComments();
    showComments();
  }

  function saveComments(){
    localStorage.setItem('comments',JSON.stringify(comments));
  }

  function loadComments(){
    if (localStorage.getItem('comments')) comments = JSON.parse(localStorage.getItem('comments'));
    showComments();
  }

  function showComments(){
    let commentField = document.getElementById('comment-field');
    let out = '';
    comments.forEach(function(item){
      out += `<p class="text-right-small"><em>${timeConverter(item.time)}</em></p>`;
      out += `<p class="alert alert-primary">${item.name}</p>`;
      out += `<p class="alert alert-success">${item.body}</p>`;
    });
    commentField.innerHTML = out;
  }

  function timeConverter(UNIX_timestamp){
    var a = new Date(UNIX_timestamp * 1000);
    var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
    var year = a.getFullYear();
    var month = months[a.getMonth()];
    var date = a.getDate();
    var hour = a.getHours();
    var min = a.getMinutes();
    var sec = a.getSeconds();
    var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min + ':' + sec;
    return time;
  }

/*  document.querySelector('.submitt').addEventListener('click',submitt);
function submitt(){
    let ac = document.querySelector('.textArea').value;
    let bc = document.querySelector('.text').value;
    console.log(ac);
    console.log(bc);
    if (ac=="" || bc==""){
        alert("You need to fill all these fields");
    }
    else {
        document.querySelector('.submitted').innerHTML = "Name: <br>" + ac + "<br><br>" + "Comment: <br>" + bc + "<br>";
    }
}
*/