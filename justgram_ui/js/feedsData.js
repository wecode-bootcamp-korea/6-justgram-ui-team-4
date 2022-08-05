fetch("../feedsData.json",{
  method:"GET"
})
.then((res) => res.json())
.then((data) => console.log(data))