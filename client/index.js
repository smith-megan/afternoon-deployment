function makeStuff() {
  let pTag=document.body.createElement('p')
  pTag.textContent="hello I am here"
  document.body.append(pTag)
}

makeStuff()