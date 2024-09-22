const url = new URL(location.href)
const movieId = url.searchParams.get("id")
const movieTitle = url.searchParams.get("title")

const APILINK = "http://127.0.0.1:8000/api/v1/reviews/"

const main = document.getElementById("section")
const title = document.getElementById("title")

title.innerText = movieTitle

const divNew = document.createElement("div")
divNew.innerHTML = `
  <div class="row">
    <div class="column">
      <div class="card">
        <h3>New Review</h3>
        <p><strong>Review: </strong>
          <input type="text" id="newReview" value="">
        </p>
        <p><strong>User: </strong>
          <input type="text" id="newUser" value="">
        </p>
        <p>
          <a href="#" onclick="saveReview('newReview', 'newUser')">💾</a>
        </p>
      </div>
    </div>
  </div>
`
main.appendChild(divNew)

returnReviews(APILINK)

function returnReviews(url) {
  fetch(url + "movie/" + movieId).then(res => res.json())
    .then(function (data) {
      console.log(data)
      data.forEach(review => {
        const divCard = document.createElement("div")
        divCard.innerHTML = `
          <div class="row">
            <div class="column">
              <div class="card" id="${review._id}">
                <p><strong>Review: </strong>${review.review}</p>
                <p><strong>User: </strong>${review.user}</p>
                <p>
                  <a href="#" onclick="editReview('${review._id}', '${review.review}', '${review.user}')">✏️</a> <a href="#" onclick="deleteReview('${review._id}')">🗑️</a>
                </p>
              </div>
            </div>
          </div>
        `
        main.appendChild(divCard)

      })
    })
}

function editReview(id, review, user) {
  console.log(review)

  const element = document.getElementById(id)
  console.log(element)

  const reviewInputId = "review" + id
  const userInputId = "user" + id

  element.innerHTML = `
    <p><strong>Review: </strong>
      <input type="text" id="${reviewInputId}" value="${review}">
    </p>
    <p><strong>User: </strong>
      <input type="text" id="${userInputId}" value="${user}">
    </p>
    <p>
      <a href="#" onclick="saveReview('${reviewInputId}', '${userInputId}', '${id}')">💾</a>
    </p>
  `
}

function saveReview(reviewInputId, userInputId, id = "") {
  const review = document.getElementById(reviewInputId).value
  const user = document.getElementById(userInputId).value

  if (id) {
    fetch(APILINK + id, {
      method: "PUT",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "user": user, "review": review })
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        location.reload() // Reload page after review editted
      })
  }
  else {
    fetch(APILINK + "new", {
      method: "POST",
      headers: {
        "Accept": "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ "user": user, "review": review, "movieId": movieId })
    }).then(res => res.json())
      .then(res => {
        console.log(res)
        location.reload()
      })
  }
}

function deleteReview(id) {
  fetch(APILINK + id, {
    method: 'DELETE'
  }).then(res => res.json())
    .then(res => {
      console.log(res)
      location.reload();
    });
}